import React from 'react'

const Profile = () => {
    const person = {
        name: "Samuel",
        age: 30,
        occupation: "Software Engineer",
        fontSize: "25px",
        theme: {
            color: "#A0522D",
            backgroundColor: "#FFE4E1",
            margin: "20px -10px",
            padding: "8px 13px"
        } 
    }

  return (
    <div>
        <section style={person.theme}>
            <h1 style={{fontSize: person.fontSize}}>{person.name} Todos</h1> 
            <img src="https://i.pinimg.com/236x/c1/1e/9d/c11e9d4e50756879b0bad390e6f57067.jpg" 
            alt="Samuel's Pic" /> 

            <ul>
                <li>Improve the videophone</li>
                <li>Prepare coding lectures</li>
                <li>Finish existing software projects</li>
            </ul>
      </section>
      
    </div>
  )
}

export default Profile
