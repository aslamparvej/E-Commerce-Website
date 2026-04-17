import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="bg-black p-3 top-0 left-0 right-0">
      <p className="text-white text-center">
        Summer Sale For All gadgets And Free Express Delivery - OFF 30%!{" "}
        <Link to="/" className="underline">Shop Now</Link>
      </p>
    </div>
  );
};

export default Topbar;
