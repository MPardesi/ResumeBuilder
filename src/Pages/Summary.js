import React from 'react';
import Styles from '../Styles/summary.module.css';
import {Link} from 'react-router-dom';

export default function Summary() {
  return (
    <div className={Styles.container}>
      <section>
        <div className={Styles.left}>
          <div className={Styles.step}>
          <p>UP NEXT :</p>
          <h1>Summary</h1>
          <ul>
            <li className={Styles.firststep}><span>This is most read section of your resume. Keep it succinct, powerful, and easy to read.</span></li>
            <li className={Styles.secondstep}><span>Give a brief overview of your skills and background and tie that in to how you would positively impact the company.</span></li>
            <li className={Styles.thirdstep}><span>Sometimes it's best to write a custom summary that is specific to the job you are applying to.</span></li>
          </ul>
          </div>
          <div className={Styles.check}>
              <input type="checkbox" />
              <label>Don't show me tips pages in the future.</label>
          </div>
          <Link to="/summaryinfo"><button className={Styles.btnSite}>ENTER MY SUMMARY</button></Link>
          <div className={Styles.back}>
            <Link to="/skillsinfo">Back</Link>
          </div>
        </div>
        <div className={Styles.right}>
          <img src="https://cdn1.resumenerd.com/images/tips/summary-tips.svg" alt=""/>
        </div>
      </section>
    </div>
  )
}
