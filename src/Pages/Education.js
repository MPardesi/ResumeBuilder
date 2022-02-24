import React from 'react';
import Styles from '../Styles/education.module.css';
import {Link} from 'react-router-dom';

export default function Education() {
  return (
    <div className={Styles.container}>
      <section>
        <div className={Styles.left}>
          <div className={Styles.step}>
          <p>UP NEXT :</p>
          <h1>Education</h1>
          <ul>
            <li className={Styles.firststep}><span>List your high school experience only if you did not go to college.</span></li>
            <li className={Styles.secondstep}><span>If you are still in school, note the expected date of graduation, your major, and the type of degree you'll be receiving.</span></li>
            <li className={Styles.thirdstep}><span>Feel free to mention any honors, awards, scholarships or professional certifications or licenses you may have.</span></li>
          </ul>
          </div>
          <div className={Styles.check}>
              <input type="checkbox" />
              <label>Don't show me tips pages in the future.</label>
          </div>
          <Link to="/educationinfo"><button className={Styles.btnSite}>ENTER MY EDUCATION</button></Link>
          <div className={Styles.back}>
            <Link to="/workinfo">Back</Link>
          </div>
        </div>
        <div className={Styles.right}>
          <img src="https://cdn1.resumenerd.com/images/tips/education-tips.svg" alt=""/>
        </div>
      </section>
    </div>
  )
}
