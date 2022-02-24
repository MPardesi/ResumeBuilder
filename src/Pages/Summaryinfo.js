import React, { useState } from 'react';
import Styles from '../Styles/summaryinfo.module.css'
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Summaryaction from '../Action/Summaryaction';

export default function Summaryinfo() {
const dispatch=useDispatch();
const {Summaryreducer}=useSelector((state)=>state);
const [summary,setSummary]=useState(Summaryreducer);

function handleOnChange(e)
{
  let {id,value}=e.target;
  console.log(id,value);
  setSummary(
    {
      ...summary,
      [id]:value
    }
  );
}

function submitSummary(e)
{
  dispatch(Summaryaction(summary));
}

  return (
    <div className={Styles.container}>
    <div className={Styles.formsection}>
      <div className={Styles.headersection}>
        <h1>Summary</h1>
        <p>Briefly describe the value that you bring through your skills, background and experience.</p>
      </div>
      <form action="" className={Styles.form}>
          <textarea placeholder='Sell yourself for the job. Include 3-5 sentences. Customize your summary to the job you’re applying to.' name="summary" id="text" value={summary.text} onChange={handleOnChange} cols="30" rows="20"></textarea>
          <div className={Styles.editorbtn}>
            <i class="fa-solid fa-bold"></i>
            <i class="fa-solid fa-italic"></i>
            <i class="fa-solid fa-underline"></i>
            <i class="fa-solid fa-rotate-left"></i>
            <i class="fa-solid fa-rotate-right"></i>
            <i class="fa-solid fa-spell-check"></i>
            <i class="fa-solid fa-list-check"></i>
          </div>
        <Link to="/end"><button className={Styles.btnSite} type="submit" onClick={submitSummary} >SAVE & CONTINUE</button></Link>
      </form>
      <div className={Styles.back}>
        <Link to="/skillsinfo">Back</Link>
      </div>
    </div>
  </div>
  )
}
