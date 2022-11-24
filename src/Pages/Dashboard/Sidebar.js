/** @format */

import React from "react";
import { Link } from "react-router-dom";

import "../../Styles/Dashboard/sidebar.css";

function Sidebar() {
  return (
    <>
      <div className='sidebar-container'>
        <h3>Company</h3>
        <div className='links-container'>
          <Link to='index'>Overview</Link>
          <Link to='customers'>Customers</Link>
          <Link to='orders'>Orders</Link>
          <Link to='events'>Events</Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
