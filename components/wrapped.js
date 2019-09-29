import React from "react";

const HOC = WrappedComponent => {
    return () => <WrappedComponent />;
};

export default HOC(() => (
    <div>
        <h1 data-testid="h1" style={{ fontSize: "20px" }}>Test</h1>
    </div>
));
