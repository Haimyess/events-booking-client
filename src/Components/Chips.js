/** @format */

import React from "react";

function Chips({ setCategories, categories, filterData, subCategoryButtons }) {
  return (
    <>
      {/* All button */}
      <button onClick={() => setCategories(categories)}>All</button>

      {/* Buttons by category */}
      {subCategoryButtons.map((btn) => {
        return (
          <button onClick={() => filterData(btn)} className='chips'>
            {btn}
          </button>
        );
      })}
    </>
  );
}

export default Chips;
