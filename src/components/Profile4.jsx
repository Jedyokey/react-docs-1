import React from 'react'
import Avatar2 from './Avatar2'

const Card = ({children}) => {
    return (
        <div className='cards'>
            {children}
        </div>
    )
}

const Profile4 = () => {
  return (
    <div>
        <h2>Passing JSX as children</h2>
        <Card>
            <Avatar2 
                person={{
                    name: "John Doe",
                    imageId: "YfeOqp2"
                }}
                size={170}
            />
        </Card>
    </div>
  )
}

export default Profile4
