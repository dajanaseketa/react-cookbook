import { MealDBClient } from "../MealDBClient";

const getMealsByFirstLetter = async (firstLetter) => {
    const response = await MealDBClient.get(`/search.php?f=${firstLetter}`);
    return response.data;
}

export default getMealsByFirstLetter;
