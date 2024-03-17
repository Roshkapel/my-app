import { json } from "d3";
import React, {useState, useCallback, useEffect} from "react";
import { SalesData } from "./SalesData";
import {FaSearch} from "react-icons/fa";
import axios from "axios";
import SalesAddData from "../SalesAnalysis/SalesAddData.js";
import { SalesReps } from "./SalesReps.js";
import { Router, Routes, Route } from "react-router-dom";

// import "./Search";
const csvData = "https://gist.githubusercontent.com/Roshkapel/624576680ebfb97f01660d9af7a99179/raw/5f954587b95c2373c9c64e8b954125ca68a06549/SalesData.csv";



export const SearchBar = ({setResults, userData, addDataHandler, removeDataHandler, users}) => {
  const [input, setInput] = useState(""); //asigns the input as well as the input we will search for

  const [show, setShow] = useState(false);
  const [showRecents,setShowRecents] = useState(false)

  const viewRecents = () => {
    if (showRecents === false){
      setShowRecents(true);
    } else setShowRecents(false);
  }



  const onShowClick = () => {
    if (show === false){
      setShow(true);
    } else setShow(false);
  }

  

const fetchData = (value) => {
  fetch("http://httpbin.org/post").then((response) => response.json()).then((json) => {
    const results = json.filter((user) => {
      return (
        user['Trading As']
      );
    });
    setResults(results)
  })
};

const handleChange = (value) => {
  setInput(value);
  fetchData(value);
};

  return (
   
  <>
        <div className="search-Container">  
        <div className="search-icon">
          <FaSearch />
        </div>
            <input 
            type="text" 
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}>
            </input> 

            <div className="data-input">
            <input 
              type="text" 
              placeholder="enter..."
              >
              </input>  
              <button onClick={onShowClick} >Add</button>
              {show &&  <SalesAddData addDataHandler={addDataHandler}/> }
              <div >
                {show && <SalesReps 
                  // userData={userData}
                  users={users}
                  removeDataHandler={removeDataHandler}
                  />  }
              </div>
            </div> 
           
        </div>
  </>
      
  )
}

//we are using the useState hook to record and analyse what the user enters
//whenever the user enters a text we want to be able to fetch data from an external API
//for this we will be using fetch in the form of a json API that makes dummy calls
//whenever you have an asynchronous function (like using this json fetch with useState) you have to chain a .then on it to a wait response
//then we have to convert the response intoa format that javascript can understand.
// "http://httpbin.org/po"