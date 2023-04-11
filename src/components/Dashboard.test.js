import React from "react";
import {
	render,
	screen,
	waitFor,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import DoughnutChart from "./DoughnutChart";
import { fetchData } from "../helpers/fetchData";
import AdMetrics from "./Metrics";

import renderer from "react-test-renderer";
import Dashboard from "./Dashboard";
import { act } from "react-dom/test-utils";
// import { create, act } from "react-test-renderer";

jest.mock("react-chartjs-2", () => ({
	Doughnut: () => null,
	Bar: () => null,
	Line: () => null,
}));

jest.mock("../helpers/fetchData", () => ({
	__esModule: true,
	fetchData: jest.fn(),
}));

jest.mock("./LineChart");

describe("DoughnutChart component", () => {
	it("should show dashboard", async () => {
		const mockData = {
			affiliate_prospecting: {
				spends: 114594.37490799998,
			},
			baseline: {
				spends: 10450.631080134954,
			},
		};
		fetchData.mockResolvedValueOnce(mockData);

		const comp = renderer.create(<Dashboard />);

		expect(comp.toJSON()).toMatchSnapshot();
	});
});
