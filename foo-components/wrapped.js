import React from "react";

const HOC = WrappedComponent => {
    return () => <WrappedComponent />;
};

const wrappedFoo = () => (
    <div>
        <h1 data-testid="test-h1" style={{ fontSize: "20px" }}>Test</h1>
    </div>
);

export default HOC(wrappedFoo);
