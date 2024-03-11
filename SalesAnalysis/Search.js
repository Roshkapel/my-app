import { json } from "d3";
import React, {useState, useCallback, useEffect} from "react";
import {FaSearch} from "react-icons/fa";
// import Papa from "papaparse";
// import "./Search";
const csvData = "https://gist.githubusercontent.com/Roshkapel/624576680ebfb97f01660d9af7a99179/raw/5f954587b95c2373c9c64e8b954125ca68a06549/SalesData.csv";

let userData;

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState(null); //asigns the input as well as the input we will search for

   
  const handleCSVData = (data) => {
    // Parse CSV data into an array
    // eslint-disable-next-line no-undef
    Papa.parse(data, {
        header: true, // Assumes the first row contains headers
        dynamicTyping: true, // Converts numeric values to numbers
        complete: function(results) {
            // The parsed data is available in results.data
            const dataArray = results.data;
            const newData = JSON.stringify(dataArray);
            userData = JSON.parse(newData);
            // console.log(dataArray);
            // Now you can use the dataArray as needed     
            return userData   
        }
       

    });
}

 
fetch(csvData)
    .then(response => response.text())
    .then(handleCSVData)
    .catch(error => console.error('Error fetching CSV file:', error));

  const fetchData = (value) => {
    // // fetch("https://jsonplaceholder.typicode.com/users")
    // fetch(csvData)
    // //going to use response.text() instead bcuz i dont think the response.json will work well
    // .then((response) => response.text())
    // .then((json) => {
    //   //what we now want to do is to take the input value and return the value tht matches a valuefrom within our database
    //   //to do this we will use a filtering function
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
    <div className="menu-bar">
        <a title="menu" href="" className="menu-drop">Menu</a>
        <div className="menu-dropdown">
          <a title="home" href=""></a>
          <a title="home" href=""></a>
          <a title="home" href=""></a>
        </div>
        <a title="profile" href="">Profile</a>
        <a title="profile" href="">Sign In</a>
        <a title="profile" href="">View</a>
      <div className="search-input">  
      <FaSearch id="search-icon"/>
      <input placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      </div>
    </div>
  )
}

//we are using the useState hook to record and analyse what the user enters
//whenever the user enters a text we want to be able to fetch data from an external API
//for this we will be using fetch in the form of a json API that makes dummy calls
//whenever you have an asynchronous function (like using this json fetch with useState) you have to chain a .then on it to a wait response
//then we have to convert the response intoa format that javascript can understand.
