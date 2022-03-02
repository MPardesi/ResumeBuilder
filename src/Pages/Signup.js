import { doc, getFirestore, setDoc} from "firebase/firestore/lite"; 
import React, { createRef, useState } from 'react';
import styles from '../Styles/signup.module.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch,useSelector} from 'react-redux';
import userAction from '../Action/userAction';
import {history} from 'react-dom'
// import { set } from "express/lib/application";

// import {db} from './Config'
export default function Signup() {
    let dispatch = useDispatch()
    let emailRef = createRef(null);
    let passRef = createRef(null);
    let [user,setUser] = useState()

    let db = getFirestore();
 async function handleClick(e)
 {
    const auth = getAuth();
    try{

        let user1 = await createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        console.log(user1);
        const docRed = doc(db, "users", user1.user.uid )
        const data = {userData :{
            email:emailRef.current.value,
            password: passRef.current.value
          }}
            //   Add a new document in collection "cities"
              await setDoc(docRed, data);
              dispatch(userAction({
                  email: emailRef.current.value,
                  uid: user1.user.uid
              }))
            //   history.push("/tellus")

    } catch(err){
        console.log(err);
    }
      
 }

  return (
    <div class="form-card">
            <h2 class="form-heading center">Enter your details</h2>
            <div class="form-section">
                <div class="input-group full">
                    <label>Email</label>
                    <div class="effect">
                        <input ref={emailRef} type="text" name="email" />
                    </div>
                </div>
                <div class="input-group full">
                    <label>Password</label>
                    <div class="effect">
                        <input type="password" ref={passRef} name="password" />
                    </div>
                </div>
                <div class="form-buttons">
                    <button class="btn hvr-float-shadow" type="button" onClick={handleClick}>Register</button>
                </div>
            </div>
        </div>
  )
}
