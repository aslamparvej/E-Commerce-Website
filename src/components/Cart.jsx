import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { ShoppingCart, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartRef = useRef(null);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shippingCost = 5.0;

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  console.log(cartItems);

  return (
    <div className="relative" ref={cartRef}>
      <span
        className="relative flex items-center justify-center p-2 cursor-pointer rounded-full hover:bg-gray-200"
        onClick={toggleCart}
      >
        <ShoppingCart size={20} />
        <span className="w-5 h-5 flex items-center justify-center absolute -top-2 right-0 bg-primary rounded-full text-white text-xs">
          {cartItems.length}
        </span>
      </span>

      {isCartOpen && (
        <div className="min-w-80 p-4 rounded-md absolute top-14 right-0 bg-white shadow-2xl">
          {cartItems.length === 0 ? (
            <div className="flex flex-col gap-2 items-center justify-center">
              <ShoppingCart />
              <p className="text-gray-500 text-sm text-center">
                Your cart is empty
                <br />
                Start adding some products!
              </p>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-8 border-b border-gray-200 py-2">
                  <div className="flex items-center gap-2">
                    <img className="w-10 h-auto" src={item.image} alt={item.title} />
                    <p className="truncate w-40" title={item.title}>{item.title}</p>
                    <p className="w-6 h-6 flex items-center justify-center rounded-full p-1 bg-gray-200 text-black font-medium">{item.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(item.id))} className="cursor-pointer">
                      <Trash size={16}/>
                    </button>
                  </div>
                  <p>{item.quantity * item.price }</p>
                </div>
              ))}

              <div className="my-8">
                <div className="flex justify-between items-center">
                  <p className="text-sm">Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm">Shipping</p>
                  <p>${shippingCost}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold uppercase">Total</p>
                  <p className="font-semibold">
                    ${(total + shippingCost).toFixed(2)}
                  </p>
                </div>
              </div>

              <Link to="/cart">
                <button className="w-full px-4 py-3 rounded-lg bg-primary text-white cursor-pointer hover:bg-navy-700">
                  Go to Cart
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
