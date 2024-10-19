import Link from "next/link";
import React from "react";
import { FaHeart, FaShoppingCart, FaUtensils } from "react-icons/fa";
const MealDetails = ({ meal }) => {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = meal;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-4">{strMeal}</h3>
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-8 md:mb-0"
        />
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
            <strong>Category:</strong> {strCategory ? strCategory : "N/A"}
          </p>
          <p className="text-lg mb-4">
            <strong>Cuisine:</strong>{" "}
            {strArea ? (
              <span className="text-blue-400 underline">
                <Link href={`/cuisine/${strArea}`}>{strArea}</Link>
              </span>
            ) : (
              "N/A"
            )}
          </p>
          <h4 className="text-xl font-bold mb-4">How to make?</h4>
          <div className="max-h-96 overflow-y-auto rounded-lg bg-gray-100 p-4">
            <p className="text-md text-justify">{strInstructions}</p>
          </div>
          {strYoutube && (
            <div className="mt-8">
              <a
                href={strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Watch on YouTube
              </a>
            </div>
          )}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center hover:bg-yellow-700 transition duration-300 ease-in-out">
              <FaHeart className="mr-2" /> Add to Favorite
            </button>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center hover:bg-green-700 transition duration-300 ease-in-out">
              <FaShoppingCart className="mr-2" /> Order Now
            </button>
          </div>
          {/* <div className="mt-4 flex justify-around">
            <button className="bg-gray-200 text-black font-bold py-1 px-2 rounded-full flex items-center justify-center hover:bg-gray-400 transition duration-300 ease-in-out">
              <FaUtensils className="mr-1" /> Small
            </button>
            <button className="bg-gray-200 text-black font-bold py-1 px-2 rounded-full flex items-center justify-center hover:bg-gray-400 transition duration-300 ease-in-out">
              <FaUtensils className="mr-1" /> Medium
            </button>
            <button className="bg-gray-200 text-black font-bold py-1 px-2 rounded-full flex items-center justify-center hover:bg-gray-400 transition duration-300 ease-in-out">
              <FaUtensils className="mr-1" /> Large
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
