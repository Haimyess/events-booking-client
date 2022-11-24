/** @format */

// /** @format */

// import React, { useContext, useState } from "react";
// import { CategoriesContext } from "../CategoriesContext";
// import Buttons from "../components/Buttons";
// import Menu from "../components/Menu";

// function Test() {
//   const [categories, setCategories] = useContext(CategoriesContext);

//   const subcategoryBtns = [ "All",...new Set(categories.map((subBtn) => { subBtn.event_subcategory;
//       })
//     ),
//   ];
//   const [buttons, setButtons] = useState(subcategoryBtns);

//   const filter = (button) => {
//     if (button === "All") {
//       setCategories(categories);
//     }
//     const filteredData = { CategoriesContext }.filter(
//       (category) => category.event_subcategory === button
//     );
//     setCategories(filteredData);
//   };

//   return (
//     <>
//       <Buttons button={buttons} filter={filter} />
//       <Menu categories={categories} />
//     </>
//   );
// }

// export default Test;
