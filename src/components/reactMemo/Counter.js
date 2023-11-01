import React from 'react';
const Counter = ({value, children, onClick}) => {
    console.log("Render", children);
    return(
        <div>

            <button onClick={onClick}>click</button>
            {children}:{value}
        </div>

    );
};
export default Counter;