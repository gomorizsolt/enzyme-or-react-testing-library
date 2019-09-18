import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

const Foo = () => (
    <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Login</button>
    </div>
);

describe("Find particular elements in components", () => {
    describe("Enzyme", () => {
        let fooWrapper;

        beforeEach(() => {
            fooWrapper = shallow(<Foo />);
        });

        it("renders two <label />", () => {
            expect(fooWrapper.find("label")).toHaveLength(2);
        });

        it("renders two <input />", () => {
            expect(fooWrapper.find("input")).toHaveLength(2);
        });

        it("renders a submit <button />", () => {
            expect(fooWrapper.find("button").props().type).toEqual("submit");
        });
    });

    describe("react-testing-library", () => {
        it("renders username <label />", () => {
            const { getByLabelText } = render(<Foo />);

            expect(getByLabelText(/username/i)).toBeInTheDocument(1);
        });

        it("renders password <label />", () => {
            const { getByLabelText } = render(<Foo />);

            expect(getByLabelText(/password/i)).toBeInTheDocument(1);
        });

        it("renders submit <button />", () => {
            const { getByText } = render(<Foo />);

            expect(getByText(/login/i)).toHaveAttribute("type", "submit");
        });
    });
});