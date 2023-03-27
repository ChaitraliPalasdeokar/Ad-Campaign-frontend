import axios from "axios";

export const fetchData = async () => {
	try {
        const response = await axios.get(
					"http://localhost:5000/api/v1/data?groupby=source&aggregate=attributed_revenue"
				);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
