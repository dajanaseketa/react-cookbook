import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { EmptyContent } from "../components/EmptyContent";
import getMeal from "../api/meal/getMeal";

const Meal = () => {
    let { id } = useParams();

    const [meal, setMeal] = useState();

    const [error, setError] = useState('');

    useEffect(() => {
        getMeal(id).then(result => {
            setMeal(result.meals[0]);
            setError('');
        }).catch(error => setError(error.message))
    }, [id]);

    if (error || !meal) {
       return <EmptyContent />; 
    }

    return (
        <div className="page-container">
            <img className="meal-cover-image" alt={meal.strMeal} src={meal.strMealThumb} />
            <h1 className="meal-title">{meal.strMeal}</h1>
            <div className="meal-info-container">
            </div>
        </div>
    )
}

export default Meal;
