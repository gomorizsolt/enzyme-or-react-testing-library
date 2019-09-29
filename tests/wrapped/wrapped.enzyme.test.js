import React from "react";
import { shallow } from "enzyme";
import WrappedFoo from "../../components/wrapped";

describe("These test suite(s) are designed to demonstrate how wrapped components can be tested", () => {
    const shallowWrappedComponent = wrappedComponent =>
    shallow(shallow(wrappedComponent).get(0));

    // Shallow rendering would fail in this case, because merely the exterior surface of the HOC is rendered, nor the wrapped component.
    // Full DOM rendering passes, but renders the whole tree.
    // Shallow rendering is possible if the component is accessed one level deeper, however, it would definitely fail if more than one HOC is applied to the component.

    it("renders a <h1 />", () => {
        const wrappedFooWrapper = shallowWrappedComponent(<WrappedFoo />);

        expect(wrappedFooWrapper.find("h1")).toHaveLength(1);
    });
});