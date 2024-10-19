"use client";
import React, { useEffect, useState } from "react";
import MealDetails from "./MealDetails";

const SingleMeal = ({ mealName }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        );
        const data = await res.json();
        setMeals(data.meals);
        // console.log(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeal();
  }, [mealName]);

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meals</h2>
        {meals.map((meal) => (
          <MealDetails key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default SingleMeal;
