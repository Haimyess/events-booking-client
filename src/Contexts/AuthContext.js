/** @format */

import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);
  const [loading, setLoading] = useState(true);
  //  {userName: "Haim", id: 1 }
  // I am doing this hardcoded. Changing to true and false inthe isloggedin. Later it will be the real functionality
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  //   useEffect(() => {
  //     auth();
  //   });

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        isLoggedin,
        setIsLoggedIn,
        showProfileDropdown,
        setShowProfileDropdown,
        loading,
        setLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
