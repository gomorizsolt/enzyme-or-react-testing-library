import React from "react";
import { mount } from "enzyme";
import axiosMock from "axios";
import ConditionalsFoo from "../../components/conditionals";

describe("These test suites are designed to demonstrate how conditonals with async events can be tested", () => {
    describe("when the async event is not fulfilled", () => {
        it("indicates the loading state with text", () => {
            // Shallow does not trigger the useEffect hook.
            const conditionalFooWrapper = mount(<ConditionalsFoo />);

            expect(conditionalFooWrapper.find("div").text()).toEqual("Loading data...");
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
            const conditionalFooWrapper = await mount(<ConditionalsFoo />);

            expect(conditionalFooWrapper.find("div").text()).toEqual(JSON.stringify(todo));
        });
    });
});