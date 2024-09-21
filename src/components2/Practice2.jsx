import React from "react";
import { people3 } from "../js_files/data";
import { getImageUrl } from "../js_files/utils2";
// Splitting a list in two 

const List = () => {
    const chemist = people3.filter(person => 
        person.profession === "chemist"
    )
    const chemistList = chemist.map(person => 
        <div> 
            {/* Create a list item for each chemist in the people array */}
            <li key={person.id} className='chemist-list'>
                <img 
                    src={getImageUrl(person)} 
                    alt={person.name} 
                />
                <p>
                    <b>{person.name}:</b>
                    {" " + person.profession + " "}
                    known for {" " + person.accomplishment + " "}
                </p>
            </li>

            <li></li>
        </div>
    )

    const everyoneElse = people3.filter(person => 
        person.profession !== "chemist"
    )
    const chemistItems = everyoneElse.map(person => 
        <div>
            <li key={person.id} className='chemist-list'>
                <img 
                    src={getImageUrl(person)} 
                    alt={person.name} 
                />
                <p>
                    <b>{person.name}:</b>
                    {" " + person.profession + " "}
                    known for {" " + person.accomplishment + " "}
                </p>
            </li>
        </div>
    )

    return (
        <div>
            <h1>List of Scientists</h1>
            
            <div> 
                <h2>Chemists</h2>
                <ul className='chemist-main'>{chemistList}</ul>
            </div>
            
            <div> 
                <h2>Everyone else</h2>
                <ul className='chemist-main'>{chemistItems}</ul>
            </div>
        </div>
    )
}

export default List


// function ListSection({ title, people }) {
//     return (
//       <>
//         <h2>{title}</h2>
//         <ul>
//           {people.map(person =>
//             <li key={person.id}>
//               <img
//                 src={getImageUrl(person)}
//                 alt={person.name}
//               />
//               <p>
//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}
//                 known for {person.accomplishment}
//               </p>
//             </li>
//           )}
//         </ul>
//       </>
//     );
//   }