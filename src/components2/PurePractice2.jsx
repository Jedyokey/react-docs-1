import React from 'react'
import Profile from './Profile'

const PurePractice2 = () => {
  return (
    <div className='profile-flex'>
        <Profile 
            person={{
                name: 'Subrahmanyan Chandrasekhar',
                imageId: 'lrWQx8l',
                age: 54,
                email: "subchandra80@gmail.com"
            }}
        />

        <Profile 
            person={{
                name: 'Creola Katherine Johnson',
                imageId: 'MK3eW3A',
                age: 67,
                email: "katherinejohnson@gmail.com"
            }}
        />
        {/* Add more profiles as needed */}
      
    </div>
  )
}

export default PurePractice2
