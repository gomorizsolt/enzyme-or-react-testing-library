import React from "react";
import { shallow } from "enzyme";
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import AsynchronousFoo from "../components/asynchronous";

// Polyfill is mandatory because of async-await utilities.
import "@babel/polyfill";

afterEach(cleanup);

describe("Asynchronous events", () => {
    describe("react-testing-library", () => {
        describe("increaseSync", () => {
            it("increaces `count` by one", () => {
                const { getByText, getByTestId } = render(<AsynchronousFoo />);

                fireEvent.click(getByText(/increase sync/i));

                expect(getByTestId("count-displayer")).toHaveTextContent("1");
            });
        });

        describe("decreaseSync", () => {
            it("decreases `count` by one", () => {
                const { getByText, getByTestId } = render(<AsynchronousFoo />);

                fireEvent.click(getByText(/decrease sync/i));

                expect(getByTestId("count-displayer")).toHaveTextContent("-1");
            });
        });

        describe("increaseAsync", () => {
            it("increases `count` when `setTimeout()` expires", async () => {
                const { getByText } = render(<AsynchronousFoo />);

                fireEvent.click(getByText(/increase async/i));

                const countDisplayer = await waitForElement(() => getByText("1"));

                expect(countDisplayer).toHaveTextContent("1");
            });
        });

        describe("decreaseAsync", () => {
            it("decreases `count` when `setTimeout()` expires", async () => {
                const { getByText } = render(<AsynchronousFoo />);

                fireEvent.click(getByText(/decrease async/i));

                const countDisplayer = await waitForElement(() => getByText("-1"));

                expect(countDisplayer).toHaveTextContent("-1");
            });
        });
    });

    describe("Enzyme", () => {
        let asynchronousFooWrapper;

        beforeEach(() => {
            // https://jestjs.io/docs/en/timer-mocks
            jest.useFakeTimers();

            asynchronousFooWrapper = shallow(<AsynchronousFoo />);
        });

        describe("increaseSync", () => {
            it("increaces `count` by one", () => {
                asynchronousFooWrapper.find("button").first().simulate("click");

                expect(asynchronousFooWrapper.find("p").text()).toEqual("1");
            });
        });

        describe("decreaseSync", () => {
            it("decreases `count` by one", () => {
                asynchronousFooWrapper.find("button").at(1).simulate("click");

                expect(asynchronousFooWrapper.find("p").text()).toEqual("-1");
            });
        });

        describe("increaseAsync", () => {
            it("increases `count` when `setTimeout()` expires", async () => {
                asynchronousFooWrapper.find("button").at(2).simulate("click");

                jest.runAllTimers();

                expect(asynchronousFooWrapper.find("p").text()).toEqual("1");
            });
        });

        describe("decreaseAsync", () => {
            it("decreases `count` when `setTimeout()` expires", async () => {
                asynchronousFooWrapper.find("button").last().simulate("click");

                jest.runAllTimers();

                expect(asynchronousFooWrapper.find("p").text()).toEqual("-1");
            });
        });
    });
});