import React, { createContext } from "react";
import ChildA from "./ChildA";

// to avoid prop drilling.
// create, provider, consume

const data = createContext();
const minegender = createContext();

const ParentComponent = () => {
  const name = "Payal";
  const gender = "Female";
  return (
    <div>
      <data.Provider value={name}>
        <minegender.Provider value={gender}>
          <ChildA />
        </minegender.Provider>
      </data.Provider>
    </div>
  );
};
export default ParentComponent;
export { data, minegender };
