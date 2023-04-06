import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({ data,  handleClick }) => {
	const attributed_revenues_per_source = Object.values(data);
	const attributed_revenue_numbers_array = attributed_revenues_per_source.map(obj => Object.values(obj)[0]);
	
	const chartData = {
		labels: Object.keys(data),
		datasets: [
			{
				label: "Attributed Revenue",
				data: attributed_revenue_numbers_array,
				backgroundColor: "rgba(75,192,192,0.7)",
				hoverBackgroundColor: "rgba(75,192,192,1)",
			},
		],
	};

	const chartOptions = {
		responsive: true,
		onClick: (e, elements) => {
			handleClick(elements[0].index);
			
		},
		plugins: {
			title: {
				display: true,
				text: "Attributed Revenue for each advertisement source",
			},
		},
	};

	return (
		<Bar
			// {...style}
			data={chartData}
			options={chartOptions}
			onElementsClick={handleClick}
		/>
	);
};

export default BarChart;
