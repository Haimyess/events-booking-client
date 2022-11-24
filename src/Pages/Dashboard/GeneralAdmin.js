/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";
import Navbar from "../Dashboard/Navbar";

import "../../Styles/Dashboard/dashboard.css";

function GeneralAdmin() {
  return (
    <>
      <Navbar />
      <div className='main-dashboard'>
        <Sidebar />

        <Outlet />
      </div>
    </>
  );
}

export default GeneralAdmin;

{
  /* <div className='main-container'>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Events</li>
            <li>Profile</li>
          </ul>
        </nav> */
}
{
  /* <main> */
}
{
  /* Add an aside with the links for the info. See the events, users, orders and an overvire of everthing. in the events i will be able to do the following: */
}
{
  /* Add event */
}
{
  /* Delete Event */
}
{
  /* Update event */
}
{
  /* <h1>Add an event</h1>
          <form action=''>
            Name of the event: <input type='text' placeholder='' />
            {}
            Type of event: <EventsSelect />
            Where the event is going to be: <input type='text' />
            City: <OperatingCities />
            Price: <input type='text' />
            Start date: Finish date: Start hour: Finish hour:
            <textarea></textarea>
            <button type='submit'>Add</button>
          </form>
        </main>
      </div> */
}
