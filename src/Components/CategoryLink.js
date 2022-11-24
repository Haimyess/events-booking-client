/** @format */

import React from "react";

import { NavLink } from "react-router-dom";

// passing as props the property eventCategory added to the categoryLink in the mapping in the subnav component..
const CategoryLink = ({ events }) => {
  // filter events and pass them in the link as unique

  //   const categories = events.event_type;

  //   const unique = [...new Set(categories)].join("");

  //   console.log(unique);
  return (
    <>
      <NavLink className='subnav-links ' to={`/Category/${events.event_type}`}>
        {events.event_type}
      </NavLink>
    </>
  );
};

export default CategoryLink;
