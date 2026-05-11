import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CheckoutForm from "../components/CheckoutForm";

const billingDetailsField = [
  {
    label: "Full Name",
    name: "fullName",
    isRequired: true,
    type: "text",
  },
  {
    label: "Street Address",
    name: "streetAddress",
    isRequired: true,
    type: "textarea",
  },
  {
    label: "Apartment, floor, etc. (optional)",
    name: "apartment",
    isRequired: false,
    type: "textarea",
  },
  {
    label: "Town/City",
    name: "townCity",
    isRequired: true,
    type: "textarea",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    isRequired: true,
    type: "tel",
  },
  {
    label: "Email Address",
    name: "emailAddress",
    isRequired: true,
    type: "type",
  },
];

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [formData, setFormData] = useState({
    fullName: "",
    streetAddress: "",
    apartment: "", // Optional field
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const isValid = () => {
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) {
    }

    console.log("Form Data:", formData); // Example: Log or send to API
    // Add validation, API calls, etc., here
  };

  console.log(cartItems);

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
          <span className="text-primary font-medium">/ Checkout</span>
        </p>
      </div>

      {/* Billing Details */}
      <div>
        <h2 className="text-black text-4xl font-medium">Billing Details</h2>

        <div className="grid grid-cols-2 gap-20">
          {/* Checkout Form */}

          {/* Checkout Details */}
          <CheckoutForm
            formData={formData}
            setFormData={setFormData}
            billingDetailsField={billingDetailsField}
          />

          <div>
            {/* Item List  */}
            {cartItems.map((item)=>(
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="px-4 py-3 bg-primary rounded-sm hover:bg-navy-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
