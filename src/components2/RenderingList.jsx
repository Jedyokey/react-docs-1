import React from 'react'
import { people2 } from '../js_files/data';
import { people3 } from '../js_files/data';
import { getImageUrl } from '../js_files/utils2';

const RenderingList = () => {
    const listItems = people2.map(person => 
        <li key={person}>{person}</li>
    );

    // Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':
    const chemists = people3.filter((person) => 
        person.profession === "chemist"
    );

    // Now map over chemists:
    const chemistItems = chemists.map(person => 
        <li className='chemist-list' key={person.id}>
            <img 
                src={getImageUrl(person)} 
                alt={person.name} 
            />
            <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
            </p>
        </li>
    )

    const peopleItems = people3.map(person => 
        <div key={person.id}>
            <li className='chemist-list'>
                <img 
                    src={getImageUrl(person)} 
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {" " + person.profession + " "} 
                    known for {person.accomplishment}
                </p>
            </li>
            
            {/* Displaying several DOM nodes for each list item  */}
            <h3>{person.profession}</h3>
        </div>
    )

  return (
    <div>
        <h3>Rendering data from arrays </h3>
        <ul>{listItems}</ul>

        <h3>Rendering data from arrays with filtering</h3>
        <ul className='chemist-main'>{chemistItems}</ul>

        <h3>Displaying several DOM nodes for each list item</h3>
        <ul className='chemist-main'>{peopleItems}</ul>
    </div>
  )
}

export default RenderingList
