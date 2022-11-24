/** @format */

import React from "react";
import { useLocation } from "react-router";
// import Tickets from "../components/Checkout/Tickets";
// import { PDFDownloadLink } from "@react-18-pdf/renderer";

import "../Styles/postpurchase.css";

// ADD THE TICKETS IDS, CREATE API GET ORDER BY ID AND THEN FECTH

function PostPurchase({ data }) {
  const location = useLocation();
  console.log(location);
  console.log(data);
  return (
    <div>
      <div className='thanks'>
        <h1>Your order has been received</h1>
        <h2>Thank you for your purchase</h2>
        <p>Your order ID is: {location.state.purchase.orderId} </p>
        <p>You will recieve an email with deteails of your order.</p>
      </div>

      <section>
        <div className='ticket-container'>
          <div className='ticket'>
            <h2>Ticket</h2>

            <h3>{location.state.event}</h3>
            {/* <p>Event date: {location.state.date}</p> */}

            <p>Name: {location.state.clientName}</p>
            <p>Email: {location.state.email}</p>
            <p>Price: {location.state.cost}</p>
            <p>Date of purchase: {location.state.datePurchase}</p>
            <p>Number of Tickets: {location.state.numTickets}</p>
          </div>
        </div>
      </section>

      {/* <PDFDownloadLink document={<Tickets data={data} />} fileName='tickets'>
        {({ loading }) =>
          loading ? (
            <button>Creating tickets</button>
          ) : (
            <button>See your tickets</button>
          )
        }
      </PDFDownloadLink> */}

      {/* <bustton>See your tickets</button> */}
    </div>
  );
}

export default PostPurchase;
