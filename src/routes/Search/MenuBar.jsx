import { json } from "d3";
import React, {useState, useCallback, useEffect} from "react";


const MenuBar = ({setResults}) => {
  
  return (
    <div className="Gmenu">
    <ul className="menu">
        <li>
        <a title="Menu" href=""><span className="difnav">Menu</span></a>  
          <ul className="dropdown">
            <li><a href="index.html"><span className="nav"></span></a></li>
            <li><a href="organization.html"><span className="nav">Definitions</span></a></li>
            <li><a href="orgChart2.html"><span className="nav">Analysis</span></a></li>
            <li><a href="Mechanistic.html"><span className="nav">Observation</span></a></li>
            <li><a href="KeyElements.html"><span className="nav">Discussion</span></a></li>
            <li><a href="OverView.html"><span className="nav">Overview</span></a></li>
          </ul>  
        </li>
    </ul>
  </div>
  )
};

export default MenuBar;

//we are using the useState hook to record and analyse what the user enters
//whenever the user enters a text we want to be able to fetch data from an external API
//for this we will be using fetch in the form of a json API that makes dummy calls
//whenever you have an asynchronous function (like using this json fetch with useState) you have to chain a .then on it to a wait response
//then we have to convert the response intoa format that javascript can understand.
