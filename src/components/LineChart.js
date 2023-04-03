import React from "react";
import { useState, useEffect } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-zoom';
import { fetchData } from "../helpers/fetchData";
import "chartjs-adapter-date-fns";
ChartJS.register(
    TimeScale,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
const LineChart = (props) => {
	const [dataset, setDataset] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const apiResponse = await fetchData("data?fields=date&fields=source&fields=spends&groupby=source");
			const data = prepareDataset(apiResponse);
			setDataset(data);
		};
		getData();
	}, []);

	// TODO: select index and highlight line
	// useEffect(() => {
	// 	if (selectedIndex >= 0)
	// 		console.log('in use effect',selectedIndex);
	// }, [selectedIndex]);
	
	const options = {
		chart: {
			zoom: {
				enabled: true,
				mode: "x",
			},
			pan: {
				enabled: true,
				mode: "x",
			},
		},
		zoom: {
			enabled: true,
			mode: "x",
		},
		pan: {
			enabled: true,
			mode: "x",
		},
		response: true,
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				type: "time",
				time: {
					unit: "month", // or "week", "month", "year", etc.
					displayFormats: {
						day: "MMM d",
					},
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				// position: "right",
			},
			title: {
				display: true,
				text: "Time series data for Attributed Revenue",
			},
		},
	};

	const prepareDataset = (data) => {
		const entries = Object.entries(data);
		const datasets = [];
		entries.forEach((entry) => {
			const formatedDataAccordingToAxes =[];
			const values = entry[1];
			values.forEach((obj) => {
				formatedDataAccordingToAxes.push({ x: obj.date, y: obj.spends });
			});
			datasets.push({
				label: entry[0],
				data: formatedDataAccordingToAxes,
			});
		});
		return datasets;
	}

	return (
		<Line
			{...props}
			options={options}
			data={{
				datasets: dataset,
			}}
		/>
	);
};
export default LineChart;
