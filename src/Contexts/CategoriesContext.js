/** @format */

import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";

// We export and iport movieContext in the components we want to access this information
export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  // console.log(categories);

  const params = useParams();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          `https://booking-server.onrender.com/api/events/category/${params.type}`
          // `/api/events/category/${params.type}`
        );
        const data = await res.json();

        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, [categories, setCategories, params.type]);
  return (
    <CategoriesContext.Provider value={[categories, setCategories]}>
      {children}
    </CategoriesContext.Provider>
  );
};
