import React from "react";
import { render, cleanup } from "@testing-library/react";
import FindElementsFoo from "../../components/find-elements";

afterEach(cleanup);

describe("These test suite(s) is/are designed to demonstrate a few methods to access certain elements in the DOM", () => {
    it("getByLabelText", () => {
        const { getByLabelText } = render(<FindElementsFoo />);
    
        expect(getByLabelText("Username")).toBeInTheDocument();
        expect(getByLabelText(/user/i)).toBeInTheDocument();
    });

    it("getByTestId", () => {
        const { getByTestId } = render(<FindElementsFoo />);

        expect(getByTestId("username-label")).toBeInTheDocument();
        expect(getByTestId(/username/i)).toBeInTheDocument();
    });

    it("getByPlaceholderText", () => {
        const { getByPlaceholderText } = render(<FindElementsFoo />);

        expect(getByPlaceholderText("Username")).toBeInTheDocument();
        expect(getByPlaceholderText(/username/i)).toBeInTheDocument();

        expect(getByPlaceholderText("Username")).toHaveAttribute("id", "username");
        expect(getByPlaceholderText(/usern/i)).toHaveAttribute("type", "text");
    });
});