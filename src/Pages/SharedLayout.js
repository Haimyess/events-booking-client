/** @format */

import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../Components/Header";

import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
