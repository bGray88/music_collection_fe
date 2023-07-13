import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import './UserLogin.css'

async function loginApi(creds) {
  return await axios
      .post("/api/v1/login", {
        user: {
          email: creds.email,
          password: creds.password
      }})
      .then((res) => {
        console.log(res.data);;
      })
      .catch((error) => console.log(error));
 }

const UserLogin = ({ setToken }) => {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(event);

    const userData = {
      email: email,
      date:  password
    }

    const token = await loginApi(userData);
    setToken(token);
    setUserEmail('');
    setPassword('');
  };

  return(
    <div className="user-login">
      <h1>Please Log In</h1>
      <form className='user-login_form' onSubmit={submitHandler}>
        <label>Email</label>
        <div>
          <input type="text" onChange={emailChangeHandler} />
        </div>
        <label>Password</label>
        <div>
          <input type="password" onChange={passwordChangeHandler}/>
        </div>
        <div>
        <button type="submit"
          className="btn btn-success"
        >Submit</button>
        </div>
      </form>
    </div>
  )
}

UserLogin.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default UserLogin;