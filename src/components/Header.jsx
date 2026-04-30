import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Cart from "./Cart";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white p-4 border-b-[0.5px] border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-black font-bold text-2xl sm:text-lg">
            Gadget Hunter
          </h1>
        </Link>
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <div className="flex gap-4 items-center">
          <Searchbar />
          <Cart />
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
