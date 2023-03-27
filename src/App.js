import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { fetchData } from './helpers/fetchData';


function App() {
	const [data, setData] = useState({});
	useEffect(() => {
		const getData = async () => {
			const result = await fetchData();
			setData(result);
		};

		getData();
	
	}, [])
	return (
		<div className="App">
			<BarChart data={data} />
		</div>
	);
}

export default App;
