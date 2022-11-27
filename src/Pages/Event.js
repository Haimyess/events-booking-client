/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router";
import ReadMoreEventInfo from "../Components/ReadMoreEventInfo";
// import TicketsOptions from "../Components/TicketsOptions";

import { EventContext } from "../Contexts/EventContext";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "../Styles/event.css";
import "../Styles/variables.css";
import SocialBar from "../Components/SocialBar";

// import { format } from "date-fns";

function Event() {
  const params = useParams();
  const { event, date, hour } = useContext(EventContext);
  const [eventValue, setEventValue] = event;
  const [dateValue, setDateValue] = date;
  const [hourValue, setHourValue] = hour;

  // const singleEvent = [...eventValue];
  // const singleEventShow = setEventValue(
  //   singleEvent.map((event) => {
  //     return (
  //       <>
  //         <p>{event.event_city}</p>
  //       </>
  //     );
  //   })
  // );
  // const city = singleEvent.event_name;

  // const showEvent = singleEventShow.find((el) => {
  //   return el === "Top Gun";
  // });

  // console.log(showEvent);

  // let { event_name, event_type, event_address, event_info, event_city } =
  //   eventValue;

  // const singleEvent = {};

  // console.log(singleEventShow);
  // console.log(hourValue);

  // const dateOriginal = dateValue;
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  // const formatedDate = dateOriginal.toLocaleDateString(undefined, options);

  // console.log(formatedDate);
  // console.log(event);
  // console.log(event);

  return (
    <div className='event-wrapper'>
      <main className='main-wrapper'>
        <section className='event-info'>
          {/* <p>{showEvent}</p> */}
          {eventValue.map((event) => {
            {
              /* console.log(event); */
            }
            return (
              <div className='events-main-info' key={event.event_id}>
                <div className='event-img-container'>
                  <img
                    className='event-img'
                    src={event.event_img}
                    alt='Event image'
                  />
                </div>
                <div className='event-info-desc'>
                  <h1>{event.event_name}</h1>
                  <di>{/* <img src={""} alt='Event images' /> */}</di>
                  <div>
                    <Link to='/Category/Activities' className='event-type'>
                      {event.event_type}
                    </Link>
                    <p></p>
                    {/* <p>{event.event_subcategory}</p> */}
                    {/* <p>Price: {event.event_price}</p>
                    <p> From: {event.event_date_start}</p> */}
                    {/* <p> {event.event_date_end} </p> */}
                    {/* {<p> To: ? {event.event_date_end} : ""</p>} */}
                    {/* <p>Starts: {event.event_time_start}</p>
                    <p>Ends: {event.event_time_ends}</p> */}
                    {/* <p>{event.event_city}</p> */}
                    <p>
                      <FontAwesomeIcon icon={faLocationDot} size='xl' />
                      <span className='event-icon-text'>
                        {event.event_address}
                      </span>
                    </p>
                  </div>
                </div>
                ;
              </div>
            );
          })}
        </section>
      </main>
      <SocialBar />
      {/* <aside className='event-sidebar'>
        <TicketsOptions />
      </aside> */}
      {eventValue.map((info) => {
        return (
          <ReadMoreEventInfo limit={200}>{info.event_info}</ReadMoreEventInfo>
        );
      })}
    </div>
  );
}

export default Event;
