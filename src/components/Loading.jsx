import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg animate-pulse">
      
      {/* Image */}
      <div className="w-full h-40 bg-gray-300 rounded"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>

      {/* Price */}
      <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>

      {/* Button */}
      <div className="h-8 bg-gray-300 rounded mt-4 w-full"></div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>

    </div>
  )
}

export default Loading;
