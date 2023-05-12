// use ref use to manipulate the DOM object in React.

import React, { useRef, useState } from "react";

export const UseRef = () => {
    const refElement = useRef(0);
    const [name, setName] = useState("Payal");

    console.log(refElement);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const restButtonHandler = () => {
        setName("")
        refElement.current.focus();
    };

    const buttonHandler = () => {
        refElement.current.style.color = "blue";
    }

    return(
        <div>
            <input type="text" ref={refElement} value={name} onChange={onChangeName} />
            <button onClick={restButtonHandler}>Rest Me</button>
            <button onClick={buttonHandler}>Change My Color</button>
        </div>
    );
};