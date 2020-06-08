import React,{useState} from 'react'
import RecipeDetails from "./RecipeDetails"
import NutrientDetails from "./NutrientDetails"

const Recipe = ({recipe}) => {

    const [show,setShow] = useState(false)
    const [nutriShow, setNutriShow] = useState(false)
    const {label,image,url,ingredients,totalNutrients} = recipe.recipe;

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <div></div>
            <a href={url} target = "_blank" rel="noopener noreferrer">
                Checkout the recipe
            </a>
            <button onClick = {() => setShow(!show)}>
                Ingredients
            </button>
    {show && <RecipeDetails  ingredients = {ingredients}/> }
    <button onClick = {() => setNutriShow(!nutriShow)}>
                Nutrition
            </button>
            {nutriShow && <NutrientDetails nutrients = {totalNutrients}/>}
        </div>
    );
}

export default Recipe;
