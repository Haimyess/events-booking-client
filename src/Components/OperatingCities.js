/** @format */

import React from "react";

function OperatingCities() {
  const cities = ["Tel aviv", "Jerusalem"];

  return (
    <>
      <select>
        {cities.map((city) => {
          <option>{city}</option>;
        })}
      </select>
    </>
  );
}

export default OperatingCities;
