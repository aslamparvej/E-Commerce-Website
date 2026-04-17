import { Star } from "lucide-react";

const RatingStars = ({ rate, count }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={20}
          className={
            i <= Math.round(rate)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}

      <span className="text-gray-500 text-sm ml-2">({count})</span>
    </div>
  );
};

export default RatingStars;
