import React from "react";
import Sound_visual from './ReactMicModule';
// import Sidenav from './Sidenav'
import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.previewCont}></div>
        <div className={styles.action_container}>
          <div className={styles.audio}><Sound_visual /></div>
          <div className={styles.action}>
            <div class={styles.btn_group}>
              <button>button 1</button>
              <button>button 2</button>
              <button>button 3</button>
              <button>button 4</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
