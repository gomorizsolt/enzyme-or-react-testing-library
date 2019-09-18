import React from "react";

// @TODO add a <select /> component.
const fireEventsFoo = props => (
    <div>
        <input type="email" placeholder="email" />
        <button type="submit" onClick={props.click}>Submit</button>
    </div>
);

export default fireEventsFoo;
