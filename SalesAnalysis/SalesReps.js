import React, {useState, useCallback, useEffect} from "react";
import { SalesCardComponent } from "./SalesCardComponent";

//props is actually a default parameter
export const SalesReps = ({userData, removeDataHandler, users}) => {
 
 const deleteDataHandler = (id) => {
    removeDataHandler(id)
  };
  const renderUserData = users.map((user) => {

    return (
      <SalesCardComponent
      key={user.id}
      // userData={userData}
      removeDataHandler = {removeDataHandler}
      clickHandler={deleteDataHandler}
      user={user}
      />
  );
  });
 


  return <div>{renderUserData}</div>
    
  
}