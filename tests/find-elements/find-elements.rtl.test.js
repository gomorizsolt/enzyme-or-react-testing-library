import React from "react";
import { render, cleanup } from "@testing-library/react";
import FindElementsFoo from "../../components/find-elements";

// https://testing-library.com/docs/react-testing-library/api#cleanup
afterEach(cleanup);

describe("These test suite(s) is/are designed to demonstrate a few methods to access certain elements in the DOM", () => {
    it("getByLabelText", () => {
        // https://testing-library.com/docs/dom-testing-library/api-queries#bylabeltext
        const { getByLabelText } = render(<FindElementsFoo />);
    
        // https://testing-library.com/docs/dom-testing-library/api-queries#textmatch
        expect(getByLabelText("Username")).toBeInTheDocument();
        expect(getByLabelText(/user/i)).toBeInTheDocument();
    });

    it("getByTestId", () => {
        // https://testing-library.com/docs/dom-testing-library/api-queries#bytestid
        const { getByTestId } = render(<FindElementsFoo />);

        expect(getByTestId("username-label")).toBeInTheDocument();
        expect(getByTestId(/username/i)).toBeInTheDocument();
    });

    it("getByPlaceholderText", () => {
        // https://testing-library.com/docs/dom-testing-library/api-queries#byplaceholdertext
        const { getByPlaceholderText } = render(<FindElementsFoo />);

        expect(getByPlaceholderText("Username")).toBeInTheDocument();
        expect(getByPlaceholderText(/username/i)).toBeInTheDocument();

        expect(getByPlaceholderText("Username")).toHaveAttribute("id", "username");
        expect(getByPlaceholderText(/usern/i)).toHaveAttribute("type", "text");
    });
});