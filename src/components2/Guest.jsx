import React from 'react'

const Guest = () => {
    let cups = [];
    for (let i = 1; i <= 5; i++) {
        cups.push(
            <Cup key={i} myguest={i} />
        )
    } 
    return cups;
}

export default Guest


const Cup = ({myguest}) => {
    return <h3>Tea cup for guest #{myguest}</h3>
}