import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import axiosMock from "axios";
import ConditionalsFoo from "../../components/conditionals";

afterEach(cleanup);

describe("These test suites are designed to demonstrate how conditonals with async events can be tested", () => {
    describe("when the async event is not fulfilled", () => {
        it("indicates the loading state with text", () => {
            const { getByTestId } = render(<ConditionalsFoo />);

            expect(getByTestId("loading")).toHaveTextContent("Loading data...");
        });
    });

    describe("when the async event is fulfilled", () => {
        const todo = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };

        beforeEach(() => {
            axiosMock.get.mockResolvedValueOnce(todo);
        });

        it("renders the stringified todo to the screen", async () => {
            const { getByTestId } = render(<ConditionalsFoo />);

            const displayer = await waitForElement(() => getByTestId("displayer"));

            expect(displayer).toHaveTextContent(JSON.stringify(todo));
        });
    });
});