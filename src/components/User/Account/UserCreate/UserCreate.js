import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import './UserCreate.css'

async function createApi(creds) {
  return await axios
      .post("/api/v1/register", {
        user: {
          first_name: creds.first_name,
          last_name: creds.last_name,
          email: creds.email,
          password: creds.password,
          password_confirmation: creds.password_confirmation
      }})
      .then((res) => {
        console.log(res.data);;
      })
      .catch((error) => console.log(error));
 }

const UserCreate = ({ setToken }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  }
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }
  const passwordConfirmChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(event);

    const userData = {
      email: email,
      date:  password
    }

    const token = await createApi(userData);
    setToken(token);
    setUserEmail('');
    setPassword('');
  };

  return(
    <div className="user-create">
      <h1>New User Form</h1>
      <form className='user-create_form' onSubmit={submitHandler}>
        <label>First Name</label>
        <div>
          <input type="text" onChange={firstNameChangeHandler} />
        </div>
        <label>Last Name</label>
        <div>
          <input type="text" onChange={lastNameChangeHandler} />
        </div>
        <label>Email</label>
        <div>
          <input type="text" onChange={emailChangeHandler} />
        </div>
        <label>Password</label>
        <div>
          <input type="password" onChange={passwordChangeHandler}/>
        </div>
        <label>Confirm Password</label>
        <div>
          <input type="password" onChange={passwordConfirmChangeHandler}/>
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

UserCreate.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default UserCreate;