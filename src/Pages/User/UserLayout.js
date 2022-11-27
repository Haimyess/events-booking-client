/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";

import SideBarUser from "./SideBarUser";

import "../../Styles/UserAdmin/userlayout.css";

function UserLayout() {
  return (
    <div>
      <Header />
      <div className='user-layout-wrapper'>
        <SideBarUser />
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
