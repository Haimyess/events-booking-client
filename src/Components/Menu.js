/** @format */

import React from "react";

import { Link } from "react-router-dom";

function Menu({ categories }) {
  return (
    <>
      {categories.map((event) => {
        return (
          <div className='event-card' key={event.event_id}>
            <img src={""} alt='Event image' />
            <div>
              <h2 className='event-title'>{event.event_name}</h2>
              {/* <p className='event-info'>{events.event_info}</p> */}
              <p className='event-subcategory'>{event.event_subcategory}</p>
              <p className='event-price'>{event.event_price}</p>
              {/* <p>{singleEvent.event_type}</p> */}
              <button className='event-btn'>
                <Link to={`/event/${event.event_id}`}> More info.. </Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Menu;
