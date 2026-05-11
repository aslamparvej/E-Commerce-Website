import { Outlet } from "react-router-dom";

import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <>
      <Topbar />
      <Header />

      <main className="min-h-[calc(100vh-7.4375rem)] max-w-7xl mx-auto sm:px-6 lg:px-0">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default UserLayout;
