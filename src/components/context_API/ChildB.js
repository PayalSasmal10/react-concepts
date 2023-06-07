// import { data } from "./Parent";
import ChildC from "./ChildC"

import { useContext } from "react";
import { FamilyContext } from "./Context-API";

export const ChildB = () => {
  const secret = useContext(FamilyContext);
  return (
    <>
     <p>{secret.onlyChildrenBCanSee()}</p>
     <ChildC/>
    </>
  );
};

export default ChildB; 
