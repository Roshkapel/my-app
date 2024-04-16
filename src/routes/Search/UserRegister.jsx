import React from 'react';
// import images from './images.jpeg';
import logo from './logo.png'
// import NavBar from '../NavBar';
import { HomeNav } from './HomeNav';
export const UserRegister = () => {

    const width = 100;
    const height = 100;
  return (
    <>
        <HomeNav />
      <div> <span className="add-data-heading"><h2> Register</h2></span></div>
      <div className='user-login'>
          <div style={{
            marginTop: `0px`,
            marginBottom: `0px`,
            marginLeft: `200px`,
            alignItems: 'center',
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: `90px`,
            height: `90px`
          }}>
          </div>

            <div className='register'>
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
              <div className='user-field'>
                <br/>
              <button className="sign-in-btn" type="submit">Register</button>
              {/* <button className='cancel-btn' type="button">Cancel</button> */}
              </div>
            </div>

          <div></div>
      </div>
    </>
  )
}