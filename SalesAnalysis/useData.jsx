import React, {useState,  useEffect, useContext, createContext} from "react";
import * as d3 from "d3";
import { BtnContext } from "../src/routes/Search/MainContent";
import App from "../src/App";

const csvUrl = "https://gist.githubusercontent.com/Roshkapel/624576680ebfb97f01660d9af7a99179/raw/5f954587b95c2373c9c64e8b954125ca68a06549/SalesData.csv";


//create context
// export const BtnContext = createContext();

export const useData = () => {
  //tell this component to use value from context
  const btn = useContext(BtnContext);
  console.log(btn, 'this btn')
 

  const [data, setData] = useState(null); 


  useEffect(() => {
    const row = d =>{
      d.Revenue =  +d['Revenue 2023'];  
      return d
     };   

    d3.csv(csvUrl, row).then(data => {
      setData(data.slice(100, btn || 105));
    });
  }, [btn]); //setting the btn value inside the dependency array to update when it changes

  return data;
};
      
// let num =5;
// let rep =100;

export const ChartButtons = ({addFunction, subFunction}) => {
  // Step 4: Use state to update btn and provide it through context
  // const [btn, setBtn] = useState(105);

  // function addFunction() {
  //   console.log('clicked')
  //   num+=5;
  //   const newData = rep + num;
  //    setBtn(newData)
  // }
    
  const add = ">>>";
  const sub = "<<<";
    
  return (
    
       <div className="chart-btn" >
        <button className="add-five-btn" type="button" onClick={addFunction}>{add}</button>
        <button className="sub-five-btn" type="button" onClick={subFunction}>{sub}</button>
      </div>
  
  )


}