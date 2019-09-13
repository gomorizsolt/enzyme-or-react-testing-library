import React from "react";
import { shallow } from "enzyme";
import ParagraphWithText from "../ParagraphWithText";

describe("<ParagraphWithText />", () => {
    let paragraphWithTextWrapper;

    beforeEach(() => {
        paragraphWithTextWrapper = shallow(<ParagraphWithText />);
    });

    it("renders `This is a raw text.`", () => {
        expect(paragraphWithTextWrapper.find("p").text()).toEqual("This is a raw text.");
    });
});