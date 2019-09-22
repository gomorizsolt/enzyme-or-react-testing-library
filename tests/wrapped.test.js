import React from "react";
import { shallow, mount } from "enzyme";
import { render, cleanup } from "@testing-library/react";
import WrappedFoo from "../sample-components/wrapped";

afterEach(cleanup);

describe("Components wrapped inside HOC(s)", () => {
    describe("react-testing-library", () => {
        it ("renders a <h1 />", () => {
            const { getByTestId } = render(<WrappedFoo />);

            expect(getByTestId("h1")).toBeInTheDocument();
            expect(getByTestId("h1")).toHaveStyle("font-size: 20px");
        });
    });

    describe("Enzyme", () => {
        const shallowWrappedComponent = wrappedComponent =>
            shallow(shallow(wrappedComponent).get(0));

        // Shallow rendering would fail in this case, because merely the outer surface of the HOC is rendered, nor the wrapped component.
        // Full DOM rendering passes, but renders the whole tree.
        
        let wrappedFooWrapper;

        beforeEach(() => {
            // Shallow rendering is possible if the component is accessed one level deeper, however, it would definitely fail if more than one HOC applied to the component.
            wrappedFooWrapper = shallowWrappedComponent(<WrappedFoo />);
        });

        it("renders a <h1 />", () => {
            expect(wrappedFooWrapper.find("h1")).toHaveLength(1);

        // https://www.npmjs.com/package/jest-styled-components#tohavestylerule
        // Testing style properties with Enzyme is difficult.
        });
    });
});