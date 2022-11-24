/** @format */

// Check line 103 later. Button key prop.

import "../Styles/Category.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";

import { format, parseISO } from "date-fns";

// Importing Date picker package
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link, useParams } from "react-router-dom";
import "../Styles/EventCard.css";
import "../Styles/Category.css";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import EventCard from "../Components/EventCard";

const Category = () => {
  // const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [catBtn, setCatBtn] = useState([]);
  const [isFree, setIsFree] = useState(!false);
  const [date, setDate] = useState([]);

  // Dates
  const [startDate, setStartDate] = useState("");

  // console.log(filteredCategory);

  const params = useParams();

  // console.log(category === categoryData);
  const getCategories = async () => {
    try {
      const res = await fetch(`/api/events/category/${params.type}`);
      const data = await res.json();

      // ------------------------------------------
      // Getting just one event card --------------
      // ------------------------------------------

      // const test = data.filter((test) => test.event_name);
      // console.log(test);

      const uniqueObjects = [
        ...new Map(
          data.map((unique) => [unique["event_name"], unique])
        ).values(),
      ];
      // ------------------------------------------
      // ------------------------------------------

      // setCategory(data);
      // console.log(data);

      setCategoryData(uniqueObjects);
      setFilteredCategory(uniqueObjects);

      setCatBtn(data);
      // console.log(data);
      console.log(uniqueObjects);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, [params]);

  const subCatBtn = [...new Set(catBtn.map((btn) => btn.event_subcategory))];

  function DisplaySubcategories(currentCategory) {
    const updateCategories = categoryData.filter(
      (newCategory) => newCategory.event_subcategory === currentCategory
    );
    setFilteredCategory(updateCategories);

    console.log(currentCategory);
  }

  function handleChangeFree() {
    setIsFree((prev) => !prev);

    const showFree = categoryData.filter((free) => free.event_price === "0");
    isFree ? setFilteredCategory(showFree) : setFilteredCategory(categoryData);

    // setFilteredCategory(showFree);
  }

  const handleAll = (e) => {
    console.log(e.target);
    setCategoryData(getCategories);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const handleStartDate = (date) => {
    setStartDate(date);

    const filterStartDate = categoryData.filter(
      (dat) => format(parseISO(dat.event_day), " eee dd MMM", 1) == date
    );
    console.log(filterStartDate);
  };

  return (
    <div className='category-wrapper'>
      <h1 className='category-title'>{params.type}</h1>

      <div className='subcategories-filters'>
        {/* Creating the buttons */}
        <div className='filter-category'>
          <button className='subcategory-chips' onClick={handleAll}>
            All
          </button>

          {/* <button>All</button> */}
          {/* Show conditionally the icons in every subcategory. -->  subcategories === "Rooftop" ? icons.picnic : ""; */}
          {subCatBtn.map((subcategories) => {
            return (
              <button
                key={subcategories} //CHECK THIS ONE LATER
                className='subcategory-chips'
                onClick={() => DisplaySubcategories(subcategories)}>
                {subcategories}
              </button>
            );
          })}
          <FormGroup>
            <FormControlLabel
              control={<Switch /*defaultChecked */ />}
              label='Free'
              size='small'
              onChange={handleChangeFree}
            />
          </FormGroup>

          {/* <DatePicker
            selected={startDate}
            onChange={(date) => handleStartDate(date)}
          /> */}
        </div>

        {/* <div className='filters-select'>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked  />}
              label='Free'
              size='small'
              onChange={handleChangeFree}
            />
          </FormGroup> */}

        {/* Filter by date */}

        {/* <input
            value={date}
            className='date-filter'
            onChange={handleDate}
            type='date'
          /> */}

        {/* Filter by day */}
        {/* <div className='filter-day-btn-wrapper'>
            <button className='filter-specific-day-btn active '>Today</button>
            <button className='filter-specific-day-btn active'>Tomorrow</button>
            <button className='filter-specific-day-btn active'>Weekend</button>
          </div> */}
        {/* </div> */}
      </div>
      <div>
        {/* Creating the event cards */}
        <div className='event-card-wrapper'>
          {filteredCategory.map((event) => {
            const date = format(parseISO(event.event_day), " eee dd MMM", 1);
            console.log(typeof date);
            return <EventCard key={event.event_id} date={date} event={event} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Category;
