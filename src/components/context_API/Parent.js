import React, { createContext } from "react";
import ChildA from "./ChildA";

// to avoid prop drilling.
// create, provider, consume

const data = createContext();
const gender = createContext();

const Parent = () => {
  const name = "Payal";
  const gender = "Female";
  return (
    <div>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </div>
  );
};
export default Parent;
export {data};
