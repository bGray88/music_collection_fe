import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import Message from '../../../Window/Message/Message'
import { UserLoginApi } from '../../../API/UserLogin';
import { Authenticate } from '../Auth/Authenticate';

import './UserLogin.css'

const UserLogin = () => {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [token, setToken] = useState({});
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

    const userData = (await UserLoginApi(loginData));
    if(userData?.headers) {
      setToken({
        access_token: userData.headers["x-auth-token"],
        expires: new Date(userData.headers["x-auth-expire"])
      });
    }
    const auth = Authenticate(token)

    setUserEmail('');
    setPassword('');

    if(auth?.success) {
      Cookies.set("user", userData.data.user.data[0]);
      Cookies.set("user_name", `${userData.data.user.data[0].attributes.first_name} ${userData.data.user.data[0].attributes.last_name}`);
      navigate('/dashboard');
    } else {
      setLoginMessage(<Message message={`${auth.error}`} />);
      navigate('/signin');
    }
  };

  return(
    <div className="user-login">
      {loginMessage}
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