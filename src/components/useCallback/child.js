import React, { memo } from "react";

const Child = ({counterTwo, func}) => {
    func();
    console.log('child componenet Rendered!');
    return (
        <div>
            Child component
        </div>
    );
};

export default memo(Child);