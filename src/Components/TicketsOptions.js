/** @format */

import React, { useContext, useState } from "react";
import { useParams } from "react-router";

// Contexts
// import { CartContext } from "../Contexts/CartContext";
import { EventContext } from "../Contexts/EventContext";

// Components
import BasicModal from "./Checkout/BasicModal";

// Packages
import { format, parseISO } from "date-fns";

// Styles
import "../Styles/ticketOptions.css";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

function TicketsOptions() {
  // const [cart, setCart] = useContext(CartContext);
  const { event } = useContext(EventContext);
  const [eventValue, setEventValue] = event;
  // console.log(eventValue[0].event_name);

  const [centredModal, setCentredModal] = useState(false);

  const [ticketNumber, setTicketNumber] = useState(1);

  const uniquePrice = [
    ...new Set(eventValue.map((price) => price.event_price)),
  ];

  function toggleShow() {
    setCentredModal(!centredModal);
  }

  // console.log(eventValue);

  return (
    <>
      {
        !eventValue[0]?.event_price == 0 ? (
          <div className='tickets-main'>
            <div className='tickets-title-container'>
              <h4 className='tickets-title-ft-icon'>
                <FontAwesomeIcon icon={faCalendar} />
                <span className='tickets-title'>Select your Tickets</span>
              </h4>
            </div>
            {/* <div className='ticket-select-wrapper'>{events.map(() => {})}</div> */}
            {/* Quantity ticket selection and checkout button */}
            <div>
              <div className='event-tickets-qt'>
                <input
                  className={
                    ticketNumber == 1 ? "disable-qty-btn" : "ticket-qty-btn"
                  }
                  onClick={() => setTicketNumber(ticketNumber - 1)}
                  type='button'
                  value='-'
                  disabled={ticketNumber == 1 && true}
                />
                <p> {ticketNumber} ticket</p>
                <input
                  className='ticket-qty-btn'
                  onClick={() => setTicketNumber(ticketNumber + 1)}
                  type='button'
                  value='+'
                />
              </div>

              <div className='ticket-buy-btn-container'>
                <button
                  className='ticket-buy-btn'
                  onClick={() => {
                    toggleShow();
                  }}>
                  {uniquePrice * ticketNumber} $ - Buy tickets
                </button>
              </div>
            </div>
            <BasicModal
              toggle={{ centredModal, setCentredModal }}
              toggleDisplay={toggleShow}
              event={eventValue}
              tickets={ticketNumber}
            />
          </div>
        ) : (
          ""
        )
        // selected={selectedDate}
      }
    </>
  );
}
export default TicketsOptions;

// const [hours, setHours] = useState([]);
// const [selectedDate, setSelectedDate] = useState([]);

// function eventData(event) {

//   setSelectedDate([event]);
//   setActive(event);
// }

// let uniqueDatesObjArray = [
//   ...new Map(events.map((item) => [item["event_day"], item])).values(),
// ];

//  {
//    events.map((dates, i) => {
//      const date = format(parseISO(dates.event_day), " eee dd MMM", 1);
//      return (
//        <div
//          key={i}
//          className={`ticket-select ${active == dates && "activeDate"}`}
//          onClick={() => eventData(dates)}>
//          <p>
//            <strong>{date}</strong>
//          </p>
//          <p>{dates.event_hour}</p>
//        </div>
//      );
//    });
//  }
