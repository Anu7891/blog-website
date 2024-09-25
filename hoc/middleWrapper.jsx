import React from "react";

const MiddleWrapper = React.memo(({ children }) => {
    return <div className="middleWrapper">{children}</div>;
});

export default MiddleWrapper;