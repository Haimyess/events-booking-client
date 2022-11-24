/** @format */

import React from "react";
import TicketsOptions from "./TicketsOptions";

import "../Styles/eventSidebar.css";
function EventSidebar() {
  return (
    <div className='event-sidebar'>
      <div className='event-sidebar-container'>
        <TicketsOptions />
      </div>
    </div>
  );
}

export default EventSidebar;
