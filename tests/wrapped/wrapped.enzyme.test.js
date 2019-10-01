import React from "react";
import { shallow } from "enzyme";
import WrappedFoo from "../../components/wrapped";

describe("These test suite(s) is/are designed to demonstrate how wrapped components can be tested", () => {
    it("renders a <h1 />", () => {
        // Shallow rendering would fail in this case, because merely the exterior surface of the HOC is rendered, nor the wrapped component.
        // Full DOM rendering passes, but renders the whole tree.
        const wrappedFooWrapper = shallow(<WrappedFoo />).dive();

        expect(wrappedFooWrapper.find("h1")).toHaveLength(1);
    });
});