import React from 'react';
import NavBar from './NavBar';

const SalesData = ({setResults, users, addDataHandler, removeDataHandler}) => {
  return (
    <>
       <NavBar 
        users={users}
        setResults={setResults}
        addDataHandler={addDataHandler}
        removeDataHandler={removeDataHandler}
       />
       <div> Hello World </div>
    </>
  )
};

export default SalesData;