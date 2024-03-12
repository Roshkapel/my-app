import React, {useState, useCallback, useEffect} from "react";
import { UploadData } from "./UploadData";

export const CsvData = () => {

  const[data, setData] = useState([]);
  const[columnArray, setColumn] = useState([]);
  const[values, setValues] = useState([]);

  const [file, setFile] = useState(null)
  
  const handleFile = (event) => { 
      // eslint-disable-next-line no-undef
      Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      // dynamicTyping: true,
      complete: function(result){
        const columnArray = [];                 
        const valuesArray = [];

        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setData(result.data);
        setColumn(columnArray[0]);
        setValues(valuesArray);
      }
  })
}



  return (

      <>

        <div className="feature">
        <div className = "csvInput">
          <input 
            type="file"
            name='file'
            onChange={handleFile}>
            </input>
            <UploadData />
        </div>
          <table style={{borderCollapse: "collapse", border: "1px solid black", margin: "5px auto"}}>
            <thead>
              <tr>
                {columnArray.map((col, i)=> (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {values.map((v, i) => (
                <tr key={i}>
                  {v.map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                    <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
   
        </div>
      </>
  )
}

