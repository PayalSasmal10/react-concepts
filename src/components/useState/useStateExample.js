import { useEffect, useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);
  const [counterByFive, setCounterByFive] = useState(5);

    useEffect(() => {
      console.log("am I calling from useEffect");
    }, [counter]);
  

  function buttonHandler() {
    console.log("am calling from counter by 5");
    setCounterByFive(counter + 1);
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h1>Counter : {counterByFive}</h1>
      <button onClick={() => setCounter(counter+1)} style={{ margin: "60px" }}>
        Click
      </button>
      <button onClick={buttonHandler}>Click</button>
    </div>
  );
};

export default UseStateExample;
