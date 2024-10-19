import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="loader mb-4"></div>
        <h1 className="text-2xl font-bold">Full-Fill</h1>
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
