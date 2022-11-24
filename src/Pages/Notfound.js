/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>
        Page not found. Please go back to <Link to={"/"}>Home</Link>
      </p>
    </>
  );
};

export default NotFound;
