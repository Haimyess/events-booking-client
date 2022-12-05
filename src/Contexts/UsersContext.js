/** @format */

import React, { useState, createContext, useEffect } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https:/booking-server.onrender.com/api/users/");
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);
  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {children}
    </UsersContext.Provider>
  );
};
