import React, {useState, useCallback, useEffect} from "react";
// import Papa from "papaparse";
export const Users = () => {

  const[data, setData] = useState([]);
  const[columnArray, setColumn] = useState([]);
  const[values, setValues] = useState([]);
  const[salesData, setSalesData] = useState([])
  
  const handleFile = (event) => { 
      // eslint-disable-next-line no-undef
      Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      // dynamicTyping: true,
      complete: function(result){
        const columnArray = [];                 
        const valuesArray = [];
        const salesData = [] 

        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
          salesData.push.apply(columnArray, valuesArray)
        });
        setData(result.data);
        setColumn(columnArray[0]);
        setValues(valuesArray);
        setSalesData(salesData);
        
      }
  })
}

  return salesData

      
  
}