import React, {useState,  useEffect, data} from "react";
import * as d3 from "d3";

const csvUrl = "https://gist.githubusercontent.com/Roshkapel/624576680ebfb97f01660d9af7a99179/raw/5f954587b95c2373c9c64e8b954125ca68a06549/SalesData.csv"

export const useData = () => {
  const [data, setData] = useState(null); 
 
  useEffect(() => {
    const row = d =>{
      d.Revenue =  +d['Revenue 2023'];  
      return d
     };   

    d3.csv(csvUrl, row).then(data => {
      setData(data.slice(100, 130));
    });
  }, []);

  return data;
};
     