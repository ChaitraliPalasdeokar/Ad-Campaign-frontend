import React from "react";
import { fetchData } from "../helpers/fetchData";
import AdMetrics from "./Metrics";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import {
	render
} from "@testing-library/react";


jest.mock("../helpers/fetchData", () => ({
	__esModule: true,
	fetchData: jest.fn(),
}));

describe("Metrics component", () => {
	it("should show metrics data", async () => {
		const mockData = {
			attributed_conversions: 83482,
			attributed_revenue: 9493454.6,
			spends: 1720017.57,
		};
		fetchData.mockResolvedValue(mockData);

		const comp = renderer.create(<AdMetrics />);

		expect(comp.toJSON()).toMatchSnapshot();
	});

	it("should make an API call to get metrics data", async () => {
		const mockData = {
			attributed_conversions: 83482,
			attributed_revenue: 9493454.6,
			spends: 1720017.57,
		};
		fetchData.mockResolvedValue(mockData); 

		let container;
		await act(async () => {
			const { container: c } = render(<AdMetrics />);
			container = c;
		});
		expect(fetchData).toHaveBeenCalledWith(
			"data/metrics"
		);
	});
});