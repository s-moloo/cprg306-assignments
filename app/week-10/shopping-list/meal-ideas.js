"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient)
                .then(setMeals)
                .catch((err) => setError(err.message));
        }
    }, [ingredient]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.meals || [];
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-2">Meal Ideas</h2>
            {error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : meals.length === 0 ? (
                <p>Select an item to see meal ideas</p>
            ) : (
                <div>
                    <p>Here are some meal ideas using {ingredient}:</p>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal} className="mb-1">{meal.strMeal}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
