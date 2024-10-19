"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SuspenseItems from "../loader/SuspenseItems";

const CuisineItems = ({ item }) => {
  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCuisine = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${item}`
        );
        const data = await res.json();
        setTimeout(() => {
          setCuisine(data.meals);
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCuisine();
  }, [item]);
  return (
    <>
      {isLoading ? (
        <SuspenseItems />
      ) : (
        <div id="meals" className="py-20 bg-gray-100 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
              {item} Cuisine
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cuisine.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-2">{meal.strMeal}</h3>
                    <Link
                      href={`/meal/${meal.strMeal}`}
                      className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-center"
                    >
                      view more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CuisineItems;
