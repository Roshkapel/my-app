import React from "react";
import NavBar from "../NavBar";
import { Calculations } from "./Calculations";


const SalesForcasting = ({users, addDataHandler, removeDataHandler, updateDataHandler }) => {
  return (
    <>
        <NavBar 
          users={users}
          // setResults={setResults}
          addDataHandler={addDataHandler}
          removeDataHandler={removeDataHandler}
          updateDataHandler={updateDataHandler}
        />
        <Calculations />

    </>
  )
}

export default SalesForcasting