import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import FireEventsFoo from "../../components/fire-events";

describe("These test suites are designed to trigger events on the DOM", () => {
    const inputValue = "john.doe@xyz.com";

    it("changes <input /> value", () => {
        const { getByPlaceholderText } = render(<FireEventsFoo />);

        const input = getByPlaceholderText(/email/i);

        // https://testing-library.com/docs/dom-testing-library/api-events
        fireEvent.change(input, { target: { value: inputValue }});

        expect(input.value).toEqual(inputValue);
    });

    it("calls `props.click` with the set <input /> value when the submit <button /> is clicked", () => {
        const click = jest.fn();

        const { getByPlaceholderText, getByText } = render(<FireEventsFoo click={click} />);

        const input = getByPlaceholderText(/email/i);
        const button = getByText("Submit");

        fireEvent.change(input, { target: { value: inputValue }});
        fireEvent.click(button);

        expect(click).toHaveBeenCalledWith(inputValue);
    });
});