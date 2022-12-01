/** @format */

import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShare } from "@fortawesome/free-solid-svg-icons";
// import {
//   faHeart,
//   faCircleCheck,
//   faPaperPlane,
// } from "@fortawesome/free-regular-svg-icons";

import { NavLink } from "react-router-dom";
import "../Styles/socialbar.css";

function SocialBar({ event }) {
  return (
    <nav className='social-container'>
      <div className='tabs-social'>
        <NavLink
          className='tabs-social-link'
          to='info'
          state={{ currEvent: event }}>
          Information
        </NavLink>
        <NavLink className='tabs-social-link' to='feed'>
          Feed
        </NavLink>
      </div>
      {/* <div className='social'>
        <button className='event-social-icon'>
          <FontAwesomeIcon icon={faHeart} />
          <span className='event-icon-text'>Like</span>
        </button>
        <button className='event-social-icon'>
          <FontAwesomeIcon icon={faShare} />{" "}
          <span className='event-icon-text'>Share</span>
        </button>
       
      </div> */}
    </nav>
  );
}

export default SocialBar;
