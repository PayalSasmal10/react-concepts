import React, { useContext } from "react";
import { ChildB } from "./ChildB";
import { FamilyContext } from "./Context-API";

export const ChildA = () => {
    const secret = useContext(FamilyContext);
    return (
        <div>
            <p>{secret.onlyChildrenACanSee()}</p>
            {/* <ChildB/> */}
        </div>
    );
};

export default ChildA;