import React from "react";
import { render, cleanup } from "@testing-library/react";
import WrappedFoo from "../../components/wrapped";

afterEach(cleanup);

describe("These test suite(s) is/are designed to demonstrate how wrapped components can be tested", () => {
    it("renders a <h1 />", () => {
        const { getByTestId } = render(<WrappedFoo />);

        expect(getByTestId("h1")).toBeInTheDocument();
        expect(getByTestId("h1")).toHaveStyle("font-size: 20px");
    });
});