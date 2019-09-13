import React from "react";
import { shallow } from "enzyme";
import { BasicText, BasicButton } from "../Basics";

describe("Basics", () => {
    describe("<BasicText />", () => {
        let basicTextWrapper;

        beforeEach(() => {
            basicTextWrapper = shallow(<BasicText />);
        });

        it("renders a <p /> HTML element", () => {
            expect(basicTextWrapper.find("p")).toHaveLength(1);
        });

        it("renders `This is the simplest text ever.` inside a paragraph", () => {
            expect(basicTextWrapper.find("p").text()).toEqual("This is the simplest text ever.");
        });
    });

    describe("<BasicButton />", () => {
        let basicButtonWrapper;

        beforeEach(() => {
            basicButtonWrapper = shallow(<BasicButton />);
        });

        it("renders a <button /> HTML element", () => {
            expect(basicButtonWrapper.find("button")).toHaveLength(1);
        });

        it("renders `Click on the dumbest button ever` on a button", () => {
            expect(basicButtonWrapper.find("button").text()).toEqual("Click on the dumbest button ever");
        });
    });
});