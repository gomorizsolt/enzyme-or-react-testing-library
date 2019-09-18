import React from "react";
import { shallow } from "enzyme";
import { render, cleanup, fireEvent } from "@testing-library/react";

const Foo = () => (
    <div>
        <label htmlFor="username" data-testid="username-label">Username</label>
        <input id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Login</button>
    </div>
);

// https://testing-library.com/docs/react-testing-library/api#cleanup
afterEach(cleanup);

describe("Find certain elements in <Foo />", () => {
    // https://testing-library.com/docs/dom-testing-library/api-queries#variants
    describe("react-testing-library", () => {
        // https://testing-library.com/docs/react-testing-library/api#render
        // renders the given component into a container which is appended to document.body(you're able to customize the container, it defaults to a <div />), so it's basically rendered to the DOM
        // returns a set of utility functions(queries coming from the DOM Testing Library, rerender, unmount etc)
        describe("find the <label /> for the username <input />", () => {
            it("uses `getByLabelText`", () => {
                const { getByLabelText } = render(<Foo />);
    
                // https://testing-library.com/docs/dom-testing-library/api-queries#textmatch
                expect(getByLabelText("Username")).toBeInTheDocument();
                expect(getByLabelText(/user/i)).toBeInTheDocument();
            });

            it("uses `getByTestId`", () => {
                // https://testing-library.com/docs/dom-testing-library/api-queries#bytestid
                const { getByTestId } = render(<Foo />);

                expect(getByTestId("username-label")).toBeInTheDocument();
                expect(getByTestId(/username/i)).toBeInTheDocument();
            });

            it("uses `queryByLabelTest", () => {
                const { queryByLabelText } = render(<Foo />);

                expect(queryByLabelText("Username")).toBeInTheDocument();
                expect(queryByLabelText(/usern/i)).toBeInTheDocument();
            });
        });

        describe("find the <input /> for the username <label />", () => {
            it("uses `getByPlaceholderText`", () => {
                const { getByPlaceholderText } = render(<Foo />);

                expect(getByPlaceholderText("Username")).toBeInTheDocument();
                expect(getByPlaceholderText(/username/i)).toBeInTheDocument();

                expect(getByPlaceholderText("Username")).toHaveAttribute("id", "username");
                expect(getByPlaceholderText(/usern/i)).toHaveAttribute("type", "text");
            });
        });
    });

    describe("Enzyme", () => {
        describe("find the <label /> for the password <input />", () => {
            let fooWrapper;

            beforeEach(() => {
                fooWrapper = shallow(<Foo />);
            });

            it("uses `find`", () => {
                expect(fooWrapper.find("label").first().text()).toEqual("Username");
                expect(fooWrapper.find("label").first().text()).toMatch(/usern/i);
            });
        });

        describe("find the <input /> for the password <label />", () => {
            let fooWrapper;

            beforeEach(() => {
                fooWrapper = shallow(<Foo />);
            });

            it("uses `find`", () => {
                expect(fooWrapper.find("input").last().props().type).toEqual("password");
                expect(fooWrapper.find("input").last().props().type).toMatch(/passw/i);
            });
        }); 
    });
});