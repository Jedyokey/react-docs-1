import React from 'react'
import { useState } from 'react';

const QuickStart = () => {
    const user = {
        name: "John Doe",
        imageUrl: "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",
        imageSize: 90,
    };

    const products = [
        {title: "Cabbage", isFruit: false, id: 1},
        {title: "Garlic", isFruit: false, id: 2},
        {title: "Apple", isFruit: true, id: 3},
    ];

    const listItems = products.map(product => 
        <li key={product.id} style={{color: product.isFruit ? "dodgerblue" : "darkgreen"}}>
            {product.title}
        </li> 
    );

    // Responding to events
    const handleClick = () => {
        alert("You clicked me!");
    }

  return (
    <div>
        <h1>Welcome to my react app</h1>
        <button>I am a button</button>

        <h2>{user.name}</h2>
        <img src={user.imageUrl} alt={"Photo of " + user.name} style={{width: user.imageSize, height: user.imageSize}} />
        
        {/* Rendering lists */}
        <ul>{listItems}</ul>

        {/* Responding to events */}
        <button onClick={handleClick}>Clicked me</button>

      
    </div>
  )
}

export default QuickStart
