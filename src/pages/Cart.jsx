import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Minus, Plus } from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [discount, setDiscount] = useState(0);
  const couponInputRef = useRef(null);
  const couponErrorRef = useRef(null);
  const shipping = 5.00;

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subTotal - discount + shipping;
  
  const couponCodes = {
    "SAVE10": 0.10, // 10% discount
    "SAVE20": 0.20, // 20% discount
    "SUMMER2026": 0.30, // 30% discount
    "FREESHIP": 0.00 // Free shipping (no discount on total)
  };

  const handleOnChangeCoupon = (e) => {
    setCouponCode(e.target.value);
    setCouponError("");
    couponInputRef.current.classList.remove("border-red-500");
  }

  const handleApplyCoupon = (e) => {
    e.preventDefault();

    // Validation logic
    if (couponCode.trim() === "") {
      couponInputRef.current.focus();
      couponInputRef.current.classList.add("border-red-500");
      setCouponError("Please enter a coupon code.");
      setDiscount(0);
      couponErrorRef.current.classList.add("text-red-500");
      couponErrorRef.current.classList.remove("text-green-500");
      return;
    }

    // Check if coupon code is valid
    if (!couponCodes[couponCode]) {
      couponInputRef.current.focus();
      couponInputRef.current.classList.add("border-red-500");
      setCouponError("Invalid coupon code.");
      setDiscount(0);
      couponErrorRef.current.classList.add("text-red-500");
      couponErrorRef.current.classList.remove("text-green-500");
      return;
    }

      // If valid, apply the discount
      const discountPercentage = couponCodes[couponCode];
      const discountAmount = subTotal * discountPercentage;
      setDiscount(discountAmount);
      setCouponError(`Coupon applied! You saved $${discountAmount.toFixed(2)}.`);
      couponErrorRef.current.classList.remove("text-red-500");
      couponErrorRef.current.classList.add("text-green-500");
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="py-8">
        <p className="text-sm ">
          <Link to="/" className="text-gray-500 hover:underline">
            Home
          </Link>{" "}
          <span className="text-primary font-medium">/ Cart</span>
        </p>
      </div>

      <div>
        {/* Item List Header */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div
              className="bg-white mb-12"
              style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
            >
              <div className="grid grid-cols-4 gap-4 p-4 text-primary font-medium uppercase rounded-md">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p className="text-end">Total</p>
              </div>
            </div>

            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div
                    className="bg-white mb-6 p-4 grid grid-cols-4 gap-4"
                    style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-10 h-auto"
                        src={item.image}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                    <p>${item.price.toFixed(2)}</p>
                    <div>
                      <button className="w-8 h-8 inline-flex items-center justify-center bg-transparent border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100">
                        <Minus size={16} />
                      </button>
                      <span className="mx-3 text-lg font-medium">{item.quantity}</span>
                      <button className="w-8 h-8 inline-flex items-center justify-center bg-transparent border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100">
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-medium text-end">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-16 gap-8 sm:flex-row flex-col">
              {/* Coupon Code Apply Section */}
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <input
                    ref={couponInputRef}
                    type="text"
                    className="py-2 px-3 border border-gray-300 rounded-md focus:border-primary focus:outline-none"
                    value={couponCode}
                    onChange={handleOnChangeCoupon}
                    placeholder="Coupon Code"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:navy-700"
                  >
                    Apply
                  </button>
                </div>
                <p ref={couponErrorRef} className="text-sm mt-1 text-red-500">{couponError}</p>
              </div>

              {/* Sub Total section */}
              <div className="flex-1 bg-white p-6 rounded-md border border-gray-300">
                <div className="flex justify-between mb-2">
                  <p className="text-gray-500">Subtotal</p>
                  <p className="font-medium">${subTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-500">Discount</p>
                  <p className="font-medium text-green-500">
                    -${discount.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-500">Shipping</p>
                  <p className="font-medium">${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
