import React, { useState } from 'react';
import Styles from '../Styles/tellus.module.css';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Tellusaction from '../Action/Tellusaction';
// import { doc } from 'firebase/firestore';
import { getFirestore, updateDoc,doc } from 'firebase/firestore/lite';



export default function Tellus() {

const dispatch=useDispatch();
const {Tellusreducer,userReducer}=useSelector((state)=>state);
// const user = useSelector()
// console.log('reducer',Tellusreducer);
const [Tellus,setTellus]=useState(Tellusreducer);
// console.log(Tellus);
console.log(userReducer);
function handleOnChange(e)
{
  let {id,value}=e.target;
  console.log(id,value);
  setTellus(
    {
      ...Tellus,
      [id]:value
    }
  );
  console.log(Tellus);
}
async function submitTellus(e)
{
  const db = getFirestore();
  dispatch(Tellusaction(Tellus));
  const reed = await doc(db, "users", "Contact")
        await updateDoc(reed,Tellus)
       //   Add a new document in collection "cities"
    
}

  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Tell us about yourself</h1>
          <p>With this info, recruiters will be able to find you</p>
        </div>
        <form action="">
          <label>Name</label>
          <input type="text" id='name' value={Tellus.name} onChange={handleOnChange} />
          <label>Email</label>
          <div className={Styles.emailcontainer}>
            <div className={Styles.emailbox}>
              <input type="email" id='email' value={Tellus.email} onChange={handleOnChange} />
            </div>
            <div className={Styles.emailcheck}>
              <input type="checkbox" />
              <label htmlFor="">Don't show on my resume</label>
            </div>
          </div>
          <label>Street Address</label>
          <input type="text" id='streetaddress' value={Tellus.streetaddress} onChange={handleOnChange} />
          <label>City</label>
          <input type="text" className={Styles.city} id='city' value={Tellus.city} onChange={handleOnChange} />
          <label>Country</label>
          <input type="text" id='country' value={Tellus.country} onChange={handleOnChange} />
          <label>Phone Number</label>
          <input type="text" className={Styles.phone} id='phonenumber' value={Tellus.phonenumber} onChange={handleOnChange} />
          <Link to="/workexperience"><button className={Styles.btnSite} type="submit" onClick={submitTellus} >SAVE & CONTINUE</button></Link>
        </form>
        <div className={Styles.back}>
          <Link to="/howto">Back</Link>
        </div>
      </div>
    </div>
  )
}
