/* useMemo is used for optimizing the performance. it prevent to call the unnessesary calling 
to the function. it returns the cache value of the function until the dependencies change.
 */
import React, { useMemo, useState } from "react";
import "./Memo.css";

export const Memo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementByOne = () => {
        setCounterOne(counterOne + 1);
    };

    const incrementByTwo = () => {
        setCounterTwo(counterTwo+2);
    };

    const evenOddFunc = useMemo(() => {
        console.log("testing");
        let i =0;
        while(i<200) i++;
        return counterOne%2 === 0;
    },[counterOne]);


    return (
        <div>
            <span>{evenOddFunc?"Even":"Odd"}</span>
            <div className="childDiv">
                <button onClick={incrementByOne}>IncrementByOne-{counterOne}</button>
            </div>
            <div     className="childDiv">
                <button onClick={incrementByTwo}>IncrementByTwo-{counterTwo}</button>
            </div>
        </div>
    );
};