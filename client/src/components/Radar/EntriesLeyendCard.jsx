import React from 'react'

export const EntriesLeyendCard = ({ text, color, info }) => {
    return (
        <div className='scienseQLeyendInfo'>
            <span style={{ color: color, fontWeight: "bolder", fontStyle: "italic", fontFamily: "Calibri", fontSize: "19px" }}>{text}</span>
            <ol>
                <li>a1</li>
                <li>b1</li>
                <li>c1</li>
                <li>d1</li>
                <li>e1</li>
            </ol>
        </div>
    )
}
