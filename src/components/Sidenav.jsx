import React from 'react'
import styles from './sidenav.module.css'
import logo from './logo.png'
import Logo from './Logo'

export default function Sidenav() {
    return (
        <div className="col-2 sticky-top text-bg-primary vh-100 ">
            <div className='d-flex justify-content-center p-4'><Logo/></div>
            <ul className='list-group'>
                <li class="list-item fs-5">An item</li>
                <hr />
                <li class="list-item fs-5">A second item</li>
                <hr />
                <li class="list-item fs-5">A third item</li>
                <hr />
                <li class="list-item fs-5">A fourth item</li>
                <hr />
                <li class="list-item fs-5">And a fifth one</li>
            </ul>
        </div >
    )
}
