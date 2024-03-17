import React from "react";

 class SalesAddData extends React.Component{

  render() {
    return (
      <div className="input-data">
        <span className="add-data-heading"><h3>Add Data</h3></span>
        <form>
          <div>
           <label>Name</label>
            <input type="text" placeholder="enter name" /> 
          </div>
          <div>
           <label>Sale</label>
            <input type="text" placeholder="enter data" /> 
          </div>
          <button className="add-data-btn" type="button">Add</button>
        </form>
      </div>
    );
  }
  
}

export default SalesAddData;