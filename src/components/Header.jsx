import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white p-4 border-b-[0.5px] border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-black font-bold text-2xl">Gadget Hunter</h1>
        <Navbar />
        <div className="flex gap-4 items-center">
          <Searchbar />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
