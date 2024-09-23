import React from 'react'
import Panel from './Panel'
import { getImageUrl } from '../js_files/utils2'

const Profile = ({person}) => {
  return (
    <div>
        <Panel>
            <Header person={person} />
            <Avatar person={person} />
        </Panel>
    </div>
  )
}

export default Profile


const Header = ({person}) => {
    return (
        <div>
            <h1>{person.name}</h1>
            <h3>Age: {person.age}</h3>
            <h3>Email: {person.email}</h3>
        </div>
    )
}

const Avatar = ({person}) => {
    return (
        <img 
            className='practice-avatar'
            src={getImageUrl(person)}  
            alt={person.name} 
            width={80} 
            height={80} 
        />
    )
}