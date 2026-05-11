import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Search, Bell, LogOut, User, Settings } from "lucide-react";

const Header = () => {
  const [notification, setNotification] = useState([]);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const location = useLocation();

  const titles = {
    "/admin/dashboard": "Dashboard",
    "/admin/products": "Products",
    "/admin/orders": "Orders",
    "/admin/users": "Users",
  };
  const pageTitle = titles[location.pathname] || "Admin Portal";

  return (
    <div className="min-h-20 px-4 flex items-center justify-between bg-white shadw-sm">
      <h1 className="text-xl font-bold">{pageTitle}</h1>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <input
            type="text"
            className="px-6 py-2 pe-12 bg-neutral-50 rounded-full border border-transparent focus:border-primary focus:outline-0"
            placeholder="Search data, users, or reports"
          />
          <Search
            size={20}
            className="absolute top-1/2 -translate-1/2 right-2"
          />
        </div>

        {/* Notification */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 cursor-pointer relative">
          <Bell size={20} />
          {notification.length > 0 && (
            <span className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-3"></span>
          )}
        </div>

        {/* Profile */}
        <div
          onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-primary text-primary font-bold cursor-pointer relative"
        >
          <span>AP</span>
          {isProfileDropdownOpen && (
            <div className="min-w-60 p-4 bg-white shadow-sm border-gray-600 rounded-xl absolute top-14 right-0">
              <div className="pb-3 mb-3 flex gap-4 items-center border-b border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  AP
                </div>
                <div>
                  <h3 className="text-lg text-gray-700 font-semibold">
                    Aslam Parvej
                  </h3>
                  <p className="text-sm text-gray-400 font-normal">
                    aslamparvej2@gmail.com
                  </p>
                </div>
              </div>
              <ul className="pb-3 mb-3 border-b border-gray-200">
                <li>
                  <Link className="px-1 py-1 flex gap-2 items-center text-gray-700 text-[1rem] font-medium rounded-sm hover:bg-navy-100">
                    <User size={16} />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="px-1 py-1 flex gap-2 items-center text-gray-700 text-[1rem] font-medium rounded-sm hover:bg-navy-100">
                    <Settings size={16} />
                    Settings
                  </Link>
                </li>
              </ul>
              <button className="flex items-center gap-1 cursor-pointer text-gray-700 text-[1rem] font-medium">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
