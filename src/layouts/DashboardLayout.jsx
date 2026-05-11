import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
