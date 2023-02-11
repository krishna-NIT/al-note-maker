import React from "react";
import Sound_visual from './ReactMicModule';
// import Sidenav from './Sidenav'
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className={`p-4 ${styles.previewCont}`}></div>
        <div className="row d-flex mt-3 ">
          <div className={`col-6 p-0`}><Sound_visual /></div>
          <div className="col-6">
            <div class={styles.btn_group}>
              <button>button 1</button>
              <button>button 2</button>
              <button>button 3</button>
              <button>button 4</button>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
