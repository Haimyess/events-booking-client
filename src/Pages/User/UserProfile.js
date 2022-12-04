/** @format */

import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

// styles
import "../../Styles/UserAdmin/userprofile.css";

function UserProfile() {
  const { userId } = useParams();
  const { auth, setAuth } = useContext(AuthContext);
  const name = auth[0].user_name;
  const nameFirstLetterUp = name[0].toUpperCase() + name.slice(1);
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(nameFirstLetterUp);
  const email = auth[0].user_email;
  const pass = auth[0].user_password;
  const [editPass, setEditPass] = useState(pass);
  const [editEmail, setEditEmail] = useState(email);
  const [msg, setMsg] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const hashPass = () => {
    let hashArr = [];
    for (let i = 0; i < pass.length; i++) {
      if (i !== "*") {
        hashArr.push("*");
      }
    }
    return hashArr;
  };

  const hashedPass = hashPass();

  // console.log(editName);
  const editProfile = () => {
    setIsEdit((prev) => !prev);
    isEdit === false && setEditName(nameFirstLetterUp);
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    // const editUrl = "";
    // const response = await axios.put(editUrl);

    const edit = {
      user_name: editName,
      user_email: editEmail,
      user_password: editPass,
    };

    const editUrl = `/api/users/${userId}`;
    const response = await axios.put(editUrl, edit);
    setAuth(response.data);

    // put request

    setMsg(true);
    // setEdit
    setIsEdit(false);
  };

  // useEffect(() => {
  //   handleEditProfile();
  // }, [editName, editEmail, editPass]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMsg(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [auth]);

  return (
    <div className='user-profile-wrapper'>
      {/* Dynamic data based on the login user */}
      <h1>Welcome back {nameFirstLetterUp} !</h1>
      {/* <p>Joined ...</p> */}
      <br />
      <h3>Profile Info</h3>
      <button onClick={editProfile}>{isEdit ? "cancel" : "edit"}</button>
      <br />
      <br />

      {/* <p>User ID: ...</p> */}

      <div className='form-wrapper'>
        <form
          id='edit-profile'
          onSubmit={handleEditProfile}
          className='user-profile-form'>
          {/* Name */}
          <div className='edit-user-input-group'>
            <label>Name: </label>
            {isEdit ? (
              <input
                type='text'
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            ) : (
              <p>{nameFirstLetterUp}</p>
            )}
          </div>
          {/* Email */}
          <div className='edit-user-input-group'>
            <label>Email: </label>
            {isEdit ? (
              <input
                type='email'
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            ) : (
              <p>{auth[0].user_email}</p>
            )}
          </div>
          <div className='edit-user-input-group'>
            {/* Password */}
            <label>Password: </label>
            {isEdit ? (
              <input
                type={showPass ? "text" : "password"}
                value={editPass}
                onChange={(e) => setEditPass(e.target.value)}
              />
            ) : (
              <p>{hashedPass}</p>
            )}
          </div>
        </form>
        <div className='btn-container'>
          {isEdit ? (
            <button className='save-edit' form='edit-profile'>
              save
            </button>
          ) : (
            ""
          )}
        </div>
        {msg && <p>Update successful!</p>}
      </div>
    </div>
  );
}

export default UserProfile;
