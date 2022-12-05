/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

function UserEvents() {
  const params = useParams();

  const [eventsById, setEventsById] = useState([]);

  console.log(eventsById);

  const getEventsByProducer = async () => {
    try {
      // const url = "/api/events/by/1";
      const url = `https:/booking-server.onrender.com/api/events/by/${params.userId}`;
      const res = await axios.get(url);
      setEventsById(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEventsByProducer();
  }, []);

  // console.log(eventsById);

  const tableCells = [
    "Type",
    "Id",
    "Sub Category",
    "Name",
    "Date start",
    "Date end",
    // "Time",
    // "Info",
    // "Address",
    "City",
    "Price",
  ];
  return (
    <div>
      <div className='newevent-wrap'>
        <h2>Your Events</h2>
        <Link to='new_event'>New Event</Link>
      </div>

      {/* Table */}
      {!eventsById.length == 0 ? (
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
              {eventsById.map((event) => (
                <TableRow
                  key={event.event_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {event.event_type}
                  </TableCell>
                  <TableCell align='right'>{event.event_id}</TableCell>
                  <TableCell align='right'>{event.event_subcategory}</TableCell>
                  <TableCell align='right'>{event.event_name}</TableCell>
                  <TableCell align='right'>{event.event_date_start}</TableCell>
                  <TableCell align='right'>{event.event_date_end}</TableCell>
                  {/* <TableCell align='right'>{event.event_time}</TableCell>
                <TableCell align='right'>{event.event_info}</TableCell>
                <TableCell align='right'>{event.event_address}</TableCell> */}
                  <TableCell align='right'>{event.event_city}</TableCell>
                  <TableCell align='right'>{event.event_price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>You haven't created any event yet.</p>
      )}

      {/* <button onClick={createEvent}>New event</button> */}
    </div>
  );
}

export default UserEvents;
