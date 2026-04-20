import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Woman's Fashion",
    children: ["Dresses", "Tops", "Shoes"],
  },
  {
    name: "Men's Fashion",
    children: ["Shirts", "Jeans", "Shoes"],
  },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <aside className="pr-6 pt-8 border-r-[0.5px] border-gray-300">
      <ul className="space-y-4">
        {categories.map((item, index) => (
          <li key={index}>
            {/* Parent  */}
            <div
              className="flex items-center justify-between cursor-pointer text-gray-800 hover:text-black"
              onClick={() => (item.children ? toggleCategory(index) : null)}
            >
              <span>{item.name}</span>
              {item.children && (
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>

            {/* Children  */}
            {item.children && openIndex === index && (
              <ul
               className={`origin-top transform transition-all duration-300 ${
    openIndex === index
      ? "scale-y-100 opacity-100 mt-2"
      : "scale-y-0 opacity-0"
  } ml-3 space-y-2`}
              >
                {item.children.map((child, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 hover:text-black cursor-pointer"
                  >
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
