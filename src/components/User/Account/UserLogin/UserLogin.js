import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import { UserLoginApi } from '../../../API/UserLogin';
import Authenticate from '../Auth/Authenticate';

import './UserLogin.css'

const UserLogin = ({ setLoggedUser, setUserName }) => {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const loginData = {
      email:    email,
      password: password
    }

    const userData = await UserLoginApi(loginData);
    setUserEmail('');
    setPassword('');
    const token = {
      access_token: userData.headers["x-auth-token"],
      expires: new Date(userData.headers["x-auth-expire"])
    }
    Authenticate(token, navigate);
    setLoggedUser(userData.data.user.data[0]);
    setUserName(`${userData.data.user.data[0].attributes.first_name} ${userData.data.user.data[0].attributes.last_name}`);
  };

  return(
    <div className="user-login">
      <h1>Please Log In</h1>
      <form className='user-login_form' onSubmit={submitHandler}>
        <label>Email</label>
        <div>
          <input type="text" value={email} onChange={emailChangeHandler} />
        </div>
        <label>Password</label>
        <div>
          <input type="password" value={password} onChange={passwordChangeHandler}/>
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

export default UserLogin;