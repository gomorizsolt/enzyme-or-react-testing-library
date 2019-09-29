import React from "react";
import { render, cleanup, fireEvent, wait, waitForElement } from "@testing-library/react";
import AsynchronousFoo from "../../components/asynchronous";

afterEach(cleanup);

describe("", () => {
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

            // Waiting for the element to be appeared on the screen.
            // https://testing-library.com/docs/dom-testing-library/api-async#waitforelement
            const countDisplayer = await waitForElement(() => getByText("1"));

            expect(countDisplayer).toHaveTextContent("1");
        });

        it("test", async () => {
            const { getByTestId, getByText } = render(<AsynchronousFoo />);

            fireEvent.click(getByText(/increase async/i));

            await wait(() => getByText("1"));

            expect(getByTestId("count-displayer")).toHaveTextContent("1");
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