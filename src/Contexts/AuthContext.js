/** @format */

import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // const [auth, setAuth] = useState([]);
  // I am doing this hardcoded. Changing to true and false inthe isloggedin. Later it will be the real functionality
  const [isLoggedin, setIsLoggedIn] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  //   useEffect(() => {
  //     auth();
  //   });

  return (
    <AuthContext.Provider
      value={{
        // auth,
        // setAuth,
        isLoggedin,
        setIsLoggedIn,
        showProfileDropdown,
        setShowProfileDropdown,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
