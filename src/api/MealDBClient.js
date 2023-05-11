import axios from "axios";

export const MealDBClient = axios.create({baseURL: "https://www.themealdb.com/api/json/v1/1"});
