import axios from "axios";
import { API_BASE_URL, API_HOST_LOCAL } from "../config/env-config";

export const fetchData = async (path) => {
	try {
        const response = await axios.get(`${API_HOST_LOCAL}/${API_BASE_URL}/${path}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};


