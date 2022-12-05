/** @format */

import React, { useEffect, useState } from "react";
// dont forget to add the curly braces for the react-router-dom imports.
import { useLocation, useSearchParams } from "react-router-dom";

import EventCard from "../Components/EventCard";

function SearchEvents() {
  const location = useLocation();

  const { state } = useLocation();
  console.log(location);

  const [searchEvents, setSearchEvents] = useState();
  console.log(searchEvents);

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const res = await fetch(
          `https:/booking-server.onrender.com/api/events/search?q=${location.state.search}`
        );
        const data = await res.json();

        setSearchEvents(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSearch();
  }, [state]);

  // const events = JSON.stringify(searchEvents);

  return (
    <>
      <h2>Showing results for "{state.search}".</h2>

      {searchEvents?.map((event) => {
        return <EventCard key={event.event_id} event={event} />;

        {
          /* <div key={event.event_id}>{event.event_name}</div>; */
        }
      })}
      {/* Here i will pass trought a link the data that was filter in the sugestiins serach bar input and map them and display the event cards. */}
    </>
  );
}

export default SearchEvents;
