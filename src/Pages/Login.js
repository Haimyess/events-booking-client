/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { UsersContext } from "../Contexts/UsersContext";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import "../Styles/login.css";

// use axios for the post request

function Login() {
  const [user_email, setUser_Email] = useState("");
  const [user_password, setUser_Password] = useState("");
  // const [users, setUsers] = useContext(UsersContext);
  const { auth, setAuth, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://booking-server.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: user_email,
        user_password: user_password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAuth(data);
        console.log(auth);

        // const res = await fetch("api/users/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email: user_email, password: user_password }),
        // });
        // const data = await res.json();
        // setAuth(data);
        // use axios here to make the post request
        if (auth !== "") {
          setIsLoggedIn(true);
          navigate("/");
        }
      });
  };

  return (
    <div className='background'>
      <div className='login-wrapper'>
        <div className='login-container'>
          <h2 className='login-title'>Log in to your account</h2>
          <div>
            {/* <div className='form-container'> */}
            <form className='login-form' onSubmit={handleSubmit}>
              <label htmlFor='userEmail'>Email:</label>
              <input
                type='email'
                placeholder='Please enter your email'
                autoComplete='off'
                onChange={(e) => setUser_Email(e.target.value)}
                required
                value={user_email}
                id='userEmail'
                className='login-email-input'
              />
              <label htmlFor='userPassword'>Password:</label>
              <input
                type='password'
                placeholder='Dont forget your password'
                onChange={(e) => setUser_Password(e.target.value)}
                required
                value={user_password}
                id='userPassword'
                className='login-pass-input'
              />
              <input type='submit' value='Login' className='login-button' />
            </form>
          </div>
          <p className='need-account-login'>
            Need an account? &nbsp;
            <Link className='signup-link' to='/register'>
              Sign up now
            </Link>
          </p>
          <p>
            return to{" "}
            <Link className='go-home' to='/'>
              Home{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
