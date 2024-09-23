import React from 'react'
import InspiratorGenerator from '../components2/InspiratorGenerator'
import FancyText from '../components2/FancyText'
import Copyright from './Copyright'

const YourUI = () => {
  return (
    <div>
        <FancyText title text="Get Inspired App" />
        <InspiratorGenerator>
            <Copyright year={2024} />
        </InspiratorGenerator>
      
    </div>
  )
}

export default YourUI
