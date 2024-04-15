import React from 'react';

export const Calculations = ({}) => {

    return (
      <>
        <div className>
        <div> <span className="add-data-heading"><h3>Forecast</h3></span></div>
          <hr />
          <div className='display-box'>
            <div className='hobbies'>
              <div className='forcast-display'>
                <h3>Key Products</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies'>
              <div  className='forcast-display'></div>
            </div>
            <div className='hobbies'></div>
            <div className='hobbies'></div>
            <div className='hobbies'></div>
            <div className='hobbies'></div>
            <div className='hobbies2'></div>
            <div className='hobbies2'></div>
            <div className='hobbies2'></div>
            <div className='hobbies2'></div>
            <div className='hobbies2'></div>
            <div className='hobbies2'></div>
            <div className='hobbies3'></div>
            <div className='hobbies3'></div>
            <div className='hobbies3'></div>
            <div className='hobbies3'></div>
            <div className='hobbies3'></div>
            <div className='hobbies3'></div>
            {/* <div className='hobbies'></div>
            <div className='hobbies'></div>
            <div className='hobbies'></div>
            <div className='hobbies2'></div> */}
          </div>

         <div >
        <form onSubmit="">
        <ul className='enterData'>
          <li>
          <div className="data-input1">
           <label>Sales ID #:</label>
            <div>
            <input className="d-input"
              type="text" 
              placeholder="enter name"
            /> 
            </div>
          </div>
          </li>
          <li>
          <div className="data-input1">
           <label>Target amassed:</label>
            <input className="d-input"
              type="text" 
              placeholder="enter data" 
             /> 
          </div>
          </li>
          <li>
          <div className="data-input1">
           <label>Target Objective:</label>
            <input className="d-input"
              type="text" 
              placeholder="enter data" 
             /> 
          </div>
          </li>
          <li>
            <div className="data-input1">
            <label>Margin:</label>
              <input className="d-input"
                type="text" 
                placeholder="enter data" 
              /> 
            </div>
          </li>
          <li>
          <div className="data-input1">
           <label>Days Remaining:</label>
            <input className="d-input"
              type="text" 
              placeholder="enter data" 
             /> 
          </div>
          </li>
        </ul>
          <div className='forcast-btn'>
            <button className="add-data-btn3" type="submit" >Add</button>
          </div>
        </form>
           
      </div>

        </div>
      </>
    )
}