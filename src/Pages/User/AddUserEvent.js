/** @format */

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../Contexts/AuthContext";

// Styles
import "../../Styles/UserAdmin/adduserevent.css";

import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function AddUserEvent() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  // console.log(auth[0].userName);
  const [values, setValues] = useState({
    // cat: "",
    subcat: "",
    name: "",
    address: "",
    price: "",
    city: "",
    info: "",
    time: "",
    // img: ''
  });
  const [selectedCat, setSelectedCat] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // Select info

  // Cities

  const cities = ["Tel Aviv"];

  // Type:

  const types = [
    { typeName: "Festival", id: 1 },
    { typeName: "Outdoor", id: 2 },
    { typeName: "Activities", id: 3 },
    { typeName: "Cinema", id: 4 },
  ];

  // Subcategory by type

  const subcategories = {
    Festival: ["Local", "Food", "Music"],
    Outdoor: ["Rooftop"],
    Activities: ["Escape Room"],
    Cinema: ["Action", "Science Fiction", "Romance", "Musical", "Horror"],
  };

  // Inputs
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  // const handleDate = (newDate) => {
  //   setStartDate(newDate);
  //   setEndDate(newDate;
  // };

  // Form Submit function
  const addEvent = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "/api/events/add",
      data: {
        event_type: selectedCat,
        event_subcategory: values.subcat,
        event_name: values.name,
        event_date_start: startDate,
        event_date_end: endDate,
        event_time: values.time,
        event_info: values.info,
        event_address: values.address,
        event_city: values.city,
        event_price: values.price,
        event_img: auth[0].userName,
        event_producer: auth[0].userName,
      },
    });

    navigate("/user/1/my_events");

    // POST
    // pass user id and event id
  };

  return (
    <div>
      <div className='form-container'>
        <h2 className='title'>New Event</h2>
        <form className='add-event-form' onSubmit={addEvent}>
          <div className='form-inputs'>
            <div className='label-inputs'>
              <label>Type:</label>
              {/* <input type='text' onChange={handleInputs} /> */}
              {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
              <Select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem>
                  <em>None</em>
                </MenuItem>
                {types.map((type) => {
                  return (
                    <MenuItem key={type.id} value={type.typeName}>
                      {type.typeName}
                    </MenuItem>
                  );
                })}
              </Select>
              {/* <FormHelperText>Without label</FormHelperText> */}
              {/* </FormControl> */}
            </div>

            {/* Cascading Select */}
            <div className='label-inputs'>
              <label>Subcategory:</label>
              <Select
                value={values.subcat}
                onChange={handleInputs}
                name='subcat'
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem>
                  <em>None</em>
                </MenuItem>
                {subcategories[selectedCat]?.map((subcategory, i) => {
                  return (
                    <MenuItem key={i} value={subcategory}>
                      {subcategory}
                    </MenuItem>
                  );
                })}
              </Select>

              {/* <input
                type='text'
                name='subcat'
                onChange={handleInputs}
                value={values.subcat}
              /> */}
            </div>
            <div className='label-inputs'>
              <label>Name:</label>
              <TextField
                name='name'
                onChange={handleInputs}
                value={values.name}
              />
            </div>

            <div className='label-inputs'>
              <label>Price</label>
              <TextField
                name='price'
                onChange={handleInputs}
                value={values.price}
              />
            </div>
            {values.subcat !== "Escape Room" ? (
              <div className='inputs-group'>
                <div className='label-inputs'>
                  <label>Date start:</label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      // label='Date desktop'
                      inputFormat='MM/dd/yyyy'
                      value={startDate}
                      onChange={(e) => setStartDate(e)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className='label-inputs'>
                  <label>Date end:</label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      // label='Date desktop'
                      inputFormat='MM/dd/yyyy'
                      value={endDate}
                      onChange={(e) => setEndDate(e)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className='inputs-group'>
              <div className='label-inputs'>
                <label>City:</label>
                <Select
                  sx={{ width: "100px" }}
                  value={values.city}
                  onChange={handleInputs}
                  name='city'
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}>
                  <MenuItem>
                    <em>None</em>
                  </MenuItem>
                  {cities.map((city, i) => {
                    return (
                      <MenuItem key={i} value={city}>
                        {city}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
              <div className='label-inputs'>
                <label>Time:</label>
                <TextField
                  name='time'
                  onChange={handleInputs}
                  value={values.time}
                />
              </div>
            </div>
            <div className='label-inputs'>
              <label>Address:</label>
              <TextField
                // sx={{ width: "100%" }}
                name='address'
                onChange={handleInputs}
                value={values.address}
              />
            </div>
            {/* Info of the event with buttons to bold, etc */}
          </div>
          <div className='text-area-container'>
            <label>Description</label>
            <textarea
              rows={4}
              className='add-event-info'
              name='info'
              onChange={handleInputs}
              value={values.info}
            />
          </div>
          <input className='add-btn' type='submit' value='add' />
        </form>
      </div>
    </div>
  );
}

export default AddUserEvent;
