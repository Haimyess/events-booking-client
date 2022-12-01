/** @format */

import React from "react";

import { useLocation } from "react-router-dom";

import "../Styles/eventLayout.css";

function Info() {
  const location = useLocation();
  const event = location.state.currEvent;
  console.log(event);
  return (
    // <div className='center'>
    <div className='event-info-wrapper'>
      {/* Here will be displayed the companys micro website */}
      <h4>About </h4>
      <p className='event-info-text'>
        {event?.map((event) => {
          return <div> {event.event_info} </div>;
        })}
      </p>
    </div>
  );
}

export default Info;
