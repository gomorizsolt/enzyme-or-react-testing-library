import React from "react";
import { render, cleanup } from "@testing-library/react";
import ParagraphWithText from "../ParagraphWithText";

afterEach(cleanup);

describe("<ParagraphWithText />", () => {
    it("renders `This is a raw text.`", () => {
        const { getByText } = render(<ParagraphWithText />);

        expect(getByText(/this is a raw text/i)).toBeInTheDocument();
    });
});