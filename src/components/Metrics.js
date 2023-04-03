import React, { useState, useEffect } from "react";
import "../styles/AdMetrics.css";
import { fetchData } from "../helpers/fetchData";


function AdMetrics() {
	const [apiResponse, setapiResponse] = useState({});

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData("data");
			setapiResponse(result);
		};
		getData();
	}, []);

	return (
		<div className="ad-metrics">
			<h2 className="ad-metrics-header">
				Advertising Metrics from June to November, 2022
			</h2>
			<div className="ad-metrics-data">
				<div className="ad-metrics-item">
					<span className="ad-metrics-label">Total Revenue:</span>
					<span className="ad-metrics-value">1233443</span>
				</div>
				<div className="ad-metrics-item">
					<span className="ad-metrics-label">Total Conversions:</span>
					<span className="ad-metrics-value">4444444</span>
				</div>
				<div className="ad-metrics-item">
					<span className="ad-metrics-label">Total Spend:</span>
					<span className="ad-metrics-value">4444449</span>
				</div>
			</div>
		</div>
	);
}

export default AdMetrics;
