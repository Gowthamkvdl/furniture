import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <div>
      <div className="container">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="mt-md-5"></div>
        <Navbar />

        <div className="mt-md-5 mb-md-5"></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
