import {useEffect, useState} from "react";

const IngredientsList = ({meal}) => {
    const [ingredientsList, setIngredientsList] = useState([]);

    useEffect(() => {
        if(meal) {
            setIngredientsList(extractIngredients(meal));
        } else {
            setIngredientsList([]);
        }
    }, [meal]);

    return (
        <div className="ingredients-container">
            <div className="ingredients-container-header">
                <h2>Ingredients</h2>
                <img className="copy-to-clipboard-icon" src="copy-to-clipboard-icon.png" alt="copy to clipboard" onClick={() =>  navigator.clipboard.writeText(ingredientsList)} />
            </div>
            <ul className="ingredients-list">
                {ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
        </div>
    );
}

export default IngredientsList;

function extractIngredients(meal) {
    const ingredients = [];

    // Loop over the ingredient properties in the response
    for (let i = 1; i <= 20; i++) {
      const ingredientName = meal[`strIngredient${i}`];
      const ingredientMeasure = meal[`strMeasure${i}`];

      // If the ingredient name exists, add it to the list
      if (ingredientName) {
        ingredients.push(`${ingredientMeasure} ${ingredientName}`);
      }
    }

    return ingredients;
  }
  