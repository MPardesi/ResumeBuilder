import React, { useState } from 'react';
import Styles from '../Styles/educationinfo.module.css';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Educationaction from '../Action/Educationaction';

export default function Educationinfo() {
const dispatch=useDispatch();
const {Educationreducer}=useSelector((state)=>state);
const [Education,setEducation]=useState(Educationreducer);

function handleOnChange(e)
{
  let {id,value}=e.target;
  console.log(id,value);
  setEducation(
    {
      ...Education,
      [id]:value
    }
  );
  console.log(Education);
}

function submitEducation(e)
{
  dispatch(Educationaction(Education));
}

  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Education</h1>
          <p>Start with your most recent education institution.</p>
        </div>
        <form action="">
          <label>School Name</label>
          <input type="text" id='schoolname' value={Education.schoolname} onChange={handleOnChange} />
          <label>City/Town</label>
          <input type="text" id='citytown' value={Education.citytown} onChange={handleOnChange} />
          <label>Country</label>
          <input type="text" id='country' value={Education.country} onChange={handleOnChange} />
          <label>Degree</label>
          <input type="text" id='degree' value={Education.degree} onChange={handleOnChange} /> 
          <div className={Styles.date}>
            <label>Graduation Date</label>
            <br />
            <select type="text" className={Styles.month} id='month' value={Education.month} onChange={handleOnChange} >
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <select type="text" className={Styles.year} id='year' value={Education.year} onChange={handleOnChange} >
              <option>Year</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
            </select>
            <br />
            <a>+ Add description or special awards</a>
            <br />
          </div>
          <Link to="/skills">
            <button className={Styles.btnSite} type="submit" onClick={submitEducation} >SAVE & CONTINUE</button>
          </Link>
        </form>
        <div className={Styles.back}>
          <Link to="/education">Back</Link>
        </div>
      </div>
    </div>
  )
}
