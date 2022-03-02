import React from 'react';
import Styles from '../Styles/end.module.css';
import { useSelector } from 'react-redux';

export default function End() {
let {Tellusreducer}=useSelector((state)=>state);
let {Workexperiencereducer}=useSelector((state)=>state);
let {Educationreducer}=useSelector((state)=>state);
let {Skillsreducer}=useSelector((state)=>state);
let {Summaryreducer}=useSelector((state)=>state);

  return (
    <div className={Styles.containerbox}>
      <div className={Styles.left}>

          <div className={Styles.tellusdata}>
            <input className={Styles.nameinitial} type="text" /> &nbsp;&nbsp;
          <h4>{Tellusreducer.name}</h4>
          <br/>
          <span><p>{Tellusreducer.email}, {Tellusreducer.streetaddress}, {Tellusreducer.city}, {Tellusreducer.country}, {Tellusreducer.phonenumber}</p></span>
          </div>
          <hr/>

          <div className={Styles.experiencedata}>
            <p>{Workexperiencereducer.jobtitle}, {Workexperiencereducer.company}, {Workexperiencereducer.citytown}, {Workexperiencereducer.country}, {Workexperiencereducer.startmonth}, {Workexperiencereducer.startyear}, {Workexperiencereducer.endmonth}, {Workexperiencereducer.endyear} </p>
          </div>
          <hr/>

          <div className={Styles.educationdata}>
            <p>{Educationreducer.schoolname}, {Educationreducer.citytown}, {Educationreducer.country}, {Educationreducer.degree}, {Educationreducer.month}, {Educationreducer.year} </p>
          </div>
          <hr/>

          <div className={Styles.skillsdata}>
            <p>{Skillsreducer.skillone}, {Skillsreducer.skilltwo}, {Skillsreducer.skillthree}, {Skillsreducer.skillfour}, {Skillsreducer.skillfive}, {Skillsreducer.skillsix}, {Skillsreducer.skillseven} </p>
          </div>
          <hr/>

          <div className={Styles.summarydata}>
            <p>{Summaryreducer.text}</p>
          </div>
          <hr/>
      </div>

      <div className={Styles.right}>
        <div className={Styles.firstbox}>
          <h2>Here’s Your Resume!</h2>
          <p>You can change the design here</p>
          <h4>Export Options</h4>
          <div className={Styles.button}>
            <button className={Styles.btnone}>Download</button><br/>
            <button className={Styles.btntwo}>Print</button><br/>
            <button className={Styles.btntwo}>Email</button><br/>
          </div>
        </div>
        <hr/>

        <div className={Styles.secondbox}>
          <h4>Formatting Option</h4>
            <p>Layout</p>
              <button>CONDENSED</button> &nbsp;&nbsp;
              <button>STATNDARD</button> &nbsp;&nbsp;
              <button>EXPANDED</button><br/>
            <br/>
            <label>Font Style</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Font Size</label><br/>
            <select name="" id="">
              <option value="">Raleway</option>
              <option value="">Sansserif</option>
              <option value="">Verdana</option>
              <option value="">Times New Roman</option>
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="" id="">
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
            <br/><br/>
            <div className={Styles.colorbtn}>
              <label>Colors</label><br/>
              <button className={Styles.btnone}>1</button> &nbsp;
              <button className={Styles.btntwo}>2</button> &nbsp;
              <button className={Styles.btnthree}>3</button> &nbsp;
              <button className={Styles.btnfour}>4</button> &nbsp;
              <button className={Styles.btnfive}>5</button> &nbsp;
              <button className={Styles.btnsix}>6</button> &nbsp;
              <button className={Styles.btnseven}>7</button> &nbsp;
              <br/>
              <hr/>
            </div>
        </div>

        <div className={Styles.thirdbox}>
          <button className={Styles.btnone}>+Add New Section</button><br/>
          <button className={Styles.btntwo}>Change Template</button><br/>
          <button className={Styles.btnthree}>Spell-Check Mode</button><br/>
        </div>
      </div>
    </div>
  )
}
