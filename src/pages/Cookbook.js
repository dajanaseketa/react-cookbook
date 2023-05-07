import { useEffect, useState } from "react";
import getMealsByFirstLetter from "../api/meals/getMealsByFirstLetter";
import LetterPicker from "../components/LetterPicker";
import MealRow from "../components/MealRow";
import Header from "../components/Header";

const Cookbook = () => {
    const [selectedLetter, setSelectedLetter] = useState('a');

    const [meals, setMeals] = useState([]);

    const [error, setError] = useState('');

    useEffect(() => {
        getMealsByFirstLetter(selectedLetter).then(result => {
            setMeals(result.meals);
            setError('');
        }).catch(error => setError(error.message))
    }, [selectedLetter]);

    if (error) {
        return <h1>Oops! Something went wrong while fetching recipes. Please try again.</h1>
    }

    return (
        <div className='page-container'>
            <LetterPicker selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter} />
            <Header/>
            {meals.map(meal => <MealRow meal={meal} key={meal.idMeal} />)}
        </div>
    )
}

export default Cookbook;
