/** @format */

import React, { useState, useEffect, createContext } from "react";

// We export and iport movieContext in the components we want to access this information
export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch("/api/events/all");
        const data = await res.json();

        setEvents(data);
      } catch (err) {
        console.log(err);
      }
    };

    getEvents();
  }, [events]);
  return (
    <EventsContext.Provider value={[events, setEvents]}>
      {children}
    </EventsContext.Provider>
  );
};
