import React, { createContext, useContext } from "react";
import ChildA from "./ChildA";
import { FamilyContext } from "./Context-API";


// to avoid prop drilling.
// create, provider, consume


const Parent = () => {
  const secret = useContext(FamilyContext);
  return (
    <div>
      <p>{`Parent ${secret.familyName}`}</p>
      <p>{secret.onlyParentCanSee()}</p>
      <ChildA />
    </div>
  );
};
export default Parent;

