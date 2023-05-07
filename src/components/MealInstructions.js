import {useEffect, useState} from "react";

const MealInstructions = ({meal}) => {
    const [mealInstructions, setMealInstructions] = useState('');

    useEffect(() => {
        if(meal) {
            setMealInstructions(meal.strInstructions);
        } else {
            setMealInstructions('');
        }
    }, [meal]);

    return (
        <div className="instructions-container">
            <h2>Instructions</h2>
            {mealInstructions}
        </div>
    );
}

export default MealInstructions;
  