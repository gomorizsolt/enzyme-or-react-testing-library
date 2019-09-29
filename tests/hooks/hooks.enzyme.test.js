import React from "react";
import { mount } from "enzyme";
import HooksFoo from "../../components/hooks";

describe("These test suite(s) is/are designed to demonstrate how components with basic hooks can be tested", () => {
    let hooksFooWrapper;
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

        // Enzyme's shallow renderer does not trigger useEffect.
        hooksFooWrapper = mount(<HooksFoo />);
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    describe("when the component mounts for the first time", () => {
        it("logs the message to the console with 0", () => {
            expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 0.`);
        });
    });

    describe("when `count` changes", () => {
        it("logs the message to the console with the increased value", () => {
            hooksFooWrapper.find("button").simulate("click");

            expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 1.`);
        });
    });
});