import React, { useState } from "react";
import Styles from "../Styles/workinfo.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Workexperienceaction from "../Action/Workexperienceaction";

export default function Workinfo() {
const dispatch=useDispatch();
const {Workexperiencereducer}=useSelector((state)=>state);
const [Workexperience,setWorkexperience]=useState(Workexperiencereducer);

function handleOnChange(e)
{
  let {id,value}=e.target;
  console.log(id,value);
  setWorkexperience(
    {
      ...Workexperience,
      [id]:value
    }
  );
  console.log(Workexperience);
}

function submitWorkexperience(e)
{
  dispatch(Workexperienceaction(Workexperience));
}

  return (
    <div className={Styles.container}>
      <div className={Styles.formsection}>
        <div className={Styles.headersection}>
          <h1>Work Experience</h1>
          <p>Start with your most recent position.</p>
        </div>
        <form action="">
          <label>Job Title</label>
          <input type="text" id='jobtitle' value={Workexperience.jobtitle} onChange={handleOnChange} />
          <label>Company</label>
          <input type="text" id='company' value={Workexperience.company} onChange={handleOnChange} />
          <div className={Styles.cc}>
            <label>City/Town</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Country</label>
            <input type="text" className={Styles.citytown} id='citytown' value={Workexperience.citytown} onChange={handleOnChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" className={Styles.country} id='country' value={Workexperience.country} onChange={handleOnChange} />
          </div>
          <div className={Styles.date}>
            <label>Start Date</label>
            <br />
            <select type="text" className={Styles.month} id='startmonth' value={Workexperience.startmonth} onChange={handleOnChange} >
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
              <option>December</option>
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <select type="text" className={Styles.year} id='startyear' value={Workexperience.startyear} onChange={handleOnChange} >
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
            <label>End Date</label>
            <br />
            <select type="text" className={Styles.month} id='endmonth' value={Workexperience.endmonth} onChange={handleOnChange} >
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
              <option>December</option>
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <select type="text" className={Styles.year} id='endyear' value={Workexperience.endyear} onChange={handleOnChange} >
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
          </div>
          <div className={Styles.check}>
            <input type="checkbox" />
            <label>Currently Work Here</label>
            <br/>
          </div>
          <Link to="/education">
            <button className={Styles.btnSite} type="submit" onClick={submitWorkexperience} >ENTER JOB DESCRIPTION</button>
          </Link>
        </form>
        <div className={Styles.back}>
          <Link to="/workexperience">Back</Link>
        </div>
      </div>
    </div>
  );
}
