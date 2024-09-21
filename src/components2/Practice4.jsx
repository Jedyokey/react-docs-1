import React from "react";
import { recipes } from "../js_files/data";

// Extracting a list item component 
// This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?

const RecipeList = () => {
    return (
        <div>
            <h1>Nested Lists (Extracting a list item component )</h1>
            <h2>My Recipe List</h2>

               <ol>
                    {recipes.map(recipe => 
                        <Recipe 
                            key={recipe.id} 
                            id={recipe.id}  
                            name={recipe.name}
                            ingredients={recipe.ingredients} 
                        /> 
                        // <Recipe {...recipe} key={recipe.id}
                    )}
               </ol>
            
            
            {/* Why do we need an outer key here? */}
            {/* The outer key is used to uniquely identify each list item in a React list. Without an outer key, React may not update the DOM correctly. */}
        </div>
    )
}

export default RecipeList;

// Ask ChatGPT tomorrow
const Recipe = ({id, name, ingredients,}) => { 
    return (
        <div>
            {/* Recipe component should be here */}
                <li>
                    <h2>{name}</h2>
                    <ul style={{listStyle: "outside"}}>  
                        {ingredients.map((ingredient, index) => (
                            // <li key={index}>{ingredient}</li>
                            <li key={`${id}-${index}`}>
                                {ingredient}
                            </li> 
                        ))} 
                    </ul>
                </li>
        </div>
    )
}
