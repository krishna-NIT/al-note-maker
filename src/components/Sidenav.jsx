import React from 'react'
import Logo from './Logo'
import styles from "./sidenav.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Sidenav() {
    return (
        <div className={`col-2 sticky-top text-bg-primary vh-100 ${styles.sidebar}`}>
            <div className='d-flex justify-content-center p-3'><Logo /></div>
            <ul className='list-unstyled '>
                <hr />
                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect}`}>   <i className={`fas fa-tachometer-alt ${styles.iconpadding}`}></i>
                    Dashboard
                </li>
                <hr />
                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect} `}><i className={`fas fa-microphone-alt ${styles.iconpadding}`}></i>
                    Recordings </li>
                <hr />
                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect} `}>  <i className={`fas fa-cog mr-3 ${styles.iconpadding}`}></i>
                    Settings</li><hr />

                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect} `}>  <i className={`fas fa-info-circle ${styles.iconpadding}`}></i>
                    About Us</li>
                <hr />
            </ul>
        </div >
    )
}
