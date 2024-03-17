import React, {useState, useCallback, useEffect} from "react";
import { SalesCardComponent } from "./SalesCardComponent";

//props is actually a default parameter
export const SalesReps = ({userData}) => {
 
    return (
        <SalesCardComponent
        key={userData.id}
        userData={userData}
        />
    );


  // return <div>{renderUserData}</div>
    
  
}