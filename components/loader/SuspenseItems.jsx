import React from "react";

const SuspenseItems = () => {
  return (
    <div id="meals" className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 animate-pulse bg-gray-300 h-10 w-1/3 mx-auto"></h2>
          <p className="text-lg text-gray-700 animate-pulse bg-gray-300 h-6 w-2/3 mx-auto"></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
              <div className="p-4 flex flex-col items-center">
                <div className="h-6 bg-gray-300 animate-pulse w-3/4 mb-2"></div>
                <div className="mt-4 w-full bg-blue-500 h-10 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuspenseItems;
