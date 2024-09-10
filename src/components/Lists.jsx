import React from 'react'
import { people } from '../data'

const Lists = () => {
    const imageSize = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        margin: "10px"
    }

    const listItems = people.map(person => 
        <li key={person.id}>
            <img 
            src={person.image} 
            alt={person.name} 
            style={imageSize} />
            <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "} known for 
                {person.accomplishment}
            </p>
        </li>
    )

  return (
    <div>
        <article>
            <h1>Scientists - (Rendering Lists)</h1>
            <ul className='scientists'>{listItems}</ul>
        </article>
    </div>
  )
}

export default Lists
