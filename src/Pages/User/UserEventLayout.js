/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

function UserEventLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default UserEventLayout;
