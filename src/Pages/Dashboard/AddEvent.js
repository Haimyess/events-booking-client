/** @format */

// 1. Select on cascade
// 2. Retrieve all data from inputs
// 3. Make the POST to DATABASE
// 4. See the new Event added

import React, { useState, useContext } from "react";

import {
  Box,
  Container,
  DesktopDatePicker,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";

// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import "../../Styles/Dashboard/addevent.css";

import { EventsContext } from "../../Contexts/EventsContext";

function AddEvent() {
  const [events, setEvents] = useContext(EventsContext);

  const [event_name, setEvent_Name] = useState("");
  const [event_type, setEvent_Type] = useState("");
  const [event_city, setEvent_City] = useState("");
  const [event_subcategory, setEvent_Subcategory] = useState("");
  const [event_info, setEvent_Info] = useState("");
  // const [event_price, setEvent_Price] = useState("");
  const [event_address, setEvent_Address] = useState("");
  const [event_date_start, setEvent_Date_Start] = useState(new Date());
  const [event_date_end, setEvent_Date_End] = useState(new Date());
  //   const [hours, setHours] = useState("");
  //   const [dates, setDates] = useState("");

  // console.log(event_date_start);
  // console.log(event_type);
  // const cities = events
  //   .map((city) => {
  //     return city.event_city;
  //   })
  //   .splice(0, 1);

  // const types = [
  //   { type: "Cinema", id: events.includes("Cinema") },
  //   { type: "Festival", id: ids.includes("Festival") },
  //   { type: "Outdoor", id: ids.includes("Outdoor") },
  // ];
  const cities = ["Tel Aviv"];
  const types = ["Cinema", "Festival", "Shows", "Exhibitions"];

  const subcategories = [
    {
      Cinema: [
        "Action",
        "Science Fiction",
        "Drama",
        "Comedy",
        "Muscial",
        "Horror",
        "Fantasy",
        "Romance",
        "Mystery",
      ],
    },
    {
      Festival: [
        "Food",
        "Musical",
        "Beer",
        "Film",
        "Cultural",
        "Historical",
        "Season",
      ],
    },
    { Shows: ["Comedy", "Magic", "Theather"] },
    {
      Exhibitions: [
        "Museum",
        "Photography",
        "Fashion",
        "Art",
        "sensory experiences",
      ],
    },
  ];

  // console.log(types);

  const addEvent = (e) => {
    e.preventDefault();

    fetch("/api/events/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name,
        event_type,
        event_city,
        event_subcategory,
        event_info,
        event_address,
        event_date_start,
        event_date_end,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add Event</h1>

      <Container>
        <Box>
          {/* <FormControl onSubmit={addEvent}> */}
          {/* Name */}
          <form onSubmit={addEvent} className='add-user-form'>
            <TextField
              className='input'
              id='outlined-basic'
              label='Name'
              value={event_name}
              variant='outlined'
              onChange={(e) => setEvent_Name(e.target.value)}
            />
            {/* Type */}
            <FormControl fullWidth className='input'>
              <InputLabel id='demo-simple-select-label'>Type</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={event_type}
                label='Type'
                onChange={(e) => setEvent_Type(e.target.value)}>
                {/* {events.map((type) => {
                return (
                  <MenuItem value={type.event_type}>{type.event_type}</MenuItem>
                );
              })} */}

                {types.map((types) => {
                  return (
                    <MenuItem key={types} value={types}>
                      {types}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {/* Subcategory */}
            {/* <FormControl fullWidth className='input'>
              <InputLabel id='demo-simple-select-label'>Type</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={event_subcategory}
                label='Subcategory'
                onChange={(e) => setEvent_Subcategory(e.target.value)}> */}
            {/* {events.map((type) => {
                return (
                  <MenuItem value={type.event_type}>{type.event_type}</MenuItem>
                );
              })} */}

            {/* {subcategories[event_type].map((subcategory) => {
                  return (
                    <MenuItem key={subcategory} value={subcategory}>
                      {subcategory}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl> */}

            {/* City */}
            <FormControl fullWidth className='input'>
              <InputLabel id='demo-simple-select-label'>City</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={event_city}
                label='Type'
                onChange={(e) => setEvent_City(e.target.value)}>
                {/* {events.map((city) => {
                  return (
                    <MenuItem value={city.event_city}>{city.event_city}</MenuItem>
                  );
                })} */}
                {cities.map((city) => {
                  return <MenuItem value={city}>{city}</MenuItem>;
                })}
              </Select>
            </FormControl>

            {/*Price  */}
            {/* <TextField
              className='input'
              id='outlined-basic'
              label='Price'
              variant='outlined'
              onChange={(e) => setEvent_Price(e.target.value)}
            /> */}

            {/* Address */}
            <TextField
              className='input'
              id='outlined-basic'
              label='Address'
              variant='outlined'
              onChange={(e) => setEvent_Address(e.target.value)}
            />

            {/* Start */}
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                className='input'
                disablePast
                label='Start'
                openTo='day'
                views={["day", "month", "year"]}
                value={event_date_start}
                onChange={(newValue) => setEvent_Date_Start(newValue)}
                renderInput={(params) => <TextField {...params} />}
                showDaysOutsideCurrentMonth
              />
            </LocalizationProvider>

            {/* End */}
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                className='input'
                // disableFuture
                label='end'
                openTo='day'
                views={["day", "month"]}
                value={event_date_end}
                onChange={(newValue) => setEvent_Date_End(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <div>
              <TextField
                className='input'
                sx={{ width: "25ch" }}
                id='outlined-multiline-static'
                label='Multiline'
                multiline
                rows={4}
                defaultValue='Event info here!'
              />
            </div>

            <input type='submit' value='Add' />
          </form>

          {/* </FormControl> */}
        </Box>
      </Container>
    </div>
  );
}

export default AddEvent;

//   <div>
//     <form>
//       <label>Name:</label>
//       <input type='text' />
//       <label>Type:</label>
//       <select>
//         {events.map((type) => {
//           <option>{type.event_type}</option>;
//         })}
//       </select>
//       <label>Price:</label>
//       <input type='text' />
//       <label>Address:</label>
//       <input type='text' />
//       <label>Start</label>
//       <input type='date' />
//       <label>End</label>
//       <input type='date' />
//     </form>
//   </div>;
