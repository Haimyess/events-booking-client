/** @format */

import React, { useContext } from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import EventSidebar from "../Components/EventSidebar";

import { EventContext } from "../Contexts/EventContext";

import Event from "../Pages/Event";
// import Footer from "../Components/Footer";
import "../Styles/eventLayout.css";

function EventLayout() {
  const { event } = useContext(EventContext);
  const [eventValue, setEventValue] = event;
  // console.log(eventValue);

  return (
    <div className='event-layout-wrapper'>
      <Header />
      <div className='event-layout-container'>
        <div className='event-layout-content'>
          <Event />
          <Outlet context={[eventValue]} />
          {/* <Footer /> */}
        </div>
        <EventSidebar />
      </div>
    </div>
  );
}

export default EventLayout;
