import React from "react";
import { Bar } from "react-chartjs-2";
// import data from "./data";
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({data}) => {
	// const labels = data.map((item) => item.label);
	// const values = data.map((item) => item.value);

	const chartData = {
		labels: Object.keys(data),
		datasets: [
			{
				label: "Attributed Revenue",
				data: Object.values(data),
				backgroundColor: "rgba(75,192,192,1)",
			},
		],
	};

	// const chartOptions = {
	// 	responsive: true,
	// 	maintainAspectRatio: false,  
	// 	// scales: {
	// 	// 	yAxes: [
	// 	// 		{
					  
	// 	// 		},
	// 	// 	],
	// 	// },
	// };

	const chartOptions = {
		responsive: true,
		plugins: {
    // legend: {
    //   position: 'top',
    // },
    title: {
      display: true,
      text: 'Attributed Revenue for each source',
    },
  },
	};

    return <Bar data={chartData} options={chartOptions }/>;
};

export default BarChart;
