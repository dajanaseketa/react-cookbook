import { Link } from "react-router-dom";

const MealRow = ({meal, onMealSelect}) => {
    return (
        <Link to={`/${meal.idMeal}`} target="_blank">
            <div className='row'>
                <div className='field small-field'>
                    <img alt={meal.strMeal} className="meal-image" src={meal.strMealThumb} />
                </div>
                <div className='field large-field'>
                    {meal.strMeal}
                </div>
                <div className='field large-field'>
                    {meal.strCategory}
                </div>
                <div className='field large-field'>
                    {meal.strArea}
                </div>
            </div>
        </Link>
    )
}

export default MealRow;
