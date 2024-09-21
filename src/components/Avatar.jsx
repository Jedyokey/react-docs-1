import React from 'react'
import getImageUrl from '../js_files/utils'

const Avatar = ({person, size}) => {
  return ( 
    <div>
        <img 
        className='avatar' 
        src={getImageUrl()} 
        alt={person.name}
        width={size}
        height={size} />
      
    </div>
  )
}

export default Avatar
