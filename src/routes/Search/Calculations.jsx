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
              <div  className='forcast-display'>
                <h3>Key Customers</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies'>
            <div  className='forcast-display'>
                <h3>Key Periods</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies'>
            <div  className='forcast-display'>
                <h3>Focus Margin</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies'>
            <div  className='forcast-display'>
                <h3>Key Days</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies'>
            <div  className='forcast-display'>
                <h3>Focus Period</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies2'>
            <div  className='forcast-display'>
                <h3>Total Sales By:</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies2'>
            <div  className='forcast-display'>
                <h3>Total Customers By:</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies2'>
            <div  className='forcast-display'>
                <h3>Total Products By:</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies2'>
            <div  className='forcast-display'>
                <h3>Focus Areas</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies2'>
            <div  className='forcast-display'>
                <h3>New Customers</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies2'>
            <div  className='forcast-display'>
                <h3>Consistency rate</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies3'>
            <div  className='forcast-display'>
                <h3>Consistent Customers</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies3'>
            <div  className='forcast-display'>
                <h3>Inconsistent Customers</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies3'>
            <div  className='forcast-display'>
                <h3>Estimated Reach</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies3'>
            <div  className='forcast-display'>
                <h3>Pending Sales;</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies3'>
            <div  className='forcast-display'>
                <h3>Closed Sales</h3>
                <p>Listed</p>
              </div>
            </div>
            <div className='hobbies3'>
            <div  className='forcast-display'>
                <h3>Required Sales</h3>
                <p>Listed</p>
              </div>
            </div>
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