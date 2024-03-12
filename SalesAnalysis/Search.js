// import { json } from "d3";
// import React, {useState, useCallback, useEffect} from "react";
// import {FaSearch} from "react-icons/fa";
// // import Papa from "papaparse";
// // import "./Search";
// const csvData = "https://gist.githubusercontent.com/Roshkapel/624576680ebfb97f01660d9af7a99179/raw/5f954587b95c2373c9c64e8b954125ca68a06549/SalesData.csv";

// let userData;

// export const SearchBar = () => {
//   const [input, setInput] = useState(null); //asigns the input as well as the input we will search for
//   const salesFigures = [];
//   const [data, setData] = useState([]);
//   const [values, setValues] = useState([])

   
//   const handleCSVData = (data) => {
//     // Parse CSV data into an array
//     // eslint-disable-next-line no-undef
//     Papa.parse(data, {
//         header: true, // Assumes the first row contains headers
//         dynamicTyping: true, // Converts numeric values to numbers
//         complete: function(results) {
//             // The parsed data is available in results.data
//             const dataArray = results.data;
  
//             results.data.map((d) => {
//               salesFigures.push(Object.values(d))
//             });


//             setData(results.data)
//             setValues(salesFigures)
//             console.log(salesFigures)
           

//             // console.log(dataArray);
//             // Now you can use the dataArray as needed     
//             // return userData   
//         }
       

//     });
// }


//   return (
//     <div className="menu-bar">
   
//     <div className="search-input">  
//     <FaSearch id="search-icon"/>
//     <input placeholder="Type to search..."
//       value={input}
//       // onChange={(e) => handleChange(e.target.value)}
//     />
//     </div>
//   </div>
//   )
// }

// //we are using the useState hook to record and analyse what the user enters
// //whenever the user enters a text we want to be able to fetch data from an external API
// //for this we will be using fetch in the form of a json API that makes dummy calls
// //whenever you have an asynchronous function (like using this json fetch with useState) you have to chain a .then on it to a wait response
// //then we have to convert the response intoa format that javascript can understand.



// //we are using the useState hook to record and analyse what the user enters
// //whenever the user enters a text we want to be able to fetch data from an external API
// //for this we will be using fetch in the form of a json API that makes dummy calls
// //whenever you have an asynchronous function (like using this json fetch with useState) you have to chain a .then on it to a wait response
// //then we have to convert the response intoa format that javascript can understand.
