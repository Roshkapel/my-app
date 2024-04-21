// import React  from "react";
// import { SalesReps } from "./SalesReps";
// import { v4 as uuidv4 } from 'uuid';
// import { HomeNav } from "./HomeNav";
// import { useRef, useState, useEffect } from 'react';


//  class AddRep extends React.Component{


//    userRef = useRef();
//    errRef = useRef();
//   //using states in class components
//     state = {
//       id: uuidv4(),
//       name: "",
//       password: "",
//     };

  
//     readData = (e) => {
//       setUserReg(e.target.value);
//       this.setState({name: e.target.value});
//     }


//     add = (e) => {
//       e.preventDefault();//stops refresh
//       //additional security to ensure rgex is enforced
//       const v1 = USER_REGEX.test(userReg);
//       const v2 = PWD_REGEX.test(pwd);
//       if(!v1 || !v2) {
//         setErrMsg("Invalid Entry");
//         return;
//       }
      

//       // this.props.addDataHandler({ ...this.state})
//       this.props.addDataHandler(this.state) 
//       console.log("Data entered:", this.state);   
//       // this.setState({ name: "", trading: "" });
//       // this.props.history.push("/");
//     }

//   render(){

//   return (
//     <>
//         <HomeNav />
//       <div> <span className="add-data-heading"><h2> Register</h2></span>
//         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
//           aria-live="assertive">{errMsg}</p>
//       </div>
//       <div className='user-login'>
//           <div style={{
//             marginTop: `0px`,
//             marginBottom: `0px`,
//             marginLeft: `200px`,
//             alignItems: 'center',
//             backgroundImage: `url(${logo})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             width: `90px`,
//             height: `90px`
//           }}>
//           </div>

//             <form onSubmit = {handleSubmit}>
//             <div className='register'>
//               <div className="user-field">
//               <label htmlFor="username">Username:
//                 <span className={validName ? "valid" : "hide"}>
//                   <FontAwesomeIcon icon={faCheck} />
//                 </span>
//                 <span className={validName || !userReg ? "hide" : "invalid"}>
//                   <FontAwesomeIcon icon={faTimes} />
//                 </span>
//               </label>
//                 <input className='user-input'
//                   type="text" 
//                   id="username"
//                   ref={userRef}
//                   autoComplete='off'
//                   onChange={(e) => this.readData}
//                   required
//                   aria-invalid={validName ? "false" : "true"}
//                   aria-describedby="uidnote"
//                   onFocus={() => setUserFocus(true)}
//                   onBlur={() => setUserFocus(false)}
//                   placeholder="enter name" 
//                   /> 

//                   <p id="uidnote" className={userFocus && userReg && !validName ? "instructions" : "hide"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     4 - 24 characters.<br />
//                     Must begin with a letter.<br />
//                     Letters, numbers, underscores, hyphens allowed.
//                   </p>
//               </div>

//               <div className="user-field">
//               <label htmlFor>Password:
//               <span className={validPwd ? "valid" : "hide"}>
//                   <FontAwesomeIcon icon={faCheck} />
//                 </span>
//                 <span className={validPwd || !pwd ? "hide" : "invalid"}>
//                   <FontAwesomeIcon icon={faTimes} />
//                 </span>
//               </label>
//                 <input className='user-input' 
//                   type="password" 
//                   id="password"
//                   ref={userRef}
//                   onChange={(e) => setPwd(e.target.value)}
//                   required
//                   aria-invalid={validPwd ? "false" : "true"}
//                   aria-describedby="pwdnote"
//                   onFocus={() => setPwdFocus(true)}
//                   onBlur={() => setPwdFocus(false)}
//                   placeholder="enter password" 
//                   /> 

//                   <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "hide"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     8 - 24 characters.<br />
//                     Must include uppercase, lowercase, letters, .<br />
//                     numbers & a character.
//                   </p>
//               </div>

              
//               <div className="user-field">
//               <label htmlFor='confirm_pwd'>Confirm Password:
//               <span className={validMatch && matchPwd ? "valid" : "hide"}>
//                   <FontAwesomeIcon icon={faCheck} />
//                 </span>
//                 <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
//                   <FontAwesomeIcon icon={faTimes} />
//                 </span>
//               </label>
//                 <input className='user-input'
//                   type="password"
//                   id="confirm_pwd"
//                   ref={userRef}
//                   onChange={(e) => setMatchPwd(e.target.value)}
//                   required
//                   aria-invalid={validMatch ? "false" : "true"}
//                   aria-describedby="confirmnote"
//                   onFocus={() => setMatchFocus(true)}
//                   onBlur={() => setMatchFocus(false)} 
//                   placeholder="enter name" 
//                   /> 
//                   <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "hide"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     Must match the first password input field .<br />
//                   </p>
//               </div>
//               <div className='user-field'>
//               <button 
//                 disabled={!validName || !validPwd || !validMatch ? true : false}
//               className="sign-in-btn" type="submit">Register</button>
//               </div>
//             </div>
//                 <div className='register-sign-in'><Link to='/login'>Login</Link></div>
//             </form>
//       </div>
//     </>
//   )

// }
  
// };

// export default AddRep;