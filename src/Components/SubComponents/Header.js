import React from 'react';
import styles from '../../Styles/header.module.css';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className={styles.logo}>
        <Link to="/">
            <i className="fa fa-file-text-o" style={{ fontSize: "40px", color: "blue" }}></i>
        </Link>
    </div>
    <div className={styles.contents}>
        <div>
            Resume Templates
        </div>
        <div>
            About Us
        </div>
        <div className={styles.signupbtn}>
            <Link to='/Signup' style={{textDecoration:"none"}}>
            Register
            </Link>
        </div>
        <div className={styles.loginbtn}>
            <Link to='/Login' style={{textDecoration:"none"}}>
            Login
            </Link>
        </div>
    </div>
    </>
  )
}
