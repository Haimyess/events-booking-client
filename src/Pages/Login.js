/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../Contexts/UsersContext";
// import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

// use axios for the post request

function Login() {
  const [user_email, setUser_Email] = useState("");
  const [user_password, setUser_Password] = useState("");
  const [users, setUsers] = useContext(UsersContext);
  // const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user_email, password: user_password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setAuth(data);
        // console.log(auth);

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
        navigate("/");
      });
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='userEmail'>Email:</label>
        <input
          type='email'
          placeholder='Please enter your email'
          autoComplete='off'
          onChange={(e) => setUser_Email(e.target.value)}
          required
          value={user_email}
          id='userEmail'
        />
        <label htmlFor='userPassword'>Password:</label>
        <input
          type='password'
          placeholder='Dont forget your password'
          onChange={(e) => setUser_Password(e.target.value)}
          required
          value={user_password}
          id='userPassword'
        />
        <button>Login</button>
      </form>
      <p>Need an account?</p>
      <p>
        return to <Link to='/'>Home </Link>
      </p>
    </>
  );
}

export default Login;
