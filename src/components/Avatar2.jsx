import React from 'react'
import { getAnImage } from '../js_files/utils'

const Avatar2 = ({person, size}) => { 
  return (
    <div>
        <img
            className='avatar2' 
            src={getAnImage(person)} 
            alt={person.name} 
            width={size}
            height={size} 
        />
      
    </div>
  )
}

export default Avatar2
