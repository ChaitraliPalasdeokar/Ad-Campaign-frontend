import React, { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const ClusteredBarChart = (props) => {

	const [data, setData] = useState({});
	const [dataset, setDataset] = useState([]);
    
	useEffect(() => {
			const getData = async () => {
				const apiResponse = await fetchData(
					"data?groupby=type&aggregate=attributed_revenue,spends"
				);
				setData(apiResponse);
				prepareDataset(apiResponse);

			};
        getData();
		}, []);

		
	const prepareDataset=(response)=> {
		const dataset = [];
		const backgroundColor = [
			"rgba(255,99,132,0.6)",
			"rgba(155,231,91,0.6)",
			"rgba(240,231,91,0.2)",
			"rgba(246,231,91,0.2)",
		];
		const objectentries = Object.entries(response)[0][1];
		const keysToExtract = Object.keys(objectentries);
		const dataarray = processData(response, keysToExtract);
		keysToExtract.forEach((key, index) => {
			dataset.push({
				label: key,
				backgroundColor: backgroundColor[index],
				hoverBackgroundColor: "rgba(255,99,132,1)",
				data: dataarray[key],
			});
		});
		setDataset(dataset);
	}

	const processData=(data, keysToExtract)=> {
		const arrays = {};

		function createArrayFromObjectValues(obj) {
			for (const key in obj) {
				if (typeof obj[key] === "object") {
					createArrayFromObjectValues(obj[key]);
				} else {
					if (keysToExtract.includes(key)) {
						if (!arrays[key]) {
							arrays[key] = [];
						}
						arrays[key].push(obj[key]);
					}
				}
			}
		}
		createArrayFromObjectValues(data);
		return arrays;

	}
    const chartData = {
		labels: Object.keys(data),
		datasets: dataset,
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Comparison based on advertisement type",
			},
		},
	};

	return (
		<Bar
			{...props}
			data={chartData}
			options={chartOptions}
		/>
	);
};

export default ClusteredBarChart;
