/** @format */

import { EventsContext } from "../Contexts/EventsContext";
import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";

// Styles
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "../Styles/subnav.css";
import CategoryLink from "./CategoryLink";

function SubNav() {
  const { events, setEvents, isLoading, setIsLoading } =
    useContext(EventsContext);
  // console.log("subnav", events);
  // const eventType = "event_type";

  // Filter duplicates category type
  const uniqueCategories =
    !events.length > 0
      ? "loading"
      : [
          ...new Map(
            events.map((unique) => [unique["event_type"], unique])
          ).values(),
        ];

  // const categories = events.event_type;

  // const categories = events.map((category) => {
  //   return <p>{category.event_type}</p>;
  // });

  // console.log(events);

  // const unique = events.filter(
  //   (, index) =>
  //     events.findIndex((object) => object.value !== event_type.value) !== index
  // );
  // function FilterLinksChips(e) {
  //   console.log(e.target.value);

  //   // I could maybe depending on the link value, if its equal to the event_type, display all the sub categories in a list of chips component. Then create a varable to store the subcategoires and pass them to the sub categoris component chips.
  // }
  return (
    <div className='subnav-link-container'>
      {isLoading || !events.length > 0 ? (
        <Box sx={{ width: 300, display: "flex", gap: 2 }}>
          <Skeleton variant='text' width={100} height={15} />
          <Skeleton variant='text' width={100} height={15} />
          <Skeleton variant='text' width={100} height={15} />
          <Skeleton variant='text' width={100} height={15} />
        </Box>
      ) : (
        uniqueCategories?.map((event) => {
          return <CategoryLink key={event.event_id} events={event} />;
        })
      )}
    </div>
  );
}

export default SubNav;

//  <ul className='subnav-list'>
//    {/* <li onClick={FilterLinksChips}> */}
//    {/* <Link to={<AllEvents data='e.target. event_type' />}> */}
//    {/* {filtered.event_type} */}
//    {/* </Link> */}
//    {/* </li> */}
//    <li className='subnav-links'>{event.event_type}</li>
//  </ul>;
