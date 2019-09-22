import React, { useState } from "react";
import { testIds } from "../test-ids/asynchronous";

const asynchronousFoo = () => {
    const [count, setCount] = useState(0);

    const increaseSync = () => setCount(prevCount => prevCount + 1);

    const decreaseSync = () => setCount(prevCount => prevCount - 1);

    const increaseAsync = () => {
        setTimeout(() => {
            increaseSync();
        }, 1000);
    };

    const decreaseAsync = () => {
        setTimeout(() => {
            decreaseSync();
        }, 1000);
    };

    return (
        <div>
            <p data-testid={testIds.COUNT_DISPLAYER}>{count}</p>
            <button type="button" onClick={increaseSync}>Increase Sync</button>
            <button type="button" onClick={decreaseSync}>Decrease Sync</button>
            <button type="button" onClick={increaseAsync}>Increase Async</button>
            <button type="button" onClick={decreaseAsync}>Decrease Async</button>
        </div>
    );
};

export default asynchronousFoo;
