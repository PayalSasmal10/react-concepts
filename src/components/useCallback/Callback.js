/*useCallback is also a hook to use memoize a function. it ensure that function is passed from 
parent to child component as a prop. useCallback ensure that new function instance woun't be created
and child componenet will only recieve new function when there is a change on dependencies */

import React, { useCallback, useState } from "react";
import Child from "./child";

export const Callback = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo] = useState([]);

  const increaseOne = () => {
    setCounterOne(counterOne+1);
  };

  const func = useCallback(() => {
    console.log("I am Payal");
  }, [counterTwo]);

  return (
    <div>
      <Child counterTwo={counterTwo} func = {func}/>
      <button onClick={increaseOne} >IncreaseByOne-{counterOne}</button>
    </div>
  );
};
