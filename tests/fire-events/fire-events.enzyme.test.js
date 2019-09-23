import React from "react";
import { shallow } from "enzyme";
import FireEventsFoo from "../../components/fire-events";

describe("These test suites are designed to simulate events on components", () => {
    it("calls `props.click` with the set <input /> value when the submit <button /> is clicked", () => {
        const click = jest.fn();

        const fireEventsFooWrapper = shallow(<FireEventsFoo click={click} />);

        const inputValue = "john.doe@xyz.com";

        fireEventsFooWrapper.find("input").simulate("change", {
            target: {
                value: inputValue,
            }
        });

        fireEventsFooWrapper.find("button").simulate("click");

        expect(click).toHaveBeenCalledWith(inputValue);
    });
});