import React from "react";
import { FaPizzaSlice, FaCocktail } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen p-4 md:p-10">
      <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Full-Fill
        </h1>
        <p className="text-md md:text-lg mb-6">
          Delivering your favorite meals and cocktails right to your doorstep.
        </p>
        <p className="text-md md:text-lg mb-6">
          Enjoy delicious dishes and refreshing drinks from our top-rated
          restaurant.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <FaPizzaSlice size={48} className="text-yellow-500" />
          <FaCocktail size={48} className="text-blue-500" />
          <MdDeliveryDining size={48} className="text-green-500" />
        </div>
        <button className="bg-red-500 hover:bg-red-700 font-bold text-white py-2 px-4 rounded-full transition duration-300 ease-in-out">
          Order Now
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:w-1/2 justify-around items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0">
        <img
          src="https://placehold.co/600x600"
          alt="Food"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://placehold.co/600x600"
          alt="Cocktail"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
