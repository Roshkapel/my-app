import React, {useState, useCallback, useEffect} from "react";
import { SalesCardComponent } from "./SalesCardComponent";

//props is actually a default parameter
export const SalesReps = ({removeDataHandler, users, addDataHandler}) => {
 
 const deleteDataHandler = (id) => {
    removeDataHandler(id)
  };
  const renderUserData = users ? users.map((user) => (

   
      <SalesCardComponent
      key={user.id}
      // userData={userData}
      removeDataHandler = {removeDataHandler}
      addDataHandler={addDataHandler}
      clickHandler={deleteDataHandler}
      user={user}
      users={users}
      />
   
  )) :null ;
 


  return <div>{renderUserData}</div>
    
  
}