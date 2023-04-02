import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";
import "chartjs-adapter-date-fns";

const LineChart = () => {
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

    // const options = {
	// 		responsive: true,
	// 		// maintainAspectRatio: false,
	// 		plugins: {
	// 			legend: {
	// 				display: "false",
	// 			},
	// 			title: {
	// 				display: true,
	// 				text: "Chart.js Line Chart",
	// 			},
	// 		},
	// 		scales: {
	// 			// xAxis: {
	// 			// 	grid: { color: "whitesmoke" },
	// 			// 	ticks: {
	// 			// 		color: "darkslategrey",
	// 			// 		font: { size: 9, weight: "bold" },
	// 			// 		maxRotation: 0,
	// 			// 	},
	// 			// },
	// 			// yAxis: {
	// 			// 	position: "right",
	// 			// 	grid: { color: "whitesmoke" },
	// 			// 	ticks: { color: "darkslategrey", font: { size: 11, weight: "bold" } },
	// 			// },
	// 		},
	// 	};

    const options = {
			// chart: {
			// 	id: "area-datetime",
			// 	type: "area",
			// 	height: 350,
			// 	zoom: {
			// 		autoScaleYaxis: true,
			// 	},
			// },
			scales: {
				x: {
					type: "time",
					time: {
						unit: "day", // or "week", "month", "year", etc.
						displayFormats: {
							day: "MMM d",
						},
					},
					title: {
						display: true,
						text: "Date",
					},
				},
			},
			responsive: true,
			plugins: {
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: "Chart.js Line Chart",
				},
			},
		};

    // const labels = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    // ];

    const labels = [
			"2022-06-01",
			"2022-06-02",
			"2022-06-03",
			"2022-06-04",
			"2022-06-05",
			// "2022-06-06",
			// "2022-06-07",
			// "2022-06-08",
			// "2022-06-09",
			// "2022-06-10",
			// "2022-06-11",
			// "2022-06-12",
			// "2022-06-13",
			// "2022-06-14",
			// "2022-06-15",
			// "2022-06-16",
			// "2022-06-17",
			// "2022-06-18",
			// "2022-06-19",
			// "2022-06-20",
			// "2022-06-21",
			// "2022-06-22",
			// "2022-06-23",
			// "2022-06-24",
			// "2022-06-25",
			// "2022-06-26",
			// "2022-06-27",
			// "2022-06-28",
			// "2022-06-29",
			// "2022-06-30",
			// "2022-07-01",
			// "2022-07-02",
			// "2022-07-03",
			// "2022-07-04",
			// "2022-07-05",
			// "2022-07-06",
			// "2022-07-07",
			// "2022-07-08",
			// "2022-07-09",
			// "2022-07-10",
			// "2022-07-11",
			// "2022-07-12",
			// "2022-07-13",
			// "2022-07-14",
			// "2022-07-15",
			// "2022-07-16",
			// "2022-07-17",
			// "2022-07-18",
			// "2022-07-19",
			// "2022-07-20",
			// "2022-07-21",
			// "2022-07-22",
			// "2022-07-23",
			// "2022-07-24",
			// "2022-07-25",
			// "2022-07-26",
			// "2022-07-27",
			// "2022-07-28",
			// "2022-07-29",
			// "2022-07-30",
			// "2022-07-31",
			// "2022-08-01",
			// "2022-08-02",
			// "2022-08-03",
		];

    const labeldate = labels.map((date) => Date.parse(date));
    console.log(labeldate);

    const data = {
			labeldate,
			datasets: [
				{
					label: "Dataset 1",
					data: labels.map(() =>
						faker.datatype.number({ min: -1000, max: 1000 })
					),
					borderColor: "rgb(255, 99, 132)",
					backgroundColor: "rgba(255, 99, 132, 0.5)",
				},
				{
					label: "Dataset 2",
					data: labels.map(() =>
						faker.datatype.number({ min: -1000, max: 1000 })
					),
					borderColor: "rgb(53, 162, 235)",
					backgroundColor: "rgba(53, 162, 235, 0.5)",
				},
			],
		};

    return <Line options={options }data={data} />;
};
export default LineChart;