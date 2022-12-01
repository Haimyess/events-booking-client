/** @format */

import React, { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import { Link, useNavigate } from "react-router-dom";

// Material UI

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

function LoginNav() {
  const {
    auth,
    setAuth,
    isLoggedin,
    setIsLoggedIn,
    showProfileDropdown,
    setShowProfileDropdown,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    setShowProfileDropdown((value) => !value);
    setIsLoggedIn(false);
    setAuth(false);
    navigate("/login");
  }

  return (
    <>
      <div className='login-nav'>
        <input
          className='logged-user-btn'
          type='button'
          value={`Hello, ${auth[0].user_name}`}
          onClick={() => setShowProfileDropdown((prev) => !prev)}
        />
        <div className='login-nav-container'>
          {showProfileDropdown ? (
            <div className='login-nav-wrapper'>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  // bgcolor: "background.paper",
                }}>
                <nav aria-label='main mailbox folders'>
                  <List>
                    {/* Profile */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <Link to={`/user/${auth[0].user_id}`}>Profile</Link>
                      </ListItemButton>
                    </ListItem>
                    {/* Calendar */}
                    {/* <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary='Calendar' />
                      </ListItemButton> */}
                    {/* </ListItem> */}
                    {/* Your events */}
                    {/* <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary='Your events' />
                      </ListItemButton>
                    </ListItem> */}
                    {/* Logout */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText onClick={handleLogout} primary='Logout' />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Box>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default LoginNav;
