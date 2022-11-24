/** @format */
import React from "react";
import { Outlet } from "react-router";

// import TablePagination from "@mui/material/TablePagination";

// Import CSS
import "../../Styles/Dashboard/dashboard.css";

function EventsDash() {
  return (
    <>
      <Outlet />
    </>
  );
}
export default EventsDash;
