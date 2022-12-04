/** @format */

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../Contexts/UsersContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// Styles
import "../Styles/join.css";
import logo from "../Media/logo.png";

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
    // Whole screen
    <div className='signup-wrapper'>
      {/* Left side */}
      <div className='signup-form-wrapper'>
        <div>
          <div className='signup-form-container'>
            <form onSubmit={addUser} className='join-form'>
              <h2 className='join-title'>Create your free account</h2>
              <label className='join-label'>Name:</label>
              <input
                className='join-input'
                placeholder='Your name'
                type='text'
                value={user_name}
                onChange={(e) => setUser_Name(e.target.value)}
              />
              <label className='join-label'>E-mail:</label>
              <input
                className='join-input'
                placeholder='example@email.com'
                type='email'
                value={user_email}
                onChange={(e) => setUser_Email(e.target.value)}
              />
              <label className='join-label'>Password:</label>
              <input
                className='join-input'
                placeholder='Enter password'
                type='password'
                value={user_password}
                onChange={(e) => setUser_Password(e.target.value)}
              />
              <button className='join-btn' type='submit'>
                Create Account
              </button>
              <div>
                <p className='agreement-text'>
                  Creating an account means you’re okay with our{" "}
                  <span>Terms of Service, Privacy Policy</span>, and our default{" "}
                  <span>Notification Settings</span>.
                </p>
              </div>

              <p>
                Already a member? <Link to='/login'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='signup-image'>
        <img src={logo} alt='' className='join-logo' />
      </div>
    </div>
  );
}

export default Join;
