import { useContext } from "react";
import { data, minegender } from "./ParentComponent";

export const ChildB = () => {
    const name = useContext(data);
    const myGender = useContext(minegender);
  return (
    <>
      <h1>My name is {name} and my gender is {myGender} </h1>
    </>
  );
};

export default ChildB;
