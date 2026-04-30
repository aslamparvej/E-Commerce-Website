import React from "react";
import { Copyright } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-20 px-6 lg:px-0 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Column 1 - Subscribe */}
          <div>
            <h2 className="text-xl font-bold mb-3">Exclusive</h2>
            <h4 className="font-semibold mb-2">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get 10% off your first order
            </p>

            <div className="flex items-center border border-gray-500 rounded-md overflow-hidden w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-2 text-sm outline-none w-full"
              />
              <button className="px-3">➤</button>
            </div>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <p className="text-sm text-gray-400 leading-6">
              Ecospace, Newtown,
              <br />
              Kolkata, India.
            </p>
            <p className="text-sm text-gray-400 mt-2">devcenter.in@gmail.com</p>
            <p className="text-sm text-gray-400 mt-2">+91-9647190348</p>
          </div>

          {/* Column 3 - Account */}
          <div>
            <h4 className="font-semibold mb-3">Account</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">My Account</li>
              <li className="hover:text-white cursor-pointer">
                Login / Register
              </li>
              <li className="hover:text-white cursor-pointer">Cart</li>
              <li className="hover:text-white cursor-pointer">Wishlist</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
            </ul>
          </div>

          {/* Column 4 - Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Link</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">Terms Of Use</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <span className="cursor-pointer hover:text-gray-400">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#1877F2"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
            <span className="cursor-pointer hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#FFF"
              >
                <path d="M18.244 2H21l-6.54 7.48L22 22h-6.828l-5.35-6.993L3.8 22H1l7.02-8.03L2 2h6.828l4.84 6.38L18.244 2zm-2.396 18h1.89L7.36 4H5.34l10.508 16z" />
              </svg>
            </span>
            <span className="cursor-pointer hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="url(#ig-gradient)"
              >
                <defs>
                  <linearGradient
                    id="ig-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#f58529" />
                    <stop offset="50%" stop-color="#dd2a7b" />
                    <stop offset="100%" stop-color="#515bd4" />
                  </linearGradient>
                </defs>
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </span>
            <span className="cursor-pointer hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#0A66C2"
              >
                <path d="M20.447 20.452H16.9v-5.569c0-1.327-.025-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.941v5.665H9.367V9h3.404v1.561h.049c.474-.9 1.637-1.85 3.369-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.982 1.982 0 1 1 0-3.964 1.982 1.982 0 0 1 0 3.964zM6.897 20.452H3.777V9h3.12v11.452z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="py-4 border-t-[0.5px] border-gray-800">
        <p className="flex gap-2 justify-center items-center text-[1rem] text-[#F9F9F933] text-center">
          <Copyright size={16} /> Copyright Gudget Hunter {currentYear}. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
