/** @format */

import React from "react";

function Buttons({ button, filter }) {
  return (
    <>
      {button.map((subcategory, i) => {
        return (
          <button onClick={() => filter(subcategory)}>{subcategory}</button>
        );
      })}
      ;
    </>
  );
}
export default Buttons;
