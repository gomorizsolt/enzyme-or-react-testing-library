import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ConditionalsFoo from "../../components/conditionals";

afterEach(cleanup);

describe("These test suites are desiged to demonstrate how conditionally rendered texts can be tested", () => {
    describe("when count is not even", () => {
        it("displays `Odd`", () => {
            const { getByText } = render(<ConditionalsFoo />);

            fireEvent.click(getByText(/increment/i));

            expect(getByText("Odd")).toBeInTheDocument();
        });
    });

    describe("when count is even", () => {
        it("displays `Even`", () => {
            const { getByText } = render(<ConditionalsFoo />);

            fireEvent.doubleClick(getByText(/increment/i));

            expect(getByText("Even")).toBeInTheDocument();
        });
    });
});