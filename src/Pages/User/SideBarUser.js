/** @format */

import React from "react";
import { Link, useParams } from "react-router-dom";

import "../../Styles/UserAdmin/sidebar.css";

function SideBarUser() {
  const { userId } = useParams();
  return (
    <div className='user-sidebar'>
      {/* change the number to an :id for dynamic. just testing purposes right now. */}
      <Link to={`/user/${userId}`}>Profile</Link>
      <Link to='my_events'>Events</Link>
      <Link to='likes'>Likes</Link>
      <Link to='purchases'>Purchases</Link>
    </div>
  );
}

export default SideBarUser;
