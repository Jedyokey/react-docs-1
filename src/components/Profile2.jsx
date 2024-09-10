import React from 'react'
// import getImageUrl from '../utils'
import Card from './Card'
import Avatar from './Avatar'

const Profile2 = () => {
  return (
    <div>
        <Card>
            <Avatar 
            size={100} 
            person={{
                name: "Jackson Jones",
                imageId: "YfeOqp"
            }} />
        </Card>
      
    </div>
  )
}

export default Profile2
