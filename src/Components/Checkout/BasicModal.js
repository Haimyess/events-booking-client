/** @format */

import React, { useState, useContext, useRef } from "react";
import { format, parseISO } from "date-fns";
// import emailjs from "@emailjs/browser";

import { useNavigate } from "react-router-dom";

// import { CartContext } from "../Contexts/CartContext";

import { TextField } from "@mui/material";

import "../../Styles/Checkout/modalcheckout.css";

import { v4 as uuidv4 } from "uuid";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
// import id from "date-fns/esm/locale/id/index.js";

function BasicModal({ toggle, toggleDisplay, selected, tickets }) {
  // console.log(tickets);
  const form = useRef();
  const orderId = uuidv4();
  const ticketId = uuidv4();

  // Modal display
  const { centredModal, setCentredModal } = toggle;
  const { toggleShow } = toggleDisplay;

  // console.log(selected);
  // Navigation
  const navigate = useNavigate();
  // Variables
  const eventPrice = selected.map((price) => price.event_price);

  const eventDay = selected.map((date) => date.event_day).toString();
  // console.log(eventDay);

  const eventSelected = selected.map((name) => name.event_name);

  const subTotal = tickets * eventPrice;
  const fees = 20;
  const total = subTotal + fees;

  //const creatingTickets = () => {
  // ticketId; //each tickets ids

  //tickets; //quantity of tickets

  //const ticketUnitArr = ticketId * tickets;

  // console.log(ticketsU);
  //setTicketsArr(...ticketsArr, ticketsU);
  //console.log(ticketsArr);
  //};

  //creatingTickets();

  // States
  const [btnDisable, setBtnDisable] = useState(true);

  const [order, setOrder] = useState([]);
  const [ticketsArr, setTicketsArr] = useState([]);

  // console.log(ticketsArr);

  const [details, setDetails] = useState({
    client_name: "",
    client_lastname: "",
    client_email: "",
    client_card_num: "",
    client_card_exp: "",
    client_card_code: "",
  });
  // console.log(details);
  const date = new Date();

  // const formatedDay = format(parseISO(eventDay), "eee dd MMM", 1);
  // console.log(formatedDay);
  // console.log(Object.entries(details).map((item) => item[details.name]));
  // console.log());

  // for (let value of Object.values(details)) {
  //   console.log(value);
  // }

  const handleDetails = (e) => {
    // console.log(e.target);
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // console.log(eventDay[0]);
  function handleSubmitCheckout(e) {
    e.preventDefault();
    // console.log(details);

    // POST ORDERS TABLE
    fetch("/api/purchase/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: orderId,
        client_name: details.client_name,
        client_lastname: details.client_lastname,
        client_email: details.client_email,
        client_card_num: details.client_card_num,
        client_card_exp: details.client_card_exp,
        client_card_code: details.client_card_code,
        client_num_tickets: tickets,
        client_date_purchase: date,
        client_purchase_cost: total,
        client_event: eventSelected[0],
        client_event_day: eventDay[0],
        client_date_purchase: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    // i have x ticket and for each one of them i want to add an id

    // CREATE A PDF
    // SEND EMAIL WITH QR
    // NAVIGATE TO GREETING PAGE

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    // LATER ----> GENERATE QR

    // Pass estate to the postPurchase page to show
    navigate(`/purchase/${orderId}`, {
      state: {
        purchase: { orderId },
        email: details.client_email,
        cost: total,
        numTickets: tickets,
        clientName: details.client_name,
        event: eventSelected[0],
        // date: eventDay[0],
        // datePurchase: date,
      },
    });
  }
  return (
    <>
      <MDBModal
        show={centredModal}
        setShow={setCentredModal}
        backdrop={false}
        // disableBackdrop={true}
      >
        <MDBModalDialog centered size='lg'>
          <MDBModalContent>
            <MDBModalBody className='p-0'>
              <div className='modal-wrapper'>
                {/* Left side */}
                <section className='main-checkout'>
                  <div className='checkout-title-container'>
                    {/* {selectedEvent.map()} */}

                    {selected.map((event) => {
                      const date = format(
                        parseISO(event.event_day),
                        " eee dd MMM",
                        1
                      );
                      return (
                        <div className='checkout-title'>
                          <h5>{event.event_name}</h5>
                          <p>
                            {date} -{event.event_hour}
                          </p>
                        </div>
                      );
                    })}

                    {/* {selected} */}
                  </div>
                  <div>
                    <form
                      ref={form}
                      onSubmit={handleSubmitCheckout}
                      className='mb-1 '>
                      <h4>Contact Information</h4>
                      <TextField
                        className='mb-3 mr-2'
                        id='outlined-basic'
                        label='Name'
                        variant='outlined'
                        // value={details.name}
                        name='client_name'
                        onChange={handleDetails}
                      />
                      <TextField
                        id='outlined-basic'
                        label='Last name'
                        variant='outlined'
                        name='client_lastname'
                        onChange={handleDetails}
                      />
                      <TextField
                        id='outlined-basic'
                        label='Email'
                        variant='outlined'
                        fullWidth
                        name='client_email'
                        onChange={handleDetails}
                      />

                      <h4>Payment</h4>

                      <TextField
                        id='outlined-basic'
                        label='Card number'
                        variant='outlined'
                        name='client_card_num'
                        onChange={handleDetails}
                      />
                      <TextField
                        id='outlined-basic'
                        label='Exp'
                        variant='outlined'
                        name='client_card_exp'
                        onChange={handleDetails}
                      />
                      <TextField
                        id='outlined-basic'
                        label='CVV'
                        variant='outlined'
                        name='client_card_code'
                        onChange={handleDetails}
                      />
                      <div className='checkout-btn-container'>
                        <input
                          className='checkout-btn'
                          type='submit'
                          value='Checkout'
                          disabled={""}
                        />
                      </div>
                    </form>
                  </div>
                </section>

                {/* Right side  */}
                <aside className='summary-checkout'>
                  <div>
                    {/* <h5>Summary</h5> */}

                    {/* {Object.entries(cart).map((item) => (
                      <p key={item}>{item}</p>
                    ))} */}

                    {selected.map((event) => {
                      return (
                        <>
                          <img
                            className='ticket-checkout-image'
                            src={event.event_img}
                            alt='Event image'
                          />
                          <div className='ticket-info-checkout--container'>
                            <div className='ticket-info-checkout'>
                              <div>
                                <p>
                                  <span>{tickets} x</span> For the &nbsp;
                                  {event.event_type}, &nbsp;
                                  {event.event_name} at {event.event_address}.
                                </p>
                                {/* <p>{event.event_address}</p> */}
                              </div>
                              <p>{event.event_price}</p>
                            </div>
                            <div className='ticket-checkout-sub'>
                              <p>Subtotal: </p>
                              <p>{subTotal}</p>
                            </div>
                            <div className='ticket-checkout-fees'>
                              <p>Fees</p>
                              <p>{fees}</p>
                            </div>
                            <div className='ticket-checkout-total'>
                              <p>Total</p>
                              <p>{total}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {/* {cart.map((event) => {
                      return (
                        <>
                          <div className='ticket-info-checkout'>
                            <div>
                              <p>
                                <span>{tickets} x</span>
                                {event.event_name}
                              </p>
                              <p>Location</p>
                            </div>
                            <p>Price</p>
                          </div>

                          <div>
                            <p>Subtotal</p>
                            <p>subPrice</p>
                          </div>

                          <div>
                            <p>Fees</p>
                            <p>feesCost</p>
                          </div>

                          <div>
                            <p>Total</p>
                            <p>totalPrice</p>
                          </div>
                        </>
                      );
                    })} */}
                    {/* Info div */}
                  </div>
                </aside>
              </div>
            </MDBModalBody>
            {/* <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => toggleShow}>
                Checkout
              </MDBBtn>
            </MDBModalFooter> */}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default BasicModal;
