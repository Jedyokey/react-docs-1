import React from 'react'

const Condi = () => {
  return (
    <div>
        <section>
            <h2>Sally Ride's Packing List - (Conditional rendering 
            )</h2>
            <ul>
                <Item
                name="Space suit"
                isPacked={true} /> 
                <Item
                name="Helmet with a golden leaf"
                isPacked={true} />
                <Item
                name="Photo of Tam"
                isPacked={false} />
            </ul>
        </section>
      
    </div>
  )
}

export default Condi

const Item = ({name, isPacked}) => {
    return (
        <li> 
            {name} {isPacked && "✅"} 
        </li>
    )
}