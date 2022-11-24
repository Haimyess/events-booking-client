/** @format */

import React from "react";

import "../../Styles/Dashboard/navbar.css";

function Navbar() {
  return (
    <>
      <nav className='nav-container'>
        <div>
          <span>Companies Logo</span>
        </div>
        <div className='user-info'>
          <div>notifications</div>
          <div>User info dropdown</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
