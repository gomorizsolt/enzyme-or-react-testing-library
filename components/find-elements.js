import React from "react";

export default () => (
    <div>
        <label htmlFor="username" data-testid="username-label">Username</label>
        <input id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Login</button>
    </div>
);
