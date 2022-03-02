import React, { createRef } from 'react';
import styles from '../Styles/login.module.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {

let emailRef=createRef(null);
let passRef=createRef(null);

function handleClick(e)
{
const auth = getAuth();
signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
  .then((userCredential) => {
    // Log in 
    const user = userCredential.user;
    // ...
    alert("Login success");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //.. to display error alert used
    alert(errorMessage);
  });
}

  return (
    <div className={styles.formcard}>
            <h2 className="form-heading center">Enter Login details</h2>
            <div className="form-section">
                <div className="input-group full">
                    <label>Email</label>
                    <div className="effect">
                        <input type="text" name="email" ref={emailRef}/>
                    </div>
                </div>
                <div className="input-group full">
                    <label>Password</label>
                    <div className="effect">
                        <input type="password" name="password" ref={passRef}/>
                    </div>
                </div>
                <div className="form-buttons">
                    <button className="btn hvr-float-shadow" type="button" onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
  )
}
