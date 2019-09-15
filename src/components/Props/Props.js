import React from "react";

export const RenderTextProp = ({ text }) => <p>{text}</p>;

export const ClickEventProp = ({ clickEvent }) => <button type="button" onClick={clickEvent}>Click</button>;

/* Mocking prop event(s)? */
export const ConditionalRenderingProp = ({ shouldRender }) => {
    if (shouldRender) {
        return <p>The component is painted to the screen.</p>;
    }

    return <p>The component is not pointed to the screen.</p>;
};