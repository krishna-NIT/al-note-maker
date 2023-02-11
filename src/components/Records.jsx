import React from 'react'
import { useEffect } from "react";
import TableData from "./TableData";
function handleClick() {
    // write the funciton that will download the ppt and transcript files
}
function Records() {

    // get table column
    const column = Object.keys(TableData[0]);

    // get table heading data
    const ThData = () => {

        return column.map((data) => {
            return <th className='display-6' key={data}>{data}</th>
        })
    }

    // get table row data
    const tdData = () => {

        return TableData.map((data) => {
            return (

                <tr className='p-1 h3'>
                    {
                        column.map((v) => {
                            return <td>{data[v]}</td>
                        })
                    }
                    <td className='p-4'>
                        <button onClick={handleClick}>Original Text</button>
                        <button onClick={handleClick}>PPT</button>
                    </td>
                </tr>
            )
        })
    }


    return (

        <div className='col'>
            <div className='p-4 '>
                <table className="table table-hover ">
                    <thead>
                        <tr className='h3 bg-warning'>{ThData()}</tr>
                    </thead>
                    <tbody>
                        {tdData()}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
export default Records;