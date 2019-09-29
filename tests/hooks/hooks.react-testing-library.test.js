import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import HooksFoo from "../../components/hooks";

afterEach(cleanup);

describe("These test suite(s) is/are designed to demonstrate how components with basic hooks can be tested", () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

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