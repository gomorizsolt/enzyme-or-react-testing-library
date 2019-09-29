import React, { useState, useEffect } from "react";

export default () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has changed to ${count}.`);
    }, [count]);

    const increase = () => setCount(prevCount => prevCount + 1);

    return (
        <div>
            <p>{count}</p>
            <button type="button" onClick={increase}>Increase</button>
        </div>
    );
};
