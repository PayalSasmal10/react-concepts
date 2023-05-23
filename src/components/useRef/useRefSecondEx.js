import { useRef } from "react";

const UseRefSecondEx = () => {
    const count = useRef(0);
    // const counterHandler = () => {
    //     console.log("Am I calling from useRef");
        count.current = count.current + 1;
    // };
    return(
        <div>
            <h1>count: {count.current}</h1>
            <button >Click to Increase</button>
        </div>
    );
};
export default UseRefSecondEx;