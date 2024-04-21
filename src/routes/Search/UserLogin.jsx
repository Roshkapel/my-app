import React from 'react';
import { useRef, useState, useEffect } from 'react';
import images from './images.jpeg';
// import NavBar from '../NavBar';
import { HomeNav } from './HomeNav';
import { Link } from 'react-router-dom';
import {UserProfile} from './UserProfile';



const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const UserLogin = () => {


  const logRef = useRef();
  const logErrRef = useRef();

  const [userLog, setUserLog] = useState('');
  const [logPwd, setLogPwd] = useState('');

  const [logErrMsg, setLogErrMsg] = useState('');
  const [logSuccess, setLogSuccess] = useState(false);

  const width = 100;
  const height = 100;


  const runLogin = (e) => {
    e.preventDefault();

     //additional security to ensure rgex is enforced
     const v1 = USER_REGEX.test(userLog);
     const v2 = PWD_REGEX.test(logPwd);
     const REGISTER_URL = 'http://localhost:3006/register';
     if(!v1 || !v2) {
       setLogErrMsg("Invalid Entry");
       return;
     }

     console.log('work');
    setLogSuccess(true);
  }


  // useEffect(() => {
  //   useRef.current.focus();
  // }, [])

  return (
    <>
      {logSuccess ? (
        <div>
          <UserProfile />
        </div>
      ): (

        <div>
        <HomeNav />
          <div>
            <form onSubmit={runLogin}>
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
              <label htmlFor>Username:</label>
                <input className='user-input'
                  id='username'
                  // ref={useRef}
                  autoComplete='off'
                  onChange={(e) => setLogPwd(e.target.value)}
                  // value={userLog}
                  required
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>

              <div className="user-field">
              <label>User ID#:</label>
                <input className='user-input'
                  required
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>

              <div className="user-field">
              <label>Password:</label>
                <input className='user-input'
                  onChange={(e) => setUserLog(e.target.value)}
                  required
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>

              <div className="user-field">
              <label>Department:</label>
                <input className='user-input'
                  required
                  type="text" 
                  placeholder="enter name" 
                  /> 
              </div>
              <div className='user-field'>
              <Link to='/profile'><button className="sign-in-btn" type="submit">Sign in</button></Link>
              {/* <button className='cancel-btn' type="button">Cancel</button> */}
              </div>
            </div>

          <div></div>
      </div>
            </form>
          </div>
        </div>
      ) }
    </>
  )
}