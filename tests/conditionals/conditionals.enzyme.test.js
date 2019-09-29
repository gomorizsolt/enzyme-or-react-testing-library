import React from "react";
import { shallow } from "enzyme";
import ConditionalsFoo from "../../components/conditionals";

describe("These test suite(s) is/are desiged to demonstrate how conditionally rendered texts can be tested", () => {
    describe("when count is not even", () => {
        it("displays `Odd`", () => {
            const conditionalsFooWrapper = shallow(<ConditionalsFoo />);

            conditionalsFooWrapper.find("button").simulate("click");

            expect(conditionalsFooWrapper.find("p").text()).toEqual("Odd");
        });
    });

    describe("when count is even", () => {
        it("displays `Even`", () => {
            const conditionalsFooWrapper = shallow(<ConditionalsFoo />);

            conditionalsFooWrapper.find("button").simulate("doubleclick");

            expect(conditionalsFooWrapper.find("p").text()).toEqual("Even");
        });
    });
});