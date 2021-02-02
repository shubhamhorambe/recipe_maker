import React from 'react';
import "./recipe.css"
const Recipe = ({title,calories,img,ingredients}) => {

    return (

        <div>

            <div className="recipe">

        <h1 >{title}</h1>
        <ol>
            {ingredients.map(ingre =>(
                <li>{ingre.text}</li>
                            ))}
        </ol>
        <p>{calories}</p>
        <img src={img} alt="" />
        
        </div>
        </div>
    )
};

export default Recipe;