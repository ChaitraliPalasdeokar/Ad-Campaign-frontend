import React from "react";
import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import DoughnutChart from "./DoughnutChart";
import { fetchData } from "../helpers/fetchData";
import renderer from 'react-test-renderer';
import Dashboard from "./Dashboard";
// jest.mock("../helpers/fetchData");
import { act } from "react-dom/test-utils";


jest.mock("react-chartjs-2", () => ({
	Doughnut: () => null,
	Bar: () => null,
	Line: () => null,
}));
jest.mock("../helpers/fetchData", () => ({
	__esModule: true,
	fetchData: jest.fn(),
}));
describe("DoughnutChart component", () => {
	const mockData = {
		affiliate_prospecting: {
			spends: 114594.37490799998,
		},
		baseline: {
			spends: 10450.631080134954,
		},
	};
	fetchData.mockResolvedValueOnce(mockData); // mock fetchData to resolve with 
	it("shpuld run", async () => {
		fetchData.mockResolvedValueOnce(mockData); // mock fetchData to resolve with
		// render(<DoughnutChart />)

		let container;
		await act(async () => {
			const { container: c } = render(<DoughnutChart />);
			container = c;
		});
		expect(fetchData).toHaveBeenCalledWith(
			"data?groupby=source&aggregate=attributed_conversions"
		);
	});
	// render(<DoughnutChart />)
	// await waitFor(() => {
    //   expect(fetchData).toHaveBeenCalledWith('data?groupby=source&aggregate=attributed_conversions');
    //   expect(setData).toHaveBeenCalledWith(apiResponse);
    // });
	//   let container;
    // await act(async () => {
    //   const { container: c } = render(<MyComponent />);
    //   container = c;
    // });

    // expect(fetchData).toHaveBeenCalledWith('data?groupby=source&aggregate=attributed_conversions');
    // expect(setData).toHaveBeenCalledWith(apiResponse);
//   });
	// jest.mock("axios", () => {
	// 	return {
	// 		get: jest.fn().mockImplementationOnce(() => Promise.resolve(mockData)),
	// 	};
	// });
	// beforeEach(() => {
	// 	fetchData.mockResolvedValue({
	// 		affiliate_prospecting: {
	// 			spends: 114594.37490799998,
	// 		},
	// 		baseline: {
	// 			spends: 10450.631080134954,
	// 		},
	// 	});
	// });

	afterEach(() => {
		jest.resetAllMocks();
	});

	it.skip("renders a doughnut chart with data fetched from API", async () => {
		jest.mock("react-chartjs-2", () => ({
			Doughnut: () => null,
		}));
		fetchData.mockResolvedValueOnce(mockData); // mock fetchData to resolve with

		const { getByText } = render(<DoughnutChart />);
		await act(async () => {
			const { getByText } = render(<DoughnutChart />);
		});

		// Wait for data to be fetched and chart to render
		// await waitFor(() => {
		// 	expect(fetchData).toHaveBeenCalledTimes(1);
		// 	// expect(
		// 	// 	getByText("Attributed Conversions for each source")
		// 	// ).toBeInTheDocument();
		// });
		expect(fetchData).toHaveBeenCalledTimes(1);

		// Verify chart data
		// const chart = getByText("Attributed Conversions for each source").closest(
		// 	"canvas"
		// );
		// expect(chart).toBeInTheDocument();
		// expect(chart).toHaveAttribute(
		// 	"data-chartjs",
		// 	expect.stringContaining('"data":[10,20,30]')
		// );
	});

	// it("snap", async () => {
	// 	const comp = renderer.create(<Dashboard />);
	// 	expect(comp.toJSON()).toMatchSnapshot();
	// });

	it.skip("renders a doughnut chart with default options", async () => {
		const { getByText } = render(<DoughnutChart />);

		// Wait for data to be fetched and chart to render
		await waitFor(() => {
			expect(fetchData).toHaveBeenCalledTimes(1);
			expect(
				getByText("Attributed Conversions for each source")
			).toBeInTheDocument();
		});

		// Verify chart options
		const chart = getByText("Attributed Conversions for each source").closest(
			"canvas"
		);
		expect(chart).toBeInTheDocument();
		expect(chart).toHaveAttribute("height", "300");
		expect(chart).toHaveAttribute("width", "600");
	});
});
