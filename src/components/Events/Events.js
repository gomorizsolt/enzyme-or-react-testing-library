import React, { useState } from "react";

export const ClickEvent = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button type="button" onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
            <p data-testid="p-counter">{counter}</p>
        </div>
    );
};

export const InputChangeEvent = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <input type="text" onChange={e => setText(e.target.value)} placeholder="Change" />
            <p data-testid="p-text">{text}</p>
        </div>
    );
};