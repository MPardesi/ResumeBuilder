import React from 'react'
import Styles from '../Styles/skills.module.css';
import {Link} from 'react-router-dom';

export default function Skills() {
  return (
    <div className={Styles.container}>
      <section>
        <div className={Styles.left}>
          <div className={Styles.step}>
          <p>UP NEXT :</p>
          <h1>Skills</h1>
          <ul>
            <li className={Styles.firststep}><span>Keep your list of skills to around 8 if possible. Also, if you can, use skills listed in the job posting you are applying to.</span></li>
            <li className={Styles.secondstep}><span>Soft skills are the most transferable from one role to other as they are more universal.</span></li>
            <li className={Styles.thirdstep}><span>Hard skills, on the other hand, are technical skills. They relate to specific roles and responsibilities.</span></li>
          </ul>
          </div>
          <div className={Styles.check}>
              <input type="checkbox" />
              <label>Don't show me tips pages in the future.</label>
          </div>
          <Link to="/skillsinfo"><button className={Styles.btnSite}>ENTER MY SKILLS</button></Link>
          <div className={Styles.back}>
            <Link to="/educationinfo">Back</Link>
          </div>
        </div>
        <div className={Styles.right}>
          <img src="https://cdn1.resumenerd.com/images/tips/skills-tips.svg" alt=""/>
        </div>
      </section>
    </div>
  )
}
