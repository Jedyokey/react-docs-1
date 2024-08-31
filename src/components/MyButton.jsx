import React from 'react'
// import { useState } from 'react';

const MyButton = ({count, onClick}) => {
    // Updating the screen
    // const [count, setCount] = useState(0); 

    // Responding to events
    // const handleClick = () => {
    //     // alert("You clicked me!");
    //     setCount(count + 1);
    // }

  return (
    <div>
        {/* <button onClick={handleClick}>Clicked {count} times</button> */}
        {/* <button onClick={handleClick}>Clicked {count} times</button> */}
        <button onClick={onClick}>Clicked {count} times</button>
      
    </div>
  )
}

export default MyButton
