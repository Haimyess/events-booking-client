/** @format */

import React from "react";

import "../Styles/EventCard.css";

import { Link } from "react-router-dom";
// import { CategoriesContext } from "../CategoriesContext";
function EventCard({ event }) {
  // console.log(event);
  // const [categories, setCategories] = useContext(CategoriesContext);
  return (
    <>
      {/* 
                pass the info from the categoryRow to display it as card Event
                
            */}
      <div className='event-card' key={event.event_id}>
        <img
          className='event-category-img'
          src={event.event_img}
          alt='Event image'
        />
        <div>
          <h2 className='event-title'>{event.event_name}</h2>
          {/* <p className='event-info'>{events.event_info}</p> */}
          <p className='event-subcategory'>{event.event_subcategory}</p>
          <p className='event-price'>{event.event_price}</p>
          {/* <p className='event-date'>{date}</p> */}
          {/* <p className='event-date'>{event.event_day}</p> */}
          {/* <p>{singleEvent.event_type}</p> */}
          <button className='event-btn'>
            <Link to={`/event/${event.event_name}`}> More info.. </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
