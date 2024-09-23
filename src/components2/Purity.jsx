import React from 'react'

const Purity = () => {
  return (
    <div>
        <section> 
            <h2>Spiced Chai Recipe</h2>  
            <h2>For two</h2>  
            <Recipe drinkers={2} />    
            <h3>For a gathering</h3>     
            <Recipe drinkers={4} />  
        </section>

        <h1>Side Effects: (un)intended consequences </h1>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
    </div>
  )
}

export default Purity

const Recipe = ({drinkers}) => {
    return (
        <div> 
            <ol>
                <li>Boil {drinkers} cups of water</li> 
                <li>
                    Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
                </li> 
                <li>
                    Add {0.5 * drinkers} cups of milk to boil and sugar to taste.
                </li> 
            </ol>
        </div>
    )
}

const Cup = ({guest}) => {
    return (
        <div>
            <h2>Tea cup for guest #{guest}</h2>
        </div>
    )
}