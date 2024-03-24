import React  from "react";
import { SalesReps } from "./SalesReps";


 class SalesAddData extends React.Component{
  
  //using states in class components
    state = {
      name: "",
      trading: "",
      volumes: null,
      revenue: null,
    };

    add = (e) => {
      e.preventDefault();
      if(this.state.name === "" || this.state.trading === "" ){
        alert("Please Enter Data");
        return;
      }
      this.props.addDataHandler(this.state)
      this.setState({ name: "", trading: "" });
    }

  render() {
    return (
      <>
         <div className="input-data">
        <span className="add-data-heading"><h3>Add Data</h3></span>
        <form onSubmit={this.add}>
          <div>
           <label>Name</label>
            <input 
              type="text" 
              value={this.state.name}
              placeholder="enter name" 
              onChange={ (e) => this.setState({name: e.target.value})} /> 
          </div>
          <div>
           <label>Sale</label>
            <input 
              type="text" 
              value={this.state.trading}
              placeholder="enter data" 
              onChange={ (e) => this.setState({trading: e.target.value})}/> 
          </div>
          <button className="add-data-btn" type="submit">Add</button>
        </form>
      </div>
      </>
    );
  }
  
}

export default SalesAddData;