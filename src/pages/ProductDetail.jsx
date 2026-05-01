import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import {
  increaseCartQuantity,
  decreaseCartQuantity,
} from "../features/cart/cartSlice";
import RatingStars from "../components/UI/RatingStars";
import ProductCard from "../components/UI/ProductCard";
import { RefreshCcw, Truck, Plus, Minus } from "lucide-react";

const sizes = ["XS", "S", "M", "L", "XL"];

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === parseInt(id)),
  );
  const [activeSize, setActiveSize] = useState("M");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <div>Loading...</div>;

  const product = items.find((item) => item.id === parseInt(id));
  const relatedItem = items.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="px-6 lg:px-0">
      {/* Breadcrumbs */}
      <div className="py-8">
        <p className="text-sm ">
          <Link to="/" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/products" className="text-gray-500 hover:underline">
            Products
          </Link>{" "}
          <span className="text-primary font-medium">/ {product.title}</span>
        </p>
      </div>

      {/* Product Details  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 my-8 lg:my-16">
        {/* Images */}
        <div className="grid grid-cols-4 col-span-2 lg:col-span-2 gap-4 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 col-span-1">
            <div className="bg-[#F5F5F5] rounded-sm cursor-pointer w-full h-35 flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-[#F5F5F5] rounded-sm cursor-pointer w-full h-35"></div>
            <div className="bg-[#F5F5F5] rounded-sm cursor-pointer w-full h-35"></div>
            <div className="bg-[#F5F5F5] rounded-sm cursor-pointer w-full h-35"></div>
          </div>
          <div className="flex items-center justify-center p-6 bg-[#F5F5F5] rounded-sm col-span-3">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        {/* Details  */}
        <div className="col-span-1">
          <div>
            <h2 className="text-black text-2xl font-semibold">
              {product.title}
            </h2>
            {/* Product Review  */}
            <div className="flex gap-3 my-2">
              <RatingStars
                rate={product.rating.rate}
                count={product.rating.count}
              />{" "}
              | <span className="text-green-400">In Stock</span>
            </div>
            <p className="text-black text-2xl mb-6">${product.price}</p>
            <p className="text-black text-sm">{product.description}</p>
          </div>

          <hr className="my-4" />

          <div>
            <div className="flex gap-2">
              <p>Colours:</p>
              <div className="flex gap-1">
                {/* <input type="radio" name="color" />
                    <input type="radio" name="color" /> */}
                N/A
              </div>
            </div>

            <div className="flex gap-2 items-center my-4">
              <p>Size:</p>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <span
                    key={s}
                    className={`w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm text-xs cursor-pointer transition-all duration-75  ${activeSize == s ? "bg-primary text-white" : ""}`}
                    onClick={() => setActiveSize(s)}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 flex">
                <span
                  onClick={() => dispatch(decreaseCartQuantity(product.id))}
                  className="flex-1 flex items-center justify-center border border-gray-300 rounded-tl rounded-bl hover:bg-navy-700 hover:text-white cursor-pointer"
                >
                  <Minus size={16} />
                </span>
                <span className="flex-2 flex items-center justify-center border-y border-gray-300">
                  {cartItem?.quantity || 0}
                </span>
                <span
                  onClick={() => dispatch(increaseCartQuantity(product))}
                  className="flex-1 flex items-center justify-center border border-primary rounded-tr rounded-br bg-primary text-white hover:bg-navy-700 cursor-pointer"
                >
                  <Plus size={16} />
                </span>
              </div>
              <button className="flex-1 bg-primary text-white py-2 px-4 rounded-sm hover:bg-navy-700 transition-colors duration-75">
                Buy Now
              </button>
            </div>
          </div>

          <div className="border border-gray-300 rounded-sm">
            <div className="flex gap-4 items-center p-4 border-b border-gray-300">
              <div>
                <Truck size={32} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-medium">Free Delivery</h3>
                <Link className="text-xs font-medium underline">
                  Enter your postal code for Delivery Availability
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4">
              <div>
                <RefreshCcw size={32} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-medium">Return Delivery</h3>
                <p className="text-xs font-medium">
                  Free 30 Days Delivery Returns.{" "}
                  <Link className="underline">Details</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items  */}
      <div>
        <h2 className="text-[16px] font-semibold">Related Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 py-8">
          {relatedItem.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
