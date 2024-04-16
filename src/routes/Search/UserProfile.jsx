import React from 'react';
import images from './images.jpeg';
import NavBar from '../NavBar';
export const UserProfile = ({setResults,users}) => {

    const width = 100;
    const height = 100;
  return (
    <>
        <NavBar 
        users={users}
        setResults={setResults}
       />
      <div> <span className="add-data-heading"><h2>User Login</h2></span></div>
      <div className='user-login'>
          <div style={{
            marginLeft: `200px`,
            alignItems: 'center',
            backgroundImage: `url(${images})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: `80px`,
            height: `80px`
          }}>
          </div>

            <div className='login'>
              <div className="user-field">
              <label>Username:</label>
                <input className='user-input'
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>

              <div className="user-field">
              <label>User ID#:</label>
                <input className='user-input'
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>

              <div className="user-field">
              <label>Password:</label>
                <input className='user-input'
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>

              <div className="user-field">
              <label>Department:</label>
                <input className='user-input'
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>
            </div>

          <div></div>
      </div>
    </>
  )
}