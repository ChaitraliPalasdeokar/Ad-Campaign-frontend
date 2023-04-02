import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import ClusteredBarChart from "./ClusteredBarChart";
import { fetchData } from "../helpers/fetchData";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import AdMetrics from "./Metrics";
import "../styles/Dashboard.css";
const Dashboard = () => {
	const [data, setData] = useState({});
	const [selectedIndex, setSelectedIndex] = useState(-1);
	console.log("In app js", selectedIndex);

	const handleChildClick = (index) => {
		setSelectedIndex(index);
	};

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData(
				"data?groupby=source&aggregate=attributed_revenue"
			);
			setData(result);
		};

		getData();
	}, []);

	return (
		<div>
			<AdMetrics />
			<div className="container">
				<div class="bar-chart-container">
					<BarChart data={data} handleChildClick={handleChildClick} />
					<div class="line-chart-container">
						<LineChart selectedIndex={selectedIndex} />
					</div>
				</div>
				<div class="bar-chart-container">
					<div class="doughnut-chart-container">
						<DoughnutChart />
					</div>
					<div class="clustered-bar-chart-container">
						<ClusteredBarChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
