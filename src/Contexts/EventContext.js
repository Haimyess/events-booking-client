/** @format */

import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";

// We export and iport movieContext in the components we want to access this information
export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  // const [event, setEvent] = useState([]);
  const [event, setEvent] = useState([]);
  const [date, setDate] = useState([]);
  const [hour, setHour] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await fetch(
          `/api/events/event/${params.name}`
          // `https://booking-server.onrender.com/api/events/event/${params.name}`
        );
        // const res = await fetch(`/api/events/event/${params.name}`);
        const data = await res.json();
        // Check this part, becuae of this, i dont see all t events that have just one date. Im deleting them bassicaly in the frontend, not allowing them to show.
        const uniqueEvent = data.slice(data.length - 1).map((event) => event);

        const dates = data.map((dates) => dates.event_day);

        const hours = data.map((hours) => hours.event_hour);

        // console.log(data);
        // const hour = [...new Set(data.map((unique) => unique.event_hour))];
        // const events = [...data];
        // console.log(events);
        // const {
        //   event_name: event_name,
        //   event_id: event_id,
        //   event_info: event_info,
        //   event_type: event_type,
        //   event_subcategory: event_subcategory,
        // } = data;

        // const eventName = event_name;
        // const eventId = event_id;
        // const eventInfo = event_info;

        // const events = {
        //   eventName: event_name,
        //   eventId: event_id,
        //   eventInfo: event_info,
        //   eventSubCat: event_subcategory,
        //   eventType: event_type,
        // };

        // console.log(events);

        setEvent(uniqueEvent);
        setDate(dates);
        setHour(hours);
      } catch (err) {
        console.log(err);
      }
    };

    getEvent();
  }, [event]);
  return (
    // <EventContext.Provider value={[event, setEvent]}>
    <EventContext.Provider
      value={{
        event: [event, setEvent],
        date: [date, setDate],
        hour: [hour, setHour],
      }}>
      {children}
    </EventContext.Provider>
  );
};
