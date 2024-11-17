import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
