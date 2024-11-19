import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
const HomeLayout = () => {
  const { user } = useContext(AuthContext);
  // {
  //   user && toast.success("Welcome" + " " + user.email);
  // }
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
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
