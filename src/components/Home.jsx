import React from "react";
import Sound_visual from './ReactMicModule';

// import Sidenav from './Sidenav'
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className={`p-4 ${styles.previewCont}`} />
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center py-3 w-100">
          <button className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-skip-start" viewBox="0 0 16 16">
            <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
          </svg></button>
          <button className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-skip-start" viewBox="0 0 16 16">
            <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
          </svg></button>
          <button className="btn btn-outline-info"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-skip-start" viewBox="0 0 16 16">
            <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
          </svg></button>
        </div>
      </div>

      <Sound_visual />
    </div>
  );
}
