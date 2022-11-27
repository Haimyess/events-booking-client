/** @format */

import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
// import EventSidebar from "../Components/EventSidebar";

import Event from "../Pages/Event";
// import Footer from "../Components/Footer";
import "../Styles/eventLayout.css";

function EventLayout() {
  return (
    <div className='event-layout-wrapper'>
      <Header />
      <div className='event-layout-container'>
        <div className='event-layout-content'>
          <Event />
          <Outlet />
          {/* <Footer /> */}
        </div>
        {/* <EventSidebar /> */}
      </div>
    </div>
  );
}

export default EventLayout;
