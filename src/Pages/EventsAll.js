/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

import Header from "../components/Header";

function EventsAll(props) {
  return (
    <>
      <Header />
      <h1>
        Events in <span>Tel Aviv</span>
      </h1>

      <div>
        {/* {events.map((event) => {
          return (
            // create an event card component
            <EventCard />
          );
        })} */}
      </div>
    </>
  );
}

export default EventsAll;
