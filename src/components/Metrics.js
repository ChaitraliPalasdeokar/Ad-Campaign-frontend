import React from "react";
import "../styles/AdMetrics.css"; 

function AdMetrics() {
	return (
		<div className="ad-metrics">
			<h2 className="ad-metrics-header">Advertising Metrics for last 6 months</h2>
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