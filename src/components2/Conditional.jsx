import React from 'react'

const Conditional = () => {
  return (
    <div>
        <section>
            <h1>Sally Ride's Packing List</h1>
            <h3>Conditional (ternary) operator (? :) </h3>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                    description="This is a space suit for your space adventure."
                />
                <Item
                    isPacked={false}
                    name="Sunglasses"
                    description="Protect your eyes from the sun and make your day look brighter."
                />
                <Item
                    isPacked={true}
                    name="First Aid Kit"
                    description="A complete first aid kit for any emergency situation."
                />
            </ul>
        </section>

        <section>
            <h3>Logical AND operator (&&)</h3>
            <ol className='second-list'>
                <Item2
                    isPacked={true}
                    name="Extra batteries"
                    description="For your devices that don't have built-in batteries."
                />
                <Item2
                    isPacked={true}
                    name="Flashlight"
                    description="A useful tool for nighttime exploration."
                />
                <Item2
                    isPacked={false}
                    name="Survival Guide"
                    description="A comprehensive guide for surviving in space."
                />
            </ol>
        </section>

        <section>
            <h3>Conditionally assigning JSX to a variable </h3>
            <ul className='third-list'>
                <Item3
                    isPacked={true}
                    name="Extra clothing"
                    description="For your space suit that doesn't come with clothing."
                />
                <Item3
                    isPacked={false}
                    name="Flashlight"
                    description="A useful tool for nighttime exploration."
                />
                <Item3
                    isPacked={false}
                    name="Survival Guide"
                    description="A comprehensive guide for surviving in space."
                />
            </ul>
        </section>
    </div>
  )
}

export default Conditional


const Item = ({isPacked, name, description}) => {
    // if (isPacked) {
    //     // return null
    //     return  <li className='new-item'><b>{name}: {description}</b> ✅</li>
    // } 

    return (
        <div>
            {/* <li className='new-item'>{name}: {description}</li> */}

            {/* <li className='new-item'>
                {isPacked ? name + ": " + description + " ✅" : description}
            </li> */}

            {/* <li className='new-item'>
                {isPacked? <b>{name}: {description + " ✅"}</b> : <i>{description}</i>}
            </li> */}

            {/* <li className='new-item'> 
                {isPacked ? (
                    <del>
                        {name + ": " + description + " ✅"}
                    </del>
                ) : (
                    <b>
                        {name + " " + description}
                    </b>
                )}
            </li> */}

            <li className='new-item'>
                <strong>{name + ": "}</strong>
                {isPacked ? (
                    <span>{description + " ✅"}</span>
                ) : (
                    <i>{description + " ❌"}</i>
                )}
            </li>
        </div>
    )
}

const Item2 = ({isPacked, name, description}) => {
    return (
        <div>
            <li className='new-item2'> 
                {name} 
                {isPacked && " ✅"} 
                {!isPacked && " ❌"}
            </li>
        </div>
    )
}

const Item3 = ({isPacked, name, description}) => {
    let itemContent = name;
    let itemDescription = description;

    if (isPacked) {
        itemContent = (
            <span>
               <b>{name + ": "}</b>
               {itemDescription + " ✅"} 
            </span>  
        )
    } else {
        // itemContent +=  ": " + description + " ��";
        itemContent = (
            <del>
                <b>{name + ": "}</b>
                { itemDescription + " ��"}
            </del>
        )
    } 

    return (
        <div>
            <li className='new-item3'>
                {itemContent}
            </li>
        </div>
    )
}