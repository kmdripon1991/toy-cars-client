import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";
import Volume from "../pages/Home/Volume/Volume";
import WhyUs from "../pages/Home/WhyUs/WhyUs";

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Outlet />
      <Volume/>
      <WhyUs/>
      <Footer />
    </>
  );
};

export default Main;
