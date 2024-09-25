// import React from 'react'
import * as React from 'react'
// import quotes from '../js_files/quotes'
import inspirations from '../js_files/inspirations'
import FancyText from './FancyText'
import Color from './Color'

const InspiratorGenerator = ({children}) => {
    const [index, setIndex] = React.useState(0)
    // const quote = quotes[index]
    const inspiration = inspirations[index]
    const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <div>
        <p>Your inspirational {inspiration.type} is:</p>
        {/* <FancyText text={quote} /> */} 
        {inspiration.type === "quote" ? (  
            <FancyText text={inspiration.value} />
        ) : (
            <Color value={inspiration.value} /> 
        )}
         
        <button onClick={next}>Inspire me again</button> 
        {children} 
    </div>
  )
}

export default InspiratorGenerator
