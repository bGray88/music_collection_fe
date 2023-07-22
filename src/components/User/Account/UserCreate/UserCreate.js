import React, { useState } from 'react';
import axios from "axios";

import Message from '../../../Window/Message/Message'

import './UserCreate.css'

const UserCreateApi = async (creds) => {
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
        return res.data;
      })
      .catch((error) => console.log(error));
 }

const UserCreate = ({ setToken }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setUserEmail]     = useState('');
  const [password, setPassword]   = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [createResult, setCreateResult]       = useState({});

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
    setPasswordConfirm(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setCreateResult({});

    const userData = {
      first_name: firstName,
      last_name:  lastName,
      email:      email,
      password:   password,
      password_confirmation: passwordConfirm
    }

    setCreateResult(await UserCreateApi(userData));
    setFirstName('');
    setLastName('');
    setUserEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return(
    <div className="user-create">
      {createResult.success && (
        <Message />
      )}
      <h1>New User Form</h1>
      <form className='user-create_form' onSubmit={submitHandler}>
        <label>First Name</label>
        <div>
          <input type="text" value={firstName} onChange={firstNameChangeHandler} />
        </div>
        <label>Last Name</label>
        <div>
          <input type="text" value={lastName} onChange={lastNameChangeHandler} />
        </div>
        <label>Email</label>
        <div>
          <input type="text" value={email} onChange={emailChangeHandler} />
        </div>
        <label>Password</label>
        <div>
          <input type="password" value={password} onChange={passwordChangeHandler}/>
        </div>
        <label>Confirm Password</label>
        <div>
          <input type="password" value={passwordConfirm} onChange={passwordConfirmChangeHandler}/>
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

export default UserCreate;