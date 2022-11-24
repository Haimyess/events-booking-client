/** @format */

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../Contexts/UsersContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Join() {
  // The names of the states should be equal to the column name in the backend

  const [user_name, setUser_Name] = useState("");
  const [user_email, setUser_Email] = useState("");
  const [user_password, setUser_Password] = useState("");
  const [users, setUsers] = useContext(UsersContext);
  const navigate = useNavigate();

  const user_id = uuidv4();

  const addUser = (e) => {
    e.preventDefault();
    fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, user_name, user_email, user_password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(users);
        setUser_Name("");
        setUser_Email("");
        setUser_Password("");
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/login");
  };

  return (
    <div className='signup-wrapper'>
      <div className='signup-form-wrapper'>
        <h1>Sign up to OutlandLife</h1>
        <div className='signup-form-container'>
          <form onSubmit={addUser}>
            Name:{" "}
            <input
              type='text'
              value={user_name}
              onChange={(e) => setUser_Name(e.target.value)}
            />
            E-mail:{" "}
            <input
              type='email'
              value={user_email}
              onChange={(e) => setUser_Email(e.target.value)}
            />
            Password:{" "}
            <input
              type='password'
              value={user_password}
              onChange={(e) => setUser_Password(e.target.value)}
            />
            <div>
              <input type='checkbox' />
              <p>
                Creating an account means you’re okay with our{" "}
                <span>Terms of Service, Privacy Policy</span>, and our default{" "}
                <span>Notification Settings</span>.
              </p>
            </div>
            <button type='submit'>Create Account</button>
            <p>
              Already a member? <Link to='/login'>Sign In</Link>
            </p>
          </form>
        </div>
      </div>
      <div className='signup-image'>
        <img src='' alt='' />
      </div>
    </div>
  );
}

export default Join;
