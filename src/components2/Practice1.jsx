import React from "react";


// Conditional Rendering Practice
const DrinkList = () => {
    return (
        <div>
            <h1>Drink List</h1>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    )
}

export default DrinkList 


const Drink = ({name}) => { 
    let part, caffeine, age;

    if (name === "tea") {
        part = "leaf";
        caffeine = "15–70 mg/cup"; 
        age = "4,000+ years";
    } else if (name === "coffee") {
        part = "bean";
        caffeine = "80–95 mg/cup";
        age = "1,000+ years";
    }

    return (
        <div>
            <h2>{name}</h2>
            <dl>
                <dt>Part of plant</dt>
                <dd>{part}</dd>
                <dt>Caffeine content</dt>
                <dd>{caffeine}</dd>
                <dt>Age</dt>
                <dd>{age}</dd>
            </dl>
        </div>
    )
}