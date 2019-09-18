import React from "react";

const Foo = props => (
    <div>
        <input type="email" placeholder="email" />
        <button type="submit" onClick={props.click}>Submit</button>
    </div>
);

describe("Fire events", () => {});