import React from "react";
import { mount } from "enzyme";
import { render, cleanup, fireEvent } from "@testing-library/react";
import HooksFoo from "../components/hooks";

afterEach(cleanup);

describe("Hooks", () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    describe("react-testing-library", () => {
        describe("when the component mounts for the first time", () => {
            it("logs the message to the console with 0", () => {
                render(<HooksFoo />);

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 0.`);
            });
        });

        describe("when `count` changes", () => {
            it("logs the message to the console with the increased value", () => {
                const { getByText } = render(<HooksFoo />);

                fireEvent.click(getByText(/increase/i));

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 1.`);
            });
        });
    });

    describe("Enzyme", () => {
        describe("when the component mounts for the first time", () => {
            it("logs the message to the console with 0", () => {
                mount(<HooksFoo />);

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 0.`);
            });
        });

        describe("when `count` changes", () => {
            it("logs the message to the console with the increased value", () => {
                const hooksFooWrapper = mount(<HooksFoo />);

                hooksFooWrapper.find("button").simulate("click");

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 1.`);
            });
        });
    });
});