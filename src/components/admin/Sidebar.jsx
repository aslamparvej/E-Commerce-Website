import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { LayoutDashboard, Cuboid, Package, Folder } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-65 bg-white shadow-sm">
      <div className="min-h-20 p-4 flex items-center">
        <h2 className="text-2xl font-bold">
          <Link to="/admin/dashboard">Gadget Hunter</Link>
        </h2>
      </div>
      <div className="px-4">
        <ul>
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `px-2 py-2 rounded-sm flex gap-2 items-center text-[1rem] text-neutral-500 hover:bg-navy-100 ${isActive ? "bg-primary text-white hover:bg-navy-700" : ""}`
              }
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                `px-2 py-2 rounded-sm flex gap-2 items-center text-[1rem] text-neutral-500 transition-all duration-500 hover:bg-navy-100 ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              <Cuboid size={20} />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `px-2 py-2 rounded-sm flex gap-2 items-center text-[1rem] text-neutral-500 hover:bg-navy-100 ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              <Package size={20} />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/categories"
              className={({ isActive }) =>
                `px-2 py-2 rounded-sm flex gap-2 items-center text-[1rem] text-neutral-500 hover:bg-navy-100 ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              <Folder size={20} />
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
