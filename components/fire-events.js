import React, { useState } from "react";

export default props => {
    const [value, setValue] = useState("");

    return (
        <div>
            <input type="email" placeholder="email" onChange={e => setValue(e.target.value)} />
            <button type="submit" onClick={() => props.click(value)}>Submit</button>
        </div>
    );
};
