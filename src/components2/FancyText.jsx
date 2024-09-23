import React from 'react'

const FancyText = ({title, text}) => {
  return (
    <div>
        {
            title ? <h1 className='fancy title'>{text}</h1> : 
                    <h3 className='fancy cursive'>{text}</h3>
        }
    </div>
  )
}

export default FancyText
