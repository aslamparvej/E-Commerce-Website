import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AdminLayout;