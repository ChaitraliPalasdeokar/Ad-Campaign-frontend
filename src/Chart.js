import React from "react";
import { Bar } from "react-chartjs-2";
import data from "./data";
import { Chart as ChartJS } from 'chart.js/auto'

const Chart = () => {
	const labels = data.map((item) => item.label);
	const values = data.map((item) => item.value);

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "My Data",
				data: values,
				backgroundColor: "rgba(75,192,192,1)",
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

    return <Bar data={chartData} options={chartOptions }/>;
};

export default Chart;
