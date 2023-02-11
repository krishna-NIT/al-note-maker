import React from 'react'
import styles from './sidenav.module.css'
import logo from './logo.png'

export default function Sidenav() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.sidenav}>
                <div className={styles.logo}><img src={logo} alt="" /></div>
                <div className={styles.itemList}>
                    <ul>
                        <li> <a href="#"> Dashboard</a></li>
                        <li> <a href="#"> Previous Records</a></li>
                        <li> <a href="#"> About</a></li>
                        <li> <a href="#"> Settings</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
