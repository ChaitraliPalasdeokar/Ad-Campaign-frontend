import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchData } from "../helpers/fetchData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const DoughnutChart = (props) => {
	ChartJS.register(ArcElement, Tooltip, Legend);
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData(
				"data?groupby=source&aggregate=attributed_conversions"
			);
			setData(result);
		};

		getData();
	}, []);

	const attributed_conversions_object = Object.values(data);
	const attributed_conversions_array = attributed_conversions_object.map((obj) => Object.values(obj)[0]);

	const chartData = {
		labels: Object.keys(data),
		datasets: [
			{
				label: "Attributed Conversions",
				data: attributed_conversions_array,
				backgroundColor: [
					"rgba(255, 99, 132, 0.4)",
					"rgba(54, 162, 235, 0.4)",
					"rgba(255, 206, 86, 0.4)",
					"rgba(75, 192, 192, 0.4)",
					"rgba(153, 102, 255, 0.4)",
					"rgba(255, 159, 64, 0.4)",
					"rgba(120, 140, 20, 0.4)",
					"rgba(150, 225, 11, 0.4)",
					"rgba(11, 250, 11, 0.4)",
					"rgba(55, 34,72, 0.4)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
					"rgba(120, 140, 20,1)",
					"rgba(150, 225, 11, 1)",
					"rgba(11, 250, 11, 1)",
					"rgba(55, 34,72, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: "right",
			},
			title: {
				display: true,
				text: "Attributed Conversions for each source",
			},
		},
	};

	return <Doughnut {...props} data={chartData} options={chartOptions} />;
};

export default DoughnutChart;
