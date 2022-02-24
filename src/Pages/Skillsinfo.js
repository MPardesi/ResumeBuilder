import React, { useState } from 'react';
import Styles from '../Styles/skillsinfo.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Skillsaction from '../Action/Skillsaction';

export default function Skillsinfo() {
const dispatch=useDispatch();
const {Skillsreducer}=useSelector((state)=>state);
const [skill,setSkill]=useState(Skillsreducer);

function handleOnChange(e)
{
  let {id,value}=e.target;
  console.log(id,value);
  setSkill(
    {
      ...skill,
      [id]:value
    }
  );
}

function submitSkill(e)
{
  dispatch(Skillsaction(skill));
}

  return (
    <div className={Styles.container}>
    <div className={Styles.formsection}>
      <div className={Styles.headersection}>
        <h1>Skills</h1>
        <p>Add a few skills to show employers what you're good at.</p>
      </div>
      <form action="" className={Styles.form}>
    
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #1' id='skillone' value={skill.skillone} onChange={handleOnChange} />
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #2' id='skilltwo' value={skill.skilltwo} onChange={handleOnChange} />
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #3' id='skillthree' value={skill.skillthree} onChange={handleOnChange} />
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #4' id='skillfour' value={skill.skillfour} onChange={handleOnChange} />
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #5' id='skillfive' value={skill.skillfive} onChange={handleOnChange} />
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #6' id='skillsix' value={skill.skillsix} onChange={handleOnChange} />
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.updown}>
          <i class="fa-solid fa-arrows-up-down"></i>
          </div>
            <div className={Styles.input}>
                <input type="text" placeholder='Skills #7' id='skillseven' value={skill.skillseven} onChange={handleOnChange} />
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>

        <div className={Styles.desc}>
           <a href="#">+ Add another skill</a> 
        </div>
        <Link to="/summary"><button className={Styles.btnSite} type="submit" onClick={submitSkill} >SAVE & CONTINUE</button></Link>
      </form>
      <div className={Styles.back}>
        <Link to="/skills">Back</Link>
      </div>
    </div>
  </div>
  )
}
