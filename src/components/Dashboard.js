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

	const handleClick = (index) => {
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
			<div class="page-wrapper">
				<div class="row">
					<div class="wrapper">
						<BarChart data={data} handleClick={handleClick} />
					</div>
					<div class="wrapper">
						<DoughnutChart style={{ height: "100 %", width: "100%" }} />
					</div>
					<div class="wrapper">
						<LineChart
							selectedIndex={selectedIndex}
							style={{ height: "100 %", width: "100%" }}
						/>
					</div>
					<div class="wrapper">
						<ClusteredBarChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
