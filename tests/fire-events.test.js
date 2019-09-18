import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent, cleanup } from "@testing-library/react";
import FireEventsFoo from "../foo-components/fire-events";

afterEach(cleanup);

describe("Fire events", () => {
    describe("react-testing-library", () => {
        it("changes the <input /> value", () => {
            const { getByPlaceholderText } = render(<FireEventsFoo />);

            const email = "john.doe@xyz.com";
            const input = getByPlaceholderText(/email/i);

            fireEvent.change(input, { target: { value: email }});

            expect(input.value).toEqual(email);
        });

        it("calls `props.click` when the submit <button /> is clicked", () => {
            const click = jest.fn();

            const { getByText } = render(<FireEventsFoo click={click} />);

            const button = getByText("Submit");

            fireEvent.click(button);

            expect(click).toHaveBeenCalled();
        });
    });
});