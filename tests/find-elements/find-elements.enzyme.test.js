import React from "react";
import { shallow } from "enzyme";
import FindElementsFoo from "../../components/find-elements";

describe("These test suites are designed to demonstrate a few ways to access certain elements in a shallow() rendered component", () => {
    it("find", () => {
        // https://airbnb.io/enzyme/docs/api/shallow.html
        const findElementsFooWrapper = shallow(<FindElementsFoo />);

        // https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
        expect(findElementsFooWrapper.find("label").first().text()).toEqual("Username");
        expect(findElementsFooWrapper.find("label").first().text()).toMatch(/usern/i);
        expect(findElementsFooWrapper.find("#username")).toHaveLength(1);
        expect(findElementsFooWrapper.find("input").last().props().type).toEqual("password");
        expect(findElementsFooWrapper.find("input").last().props().type).toMatch(/passw/i);
    });
});