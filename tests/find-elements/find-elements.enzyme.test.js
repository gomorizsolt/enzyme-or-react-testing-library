import React from "react";
import { shallow } from "enzyme";
import FindElementsFoo from "../../components/find-elements";

describe("These test suite(s) is/are designed to demonstrate a few ways to access certain elements in a shallow() rendered component", () => {
    it("find", () => {
        const findElementsFooWrapper = shallow(<FindElementsFoo />);

        expect(findElementsFooWrapper.find("label").first().text()).toEqual("Username");
        expect(findElementsFooWrapper.find("label").first().text()).toMatch(/usern/i);
        expect(findElementsFooWrapper.find("#username")).toHaveLength(1);
        expect(findElementsFooWrapper.find("input").last().props().type).toEqual("password");
        expect(findElementsFooWrapper.find("input").last().props().type).toMatch(/passw/i);
    });
});