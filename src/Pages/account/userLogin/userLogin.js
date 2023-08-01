import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import Loading from '../../../components/ui/loading/loading';
import Message from '../../../components/ui/message/message';
import { userLoginApi } from '../../../api/users/usersApi';
import { Authenticate } from '../../../auth/authenticate';

import './userLogin.css'
import { getCurrentUser, isAuthenticated } from '../../../auth/isAuthenticated';

const UserLogin = (props) => {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [token, setToken] = useState({});
  const [loginData, setLoginData] = useState({});
  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setLoginData({
      email:    email,
      password: password
    });
  };

  useEffect(() => {
    userLoginApi(loginData, setUserData, setLoading);
  }, [loginData]);

  useEffect(() => {
    if (userData.headers) {
      setToken({
        access_token: userData.headers["x-auth-token"],
        expires: new Date(userData.headers["x-auth-expire"])
      });
      const auth = Authenticate(token);

      setUserEmail('');
      setPassword('');

      if(isAuthenticated()) {
        Cookies.set("user_email", userData.data.user.data[0].attributes.email);
        Cookies.set("user_name", `${userData.data.user.data[0].attributes.first_name} ${userData.data.user.data[0].attributes.last_name}`);
        Cookies.set("user", JSON.stringify(userData.data.user.data[0]));
        props.setLoggedUser(JSON.parse(getCurrentUser()));
        setLoginMessage(<Message message={"Credentials Verified"} />);
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
      }
    }
  }, [userData, token])

  if (isLoading) {
    return (
      <div className='create-loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
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
            className="btn btn-success_login"
          >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UserLogin;