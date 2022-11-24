/** @format */

import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../Contexts/CartContext";

import BasicModal from "./Checkout/BasicModal";

import { useParams } from "react-router";

import { format, parseISO } from "date-fns";

import "../Styles/ticketOptions.css";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

function TicketsOptions() {
  const params = useParams();
  const [cart, setCart] = useContext(CartContext);

  // console.log(cart);
  const [centredModal, setCentredModal] = useState(false);
  // const toggleShow = () => setCentredModal(!centredModal);

  // const [selectedEvent, setSelectedEvent] = useState({
  //   event: {},
  //   numberOfTickets: "",
  // });
  const [events, setEvents] = useState([]);
  const [hours, setHours] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);

  const [active, setActive] = useState(null);
  // console.log(typeof selectedDate);

  function eventData(event) {
    // console.log(event);
    // const eventSelected = event;
    // setCart([eventSelected]);
    setSelectedDate([event]);
    setActive(event);
  }

  // console.log(active);

  // console.log(selectedEvent);
  function toggleShow() {
    setCentredModal(!centredModal);
  }

  // function buyTickets(dates) {
  // console.log("second function");

  // const currentEvent = dates;
  // const tickets = ticketNumber;
  // setSelectedEvent((prev) => {
  //   return { ...prev, event: currentEvent, numberOfTickets: tickets };
  // });

  // Pass info into modal
  // }

  // const { hour } = useContext(EventContext);
  // const [eventValue, setEventValue] = event;
  // const [datesValue, setDatesValue] = date;
  // const [hoursValue, setHoursValue] = hour;

  // console.log(datesValue);

  // console.log(events);
  // const handleClose = () => setOpen(false);

  // const uniqueHoursArray = [...hours];
  // console.log(uniqueHoursArray);

  // console.log(hours);

  // const uniqueEvents = events.map((event) => {
  //   const uniqueObject = {
  // id: Math.floor(Math.random() * 100) + 1,
  // name: event.event_name,
  // image: event.event_img,
  // date: event.event_day,
  // address: event.event_address,
  // hours: event.event_hour,
  // price: event.event_price,
  //   };
  //   return uniqueObject;
  // });
  // const uniqueHours = hours.map((hours) => {
  //   const hourValues = [
  //     {
  //       date: hours.event_day,
  //       hour: hours.event_hour,
  //     },
  //   ];
  //   return uniqueHours;
  // });
  // console.log(uniqueHours);

  let uniqueDatesObjArray = [
    ...new Map(events.map((item) => [item["event_day"], item])).values(),
  ];
  // .filter((uniqueDate) => {});
  // const uniqueHours = hours.filter((hour) => {
  //   return hour.event_hour !== hour;
  // });

  // console.log(uniqueDatesObjArray);
  // ...new Set(events.map((uniqueEvents) => uniqueEvents.event_day == )),

  // console.log(uniqueObjArray);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch(`/api/events/event/${params.name}`);
        const data = await res.json();
        setEvents(data);

        // const hour = [...new Set(data.map((unique) => unique.event_hour))];

        // const hour = data.map((hours) => {
        //   const uniqueHours = {
        //     date: hours.event_day,
        //     hour: hours.event_hour,
        //   };
        //   return uniqueHours;
        // });

        // let uniquehoursArr = [
        //   ...new Map(
        //     data.map((item) => [item["data.event_hour"], item])
        //   ).values(),
        // ];

        setHours(data);
      } catch (err) {
        console.log(err);
      }
    };
    getEvents();
  }, [hours]);

  // useEffect(() => {
  //   const getEvents = async () => {
  //     try {
  //       const res = await fetch(`/api/events/event/${params.name}`);
  //       const data = await res.json();
  //       setEvents(data);

  //       const hours = data.map((hour) => {
  // const hoursObj = {
  //   hours: hour.event_hour,
  //   id: {},
  // };
  //   return hour.event_hour;
  // });

  // setHour(hours);
  // console.log(hours);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getEvents();
  // }, []);

  // create a function in wich i will check if the id passed to the functio is true, i will map and return

  // console.log(eventValue);

  // console.log(eventValue);

  const [ticketNumber, setTicketNumber] = useState(1);

  // const [cart, setCart] = useContext(CartContext);

  // const [disable, setDisable] = useState(true);

  // const [day, setDay] = useState("");
  // const [hour, setHour] = useState("");

  // console.log(day);
  // function addToCart(e) {}

  // const showHour = (hours) => {
  //   setHour(hours);
  // };

  // const price = events.map((price) => price.event_price);

  const uniquePrice = [...new Set(events.map((price) => price.event_price))];
  // console.log(uniquePrice);

  // function changeHour(event) {
  // console.log(event); //i can use it to compare the event.day

  // const allHours = events.map((hours) => {
  // console.log(events);
  //   return hours.event_hour === event.event_day;
  // });
  // console.log(allHours);

  // const eventHours = events.includes(event);
  // console.log(eventHours);

  // setHours(hour);
  // const filteredHours = hours.filter((hour) => {
  // console.log(hour);
  //   return hour.event_hour;
  // });
  // show hours depending on the date
  // if hours include date, update hours to the variable
  // setHours(filteredHours);
  // console.log(date);
  // console.log(filteredHours);
  // }

  // function checkoutButton() {
  //   setOpen(true);
  // }

  return (
    <div className='tickets-main'>
      <div className='tickets-title-container'>
        <h4 className='tickets-title-ft-icon'>
          {" "}
          <FontAwesomeIcon icon={faCalendar} />
          <span className='tickets-title'>Select date and hour</span>
        </h4>
      </div>
      {/* Days */}
      {/* <h5>Day</h5> */}
      <div className='ticket-select-wrapper'>
        {events.map((dates, i) => {
          {
            /* console.log(dates); */
          }
          const date = format(parseISO(dates.event_day), " eee dd MMM", 1);
          return (
            <div
              key={i}
              className={`ticket-select ${active == dates && "activeDate"}`}
              onClick={() => eventData(dates)}>
              <p>
                <strong>{date}</strong>
              </p>
              <p>{dates.event_hour}</p>
            </div>
          );
        })}

        {/* <p>Testing</p> */}
        {/* {selectedDate.map((item) => {
          return (
            <>
              <p>{item.event_day}</p>
            </>
          );
        })} */}
        {/* {uniqueObjArray.map((dates) => {
          const date = format(parseISO(dates.date), " eee dd MMM", 1); */}

        {/* console.log(date); */}
        {/* const uniqueDate = [
            ...new Set(date.map((unique) => unique.event_day)),
          ]; */}
        {/* return (
            <div>
              <button onClick={() => showHour(dates.hours)}>{date}</button>{" "}
            </div>
          );
        })} */}
        {/* {datesValue.map((dates) => {
          const date = format(parseISO(dates), " eee dd MMM", 1);

          return (
            <div key={dates}>
              <label className='label'>{date} </label>
              <input type='radio' value={dates} />
            </div>
          );
        })} */}
      </div>
      {/* <div>
        <h3>Testing</h3>

        {uniqueDatesObjArray.map((dates, i) => {
          const date = format(parseISO(dates.event_day), " eee dd MMM", 1);
        
          return (
            <button key={i} value={dates.event_day} onClick={"s"}>
              {date}
            </button>
          );
        })}
      </div> */}
      {/* Hours */}
      {/* <h5>Hour</h5>

      <div>
        {hours.map((hour) => {
          return <button>{hour.event_hour}</button>;
        })}
      </div> */}
      {/* <div> */}
      {/* {hour.map((hours) => (
          <button>{hours}</button>
        ))} */}
      {/* {hoursValue.map((hours) => {
          return (
            <div key={hours}>
              <label className='label'>{hours} </label>
              <input type='radio' value={hours} />
            </div>
          );
        })} */}
      {/* </div> */}
      {/* ----------------------------------------- */}
      {/* ----------------------------------------- */}
      {/* ----------------------------------------- */}
      {/* {eventValue.map((event) => {
        return (
          <div>
            <p>{event.event_date}</p>
          </div>
        );
      })} */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* ------------------------------------------ */}
      {/* Price */}
      {/* <div></div> */}
      {/* Quantity ticket selection and checkout button */}
      <div>
        <div className='event-tickets-qt'>
          <input
            onClick={() => setTicketNumber(ticketNumber - 1)}
            type='button'
            value='-'
          />
          <p> {ticketNumber} ticket</p>
          <input
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
            {uniquePrice * ticketNumber}- Buy tickets
          </button>
        </div>
        {/* <button onClick={addToCart}>{eventValue.event_price} - Checkout</button> */}
      </div>
      {/* {centredModal ? (
        <BasicModal
          toggle={{ centredModal, setCentredModal }}
          toggleDisplay={toggleShow} */}
      {/* // onOpen={handleOpen}
          // onClose={handleClose}
          // functions={{ open, setOpen }}
      //   />
      // ) : (
      //   ""
      // )} */}
      {/* } */}

      <BasicModal
        toggle={{ centredModal, setCentredModal }}
        toggleDisplay={toggleShow}
        selected={selectedDate}
        tickets={ticketNumber}
      />

      {/* 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
}

export default TicketsOptions;

{
  /* Mapping the hours */
}
//   <div>
//     <span>Dates:</span>
//     {dateValue.map((day) => {
//       return (
//         <>
{
  /* <p>{day.event_day.format("YYYY-MM-DD")}</p> */
}
{
  /* <p>{<p>{format(day.event_day, parseISO("yyyy/mm/dd"))}</p>}</p> */
}
{
  /* <input type='radio' />
                  <label>{day.event_date_start}</label>
                </>
              );
            })}
          </div>; */
}
{
  /* I thin the hours should be conditional to the date. if the date is this, show the hours of that day */
}
//   <div>
//     <span>Hour:</span>
//     {hourValue.map((hour) => {
//       return (
//         <>
{
  /* <p>{day.event_day.format("YYYY-MM-DD")}</p> */
}
{
  /* <p>{<p>{format(day.event_day, parseISO("yyyy/mm/dd"))}</p>}</p> */
}
{
  /* <input type='radio' />
                  <label>{hour.event_hour}</label>
                </>
              );
            })}
          </div>; */
}
// onClick={() => checkoutButton}
