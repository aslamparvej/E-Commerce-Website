import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const stars = [];

  console.log(product);
  return (
    <div className="">
      <div className="h-90 p-4 bg-gray-100">
        <img
          className="h-full w-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>
      <h2 className="text-lg font-medium truncate">{product.title}</h2>
      <div className="flex items-center justify-between mt-2">
        <p className="text-lg font-semibold">${product.price}</p>
        <div>
          <RatingStars rate={product.rating.rate} count={product.rating.count} />
        </div>
      </div>
      <button
        className="w-full px-4 py-3 mt-4 bg-primary text-white cursor-pointer rounded-lg hover:bg-navy-700"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
