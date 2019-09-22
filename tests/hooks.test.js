import React from "react";
import { mount } from "enzyme";
import { render, cleanup, fireEvent } from "@testing-library/react";
import HooksFoo from "../sample-components/hooks";

afterEach(cleanup);

describe("Hooks", () => {
    describe("react-testing-library", () => {
        /* let consoleLogSpy;

        beforeEach(() => {
            // It doesn't mock the console log in the second test suite for some reason.
            consoleLogSpy = jest.spyOn(console, "log").mockImplementationOnce(() => jest.fn());
        }); */

        describe("when the component mounts for the first time", () => {
            it("logs the message to the console with 0", () => {
                const consoleLogSpy = jest.spyOn(console, "log").mockImplementationOnce(() => jest.fn());

                render(<HooksFoo />);

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 0.`);
            });
        });

        describe("when `count` changes", () => {
            it("logs the message to the console with the increased value", () => {
                const consoleLogSpy = jest.spyOn(console, "log").mockImplementationOnce(() => jest.fn());

                const { getByText } = render(<HooksFoo />);

                fireEvent.click(getByText(/increase/i));

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 1.`);
            });
        });
    });

    describe("Enzyme", () => {
        // Enzyme isn't capable to trigger `useEffect` when using shallow rendering.
        // Instead, full DOM rendering is required.

        describe("when the component mounts for the first time", () => {
            it("logs the message to the console with 0", () => {
                const consoleLogSpy = jest.spyOn(console, "log").mockImplementationOnce(() => jest.fn());

                mount(<HooksFoo />);

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 0.`);
            });
        });

        describe("when `count` changes", () => {
            it("logs the message to the console with the increased value", () => {
                const consoleLogSpy = jest.spyOn(console, "log").mockImplementationOnce(() => jest.fn());

                const hooksFooWrapper = mount(<HooksFoo />);

                hooksFooWrapper.find("button").simulate("click");

                expect(consoleLogSpy).toHaveBeenCalledWith(`Count has changed to 1.`);
            });
        });
    });
});