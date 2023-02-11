import React from 'react'

import Logo from './Logo'
import styles from "./sidenav.module.css"

export default function Sidenav() {
    return (
        <div className={`col-2 sticky-top text-bg-primary vh-100 ${styles.sidebar}`}>
            <div className='d-flex justify-content-center p-3'><Logo /></div>
            <ul className='list-unstyled '>
                <hr />
                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect}`}>Dashboard
                </li>
                <hr />
                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect} `}>Recordings </li>
                <hr />
                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect} `}>Settings</li><hr />

                <li class={`list-item mt-3 p-3 pb-0 fs-5 ${styles.hoveffect} `}>About Us</li>
                <hr />
            </ul>
        </div >
    )
}
