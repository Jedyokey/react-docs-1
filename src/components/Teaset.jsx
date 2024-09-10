import React from 'react'

const Teaset = () => {
  return (
    <div>
        <h1>Tea Set</h1>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />   
    </div>
  )
}

export default Teaset

const Cup = ({guest}) => {
    return <h2>Tea cup for guest #{guest}</h2>
}