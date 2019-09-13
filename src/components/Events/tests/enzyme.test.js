import React from "react";
import { shallow } from "enzyme";
import { ClickEvent, InputChangeEvent } from "../Events";

describe("Events", () => {
    describe("<ClickEvent />", () => {
        let clickEventWrapper;

        beforeEach(() => {
            clickEventWrapper = shallow(<ClickEvent />);
        });

        it("renders <button /> HTML element", () => {
            expect(clickEventWrapper.find("button")).toHaveLength(1);
        });

        it("initializes the counter to 0", () => {
            expect(clickEventWrapper.find("p").text()).toEqual("0");
        });

        describe("<button /> click", () => {
            it("increments the counter by one", () => {
                clickEventWrapper.find("button").simulate("click");

                expect(clickEventWrapper.find("p").text()).toEqual("1");
            });
        });
    });

    describe("<InputChangeEvent />", () => {
        let inputChangeEventWrapper;

        beforeEach(() => {
            inputChangeEventWrapper = shallow(<InputChangeEvent />);
        });

        it("renders <input /> HTML element", () => {
            expect(inputChangeEventWrapper.find("input")).toHaveLength(1);
        });

        it("initializes the text to an empty string", () => {
            expect(inputChangeEventWrapper.find("p").text()).toEqual("");
        });

        describe("<input /> change", () => {
            it("sets the event value to <p />", () => {
                const eventValue = "Simple text";

                inputChangeEventWrapper.find("input").simulate("change", {
                    target: {
                        value: eventValue,
                    },
                });

                expect(inputChangeEventWrapper.find("p").text()).toEqual(eventValue);
            });
        });
    });
});