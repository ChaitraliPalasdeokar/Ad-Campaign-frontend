import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({data}) => {

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

	const chartOptions = {
		responsive: true,
		plugins: {
    title: {
      display: true,
      text: 'Attributed Revenue for each source',
    },
  },
	};

    return <Bar data={chartData} options={chartOptions }/>;
};

export default BarChart;
