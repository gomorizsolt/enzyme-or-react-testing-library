import React from "react";
import { shallow } from "enzyme";
import AsynchronousFoo from "../../components/asynchronous";

describe("These test suite(s) is/are designed to demonstrate how async events(timeouts) can be tested", () => {
    let asynchronousFooWrapper;

    beforeEach(() => {
        // Jest is able to mock out timers and intervals.
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

            // Waiting for the specified ms to expire would make the tests sluggish.
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