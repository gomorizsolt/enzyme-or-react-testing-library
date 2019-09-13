import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BasicText, BasicButton } from "../Basics";

/* https://testing-library.com/docs/react-testing-library/api#cleanup */
afterEach(cleanup);

describe("Basics", () => {
    describe("<BasicText />", () => {
        it("renders `This is the simplest text ever.` inside a paragraph", () => {
            const { getByText, getByTestId } = render(<BasicText />);
    
            /* `getByText` may be more reliable as it does not depend on the exact format of the text.  */ 
            expect(getByText(/this is the simplest/i)).toBeInTheDocument();

            expect(getByTestId("p-basic")).toHaveTextContent("This is the simplest text ever.");
        });
    });

    describe("BasicButton", () => {
        it("renders `Click on the dumbest button ever` on a button", () => {
            const { getByText, getByTestId } = render(<BasicButton />);

            expect(getByText(/click on the dumbest/i)).toBeInTheDocument();

            expect(getByTestId("button-basic")).toHaveTextContent("Click on the dumbest button ever");
        });
    });
});