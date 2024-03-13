import { json } from "d3";
import React, {useState, useCallback, useEffect} from "react";

import Papa from "papaparse";
// import "./Search";
const csvData = "https://gist.githubusercontent.com/Roshkapel/624576680ebfb97f01660d9af7a99179/raw/5f954587b95c2373c9c64e8b954125ca68a06549/SalesData.csv";

let userData;

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState(null); //asigns the input as well as the input we will search for

  
  const handleCSVData = (data) => {

    Papa.parse(data, {
        header: true, // Assumes the first row contains headers
        dynamicTyping: true, // Converts numeric values to numbers
        complete: function(results) {

            const dataArray = results.data;
            const newData = JSON.stringify(dataArray);
            userData = JSON.parse(newData);
 
            return userData   
        }
       

    });
}

 
fetch(csvData)
    .then(response => response.text())
    .then(handleCSVData)
    .catch(error => console.error('Error fetching CSV file:', error));

  const fetchData = (value) => {

      const results = userData.filter((user) => {
          return ( 
            user.label.includes("t")
            );
      });
      setResults(results)
      console.log(results)
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  return (

      <div className="search-Container">  
      <input 
        type="text" 
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      >

        </input>
      </div>
  )
}

//we are using the useState hook to record and analyse what the user enters
//whenever the user enters a text we want to be able to fetch data from an external API
//for this we will be using fetch in the form of a json API that makes dummy calls
//whenever you have an asynchronous function (like using this json fetch with useState) you have to chain a .then on it to a wait response
//then we have to convert the response intoa format that javascript can understand.
// "http://httpbin.org/po"