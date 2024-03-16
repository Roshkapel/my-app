import React, {useState, useCallback, useEffect} from "react";
import * as d3 from "d3";
import { useData } from "../SalesAnalysis/useData";
import { AxisBottom } from "../SalesAnalysis/AxisBottom";
import Dropdown from 'react-dropdown';
import { YAxis } from "../SalesAnalysis/Y-Axis";
import { Marks } from "../SalesAnalysis/Marks";
import { MenuBar } from "../SalesAnalysis/MenuBar";
import { CsvData } from "../SalesAnalysis/CsvData.js";

// import { Users } from "../SalesAnalysis/salesInfo";

import { SearchBar } from "../SalesAnalysis/Search";
// import { SearchBar } from "../SalesAnalysis/Search";
// import { FeatureBox } from "../SalesAnalysis/FeatureBox";
// import { SearchRes } from "../SalesAnalysis/SearchRes";
// import { Dropdown } from "../SalesAnalysis/dropdown";


// console.log(d3);

const width = 960;
const height = 500;
const margin = {top: 10, right: 0, bottom: 60, left: 350};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left -  margin.right;

const xAxisLabelOffset = 30; //SET A NEW VARIABLE TO MANIPULATE X-AXIS
const yAxisLabelOffset = 320;


const fadeOpacity = 0.2;

//WE ARE GOING TO CREATE A FUNCTION SO WE CAN ACCESS THESE ATTRIBUTES PROGRAMMATICALLY
const attributes = [
  {value: 'Trading As', label:'Trading As'},
  {value: 'Volume 2022', label:'Volumes 2022'},
  {value: 'Revenue 2023', label:'Revenue 2023'},
  {value: 'Volumes 2023', label:'Volumes 2023'},
  {value: 'species', label:'Species'}
]

////THIS FUNCTION WILL TAKE AS INPUT A VALUE AND RETURN A LABEL
const getLabel = value => {
  for(let i = 0; i < attributes.length; i++) {
   if(attributes[i].value === value){
    return attributes[i].label;
   }
  }
};



const App = () => { 

  
  const data = useData();  
  const [results, setResults] = useState([])

  const [hoveredValue, setHoveredValue] = useState(null);
  //Logic for X (MENU)
  const initialXAttribute = 'Revenue 2023';
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = d => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

    //Logic for Y (MENU)
  const initialYAttribute = 'Trading As';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);  
 
  if(!data) {
    return <pre>Loading...</pre>
  }
  

  const yScale = d3.scaleBand()
  .domain(data.map(d => d['Trading As']))   
  .range([0, innerHeight]);
  
     
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Revenue)])
    .range([0, innerWidth]);

  return (

<>
    <div className="App">
    <div className="navBar">
      <SearchBar 
        setResults={setResults}
      />
      <MenuBar/>
      
    </div>
    <CsvData />
    
    <div className="newDropdown">          
      <div className="X-Axis">
        <span className="dropdown-label">X-Axis</span>
            <Dropdown
              options={attributes} 
              value ={xAttribute} 
              onChange = {({value}) => setXAttribute(value)} 
          
            />
      </div>

        <div className="Y-Axis">
          <span className="dropdown-label">Y-Axis</span>
            <Dropdown
              options={attributes} 
              value ={yAttribute} 
              onChange = {({value}) => setYAttribute(value)}
            />
        </div>
  </div>

      <div className="four">
        <div className="move">
        <svg width={width} height={height}>

            <g transform={`translate(${margin.left}, ${margin.top})`}>
            <AxisBottom xScale={xScale} innerHeight={innerHeight} />
           
                <text className = "axis-Label"
                  textAnchor="middle"
                  transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2 }) rotate(-90)`}
                  > 
                  {yAxisLabel}
                </text> 
           
              
                <YAxis yScale={yScale}/>

                <text className = "axis-Label" 
                  x={innerWidth / 2}
                  y={innerHeight + xAxisLabelOffset + 20} 
                  textAnchor="middle"> 
                {xAxisLabel}
                </text> 
                <g opacity={hoveredValue? fadeOpacity : 1}>
                <Marks 
                  xValue={xValue}
                  xScale={xScale} 
                  yScale={yScale} 
                  yValue={yValue}
                  data={data} />  
              </g>
            </g>

          </svg>
      </div>
      </div>
    </div>
  </>
   );
};

export default App;   
