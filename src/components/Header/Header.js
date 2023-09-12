import React from 'react'
import styles from './Header.module.css';
import ResumeSvg from '../../assets/resume.svg';

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.heading}>A <span>Resume</span> that stands out!</p>
            <p className={styles.heading}>Make your own Resume. <span>Style it your way</span></p>
        </div>
        <div className={styles.right}>
            <img src={ResumeSvg} alt="Resume"/>
        </div>
    </div>
  )
}

export default Header;
