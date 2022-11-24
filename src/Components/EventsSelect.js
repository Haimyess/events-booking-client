/** @format */

import React from "react";

function EventsSelect() {
  const eventType = [
    "Cinema",
    "Sports",
    "Festivals",
    "Family",
    "Outdoors",
    "Nightlife",
  ];

  return (
    <>
      <select>
        {eventType.map((type) => {
          <option>{type}</option>;
        })}
      </select>
    </>
  );
}

export default EventsSelect;
