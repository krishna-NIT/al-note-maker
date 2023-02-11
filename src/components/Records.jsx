import React from 'react'
import styles from './record.module.css'
import { useEffect } from "react";
import TableData from "./TableData";
function handleClick(){
    // write the funciton that will download the ppt and transcript files
}
function Records(){

// get table column
 const column = Object.keys(TableData[0]);

 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }

// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
       
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
                <button onClick={handleClick}>Original Text</button>
                <button onClick={handleClick}>PPT</button>
           </tr>
       )
     })
}


  return (
      <table className={styles.table}>
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )
}
export default Records;