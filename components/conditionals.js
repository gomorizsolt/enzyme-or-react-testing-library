import React, { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count % 2 === 0 ? "Even" : "Odd"}</p>
            <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    );
};
