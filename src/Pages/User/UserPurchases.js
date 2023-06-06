/** @format */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

// Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// styles
import "../../Styles/UserAdmin/userevents.css";

function UserPurchases() {
  const params = useParams();

  const [ordersById, setOrdersById] = useState([]);

  console.log(ordersById);

  const getOrders = async () => {
    try {
      // const url = "/api/events/by/1";
      const url = `https://booking-server.onrender.com/api/purchase/${params.userId}`;
      const res = await axios.get(url);
      setOrdersById(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
    // I added it now the dependency.6/6/2023
  }, [ordersById]);

  // console.log(eventsById);

  const tableCells = [
    "Order Number",
    "Event",
    "Date",
    "Number of Tickets",
    "Cost",
  ];
  return (
    <div>
      <div className='newevent-wrap'>
        <h2>Your Purchases</h2>
      </div>

      {/* Table */}
      {!ordersById.length === 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                {tableCells.map((cell) => {
                  return <TableCell>{cell}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersById.map((event) => (
                <TableRow
                  key={event.event_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {event.order_id}
                  </TableCell>
                  <TableCell align='right'>{event.client_event}</TableCell>
                  <TableCell align='right'>{event.client_event_day}</TableCell>
                  <TableCell align='right'>
                    {event.client_num_tickets}
                  </TableCell>
                  <TableCell align='right'>
                    {event.client_purchase_cost}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>You haven't realized any purchase yet.</p>
      )}

      {/* <button onClick={createEvent}>New event</button> */}
    </div>
  );
}

export default UserPurchases;
