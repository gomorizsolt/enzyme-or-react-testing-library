import React from "react";

const fireEventsFoo = props => (
    <div>
        <input type="email" placeholder="email" />
        <button type="submit" onClick={props.click}>Submit</button>
    </div>
);

export default fireEventsFoo;
