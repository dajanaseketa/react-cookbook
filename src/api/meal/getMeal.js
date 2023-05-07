import { MealDBClient } from "../MealDBClient";

const getMeal = async (id) => {
    const response = await MealDBClient.get(`/lookup.php?i=${id}`);
    return response.data;
}

export default getMeal;
