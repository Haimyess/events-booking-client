/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import MUI
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Checkbox,
} from "@mui/material";

import "../../Styles/Dashboard/dashboard.css";

function EventsList() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch("/api/events/all");
      const data = await res.json();
      setEvents(data);
      console.log(data);
    };
    getEvents();
  }, [search]);

  function handleSearch(e) {
    setSearch(e.target.value);

    const filterEvents = events.filter((event) => {
      event.event_name.toLowerCase().includes(search);
    });

    setEvents(filterEvents);
  }
  console.log(search);
  // console.log(events);

  // CHECKBOXES

  function handleClick(e) {
    let updatedCheboxes = [...checked];
    if (e.target.checked) {
      updatedCheboxes = [...checked, e.target.value];
      setIsDelete((val) => val);
    } else {
      updatedCheboxes.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedCheboxes);
    setIsDelete((val) => !val);

    // console.log(updatedCheboxes);
  }

  // console.log(checked);

  const handleDelete = () => {
    console.log("delete!");
  };

  return (
    <div className='eventsdash-wrapper'>
      <div className='eventsdash-subnavbar'>
        <h1 className='eventsdash-title'>Events</h1>
        <div className='eventsdash-filter'>
          {isDelete ? <button>Delete</button> : ""}

          <button className='eventsdash-new-event'>
            <Link to='add'>Add New Event</Link>{" "}
          </button>
          <input
            onChange={handleSearch}
            // onChange={(e) => setSearch(e.target.value)}
            className='eventsdash-search-event'
            type='text'
            placeholder='Search...'
          />
        </div>
      </div>
      <div className='table-events'>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableCell padding='checkbox'>
                  {/* <Checkbox color='primary' /> */}
                </TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Subcategory</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Start</TableCell>
                <TableCell>End</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Actions</TableCell>
                {/* <TableCell>Info</TableCell> */}
              </TableHead>
              <TableBody>
                {events.map((event) => {
                  return (
                    <TableRow hover key={event.event_id}>
                      <Checkbox
                        color='primary'
                        onChange={handleClick}
                        value={event.event_id}
                      />
                      <TableCell>{event.event_id}</TableCell>
                      <TableCell>{event.event_type}</TableCell>
                      <TableCell>{event.event_subcategory}</TableCell>
                      <TableCell>{event.event_name}</TableCell>
                      <TableCell>{event.event_date_start}</TableCell>
                      <TableCell>{event.event_date_end}</TableCell>
                      <TableCell>{event.event_address}</TableCell>
                      <TableCell>{event.event_city}</TableCell>
                      {/* <TableCell>{event.event_info}</TableCell> */}
                      <TableCell>
                        <button>
                          <Link to='edit'>Edit</Link>
                        </button>
                        <button onClick={handleDelete}>Delete</button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination rowsPerPageOptions={[5, 50]} /> */}
        </Paper>
      </div>
    </div>
  );
}

export default EventsList;
