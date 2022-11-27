/** @format */

import React, { useState, useEffect, createContext } from "react";

// We export and iport movieContext in the components we want to access this information
export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch(
          // "https://booking-server.onrender.com/api/events/all"
          "/api/events/all"
        );
        const data = await res.json();
        setIsLoading(false);
        setEvents(data);
      } catch (err) {
        console.log(err);
      }
    };

    getEvents();
  }, [events]);
  return (
    <EventsContext.Provider
      value={{ events, setEvents, isLoading, setIsLoading }}>
      {children}
    </EventsContext.Provider>
  );
};
