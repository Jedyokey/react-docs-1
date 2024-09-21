import React from "react";
import { recipes } from "../js_files/data";

// Nested lists in one component 
// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

const ListPractice2 = () => {

    return (
        <div>
            <h1>Nested Lists</h1>
            <h2>Recipe List</h2>
            <ol>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <ul style={{listStyle: "outside"}}>  
                            {recipe.ingredients.map((ingredient, index) => (
                                // <li key={index}>{ingredient}</li>
                                <li key={`${recipe.id}-${index}`}>
                                    {ingredient}
                                </li> 
                            ))}
                        </ul>
                    </li>
                ))}
            </ol> 
        </div>
    )
}

export default ListPractice2;