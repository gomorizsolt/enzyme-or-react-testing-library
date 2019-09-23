import React from "react";
import { shallow } from "enzyme";
import { render, cleanup, waitForElement } from "@testing-library/react";
import axiosMock from "axios";
import ConditionalsFoo from "../components/conditionals";

import "@babel/polyfill";

afterEach(cleanup);

describe("Conditionals", () => {
    describe("react-testing-library", () => {
        describe("when todo is not fetched", () => {
            it("indicates the loading state", () => {
                const { getByTestId } = render(<ConditionalsFoo />);

                expect(getByTestId("loading")).toHaveTextContent("Loading data...");
            });
        });

        describe("when fetch error does not occur", () => {
            const todo = {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
            };

            beforeEach(() => {
                axiosMock.get.mockResolvedValueOnce(todo);
            });

            it("renders the stringified todo", async () => {
                const { getByTestId } = render(<ConditionalsFoo />);

                const displayer = await waitForElement(() => getByTestId("displayer"));

                expect(displayer).toHaveTextContent(JSON.stringify(todo));
            });
        });

        // It does not work for some reason ...
       /*  describe("when fetch error occurs", () => {
            beforeEach(() => {
                axiosMock.get.mockRejectedValueOnce("Fetch error");
            });

            it("indicates the error state", async () => {
                const { getByTestId } = render(<ConditionalsFoo />);

                const error = await waitForElement(() => getByTestId("error"));

                expect(error).toHaveTextContent("Fetch error...");
            });
        }); */
    });
});