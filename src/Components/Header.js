/** @format */
// Components
import LoginNav from "./LoginNav";

// Context AUTH USER
import { AuthContext } from "../Contexts/AuthContext";

// Routing
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "../Styles/Header.css";

// importing logo
import logo from "../Media/logo-nombre-color.png";
import SubNav from "./SubNav";
import SearchBar from "./SearchBar";

// Importing icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// -------------------------------------------
// Testing the changing button login div based on boolean is log in or not
// -------------------------------------------

// const [isLoggedin, setIsLoggedIn] = useState(false);
// Log in
// function login () {
//   setIsLoggedIn(true)
// }
// Log out
//  function logout () {
//   setIsLoggedIn(false)
// }

// return (
//   <div className="App">
//     <>
//     {
//     isLoggedin ?
//     <div>

// manage account
// tickets
// rewards
// saved log out
//    <li>orders</li>
//    <button onClick={logout}>logout</button>
//     </div>
//        :  <button onClick = {login}>Login</button>
//     }

{
  /* <button> sign in </button> */
}

//     </>
// </div>

// -------------------------------------------
// -------------------------------------------

function Header() {
  const { isLoggedin, setIsLoggedIn, auth } = useContext(AuthContext);
  console.log(isLoggedin);
  console.log(auth);
  return (
    <>
      <div className='wrapper'>
        {/* Main header. Upper part. TOP */}
        <div className='flex'>
          {/* Logo and location */}
          <div className='header-left'>
            <Link to='/'>
              <img className='logo' src={logo} />
            </Link>
            {/* Location button */}
            <button className='btn-select-city'>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} size='lg' />{" "}
              <span className='text-select-city'> Tel Aviv</span>
            </button>
          </div>
          {/* Search */}
          <div className='header-center'>
            <SearchBar />
          </div>
          {/* Icons */}
          <div className='header-right'>
            <a className='business-link' href='#'>
              Businesses
            </a>

            {isLoggedin ? (
              <LoginNav />
            ) : (
              <div className='login-btns'>
                {/* <Link className='join-btn' to='/register'>
                  Join
                </Link> */}
                <Link className='login-btn' to='/login'>
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Sub navbar */}
        </div>
        {/* <hr className='line' /> */}
        <nav className='nav'>
          <SubNav />
        </nav>
      </div>
    </>
  );
}

export default Header;

{
  /* <ul> */
}
{
  /* It works like href in CSS link + to = '' */
}

{
  /* <li>
    <Link to='/EventsAll'>All the Events</Link>
  </li>
  <li>
    <Link to='/Checkout'> Checkout </Link>
  </li>
  <li>
    <Link to='/Likes'> Likes </Link>
  </li> */
}
{
  /* </ul> */
}
