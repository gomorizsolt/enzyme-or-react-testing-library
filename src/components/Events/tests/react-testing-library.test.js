import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ClickEvent, InputChangeEvent } from "../Events";

afterEach(cleanup);

describe("Events", () => {
    describe("<ClickEvent />", () => {
        it("initializes the counter to 0", () => {
            const { getByTestId } = render(<ClickEvent />);

            expect(getByTestId("p-counter")).toHaveTextContent("0");
        });

        describe("<button /> click", () => {
            it("increments the counter by one", () => {
                const { getByTestId, getByText } = render(<ClickEvent />);

                fireEvent.click(getByText(/increment/i));

                expect(getByTestId("p-counter")).toHaveTextContent("1");
            });
        });
    });

    describe("<InputChangeEvent />", () => {
        it("initializes the text to an empty string", () => {
            const { getByTestId } = render(<InputChangeEvent />);

            expect(getByTestId("p-text")).toBeEmpty();
        });

        describe("<input /> change", () => {
            it("sets the event value to <p />", () => {
                const eventValue = "Simple text";

                const { getByTestId, getByPlaceholderText } = render(<InputChangeEvent />);

                fireEvent.change(getByPlaceholderText(/change/i), { target: { value: eventValue }});

                expect(getByTestId("p-text")).toHaveTextContent(eventValue);
            });
        });
    });
});