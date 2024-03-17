import React, {useState, useCallback, useEffect} from "react";


//props is actually a default parameter
export const SalesCardComponent = ({userData}) => {
 
  const renderUserData = userData.map((user) => {
    const name = user.name
    const trading = user.trading
    const volumes = user.volumes
    const revenue = user.revenue

    return (
      <div className="recently-added" key={user.id}>
        <div className="recents">
        <h4>Recently Added</h4>
          <p>{name}</p>
          <p>{trading}</p>
          <p>{volumes}</p>
          <p>{revenue}</p>
        </div>
      </div>
    );

  });
  return <div>{renderUserData}</div>
    
  
}