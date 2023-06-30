"use client"

import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import { ThemeContext } from '@/context/ThemeContext'


const DarkmodeToggle = () => {

  const { mode, toggle } = useContext(ThemeContext);

  console.log("mode",mode)

  return (
    <div className={styles.container} onClick={toggle}>
          <div className={styles.icon}>🌕</div>
          <div className={styles.icon}>⛅</div>
          <div className={styles.ball} style={ mode === "light" ? { left:"1px"} : {right:"1px"}}/>
    </div>
  )
}

export default DarkmodeToggle
