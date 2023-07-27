import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import Loading from '../../../components/ui/loading/loading';
import Message from '../../../components/ui/message/message';
import { userLoginApi } from '../../../api/users/usersApi';
import { Authenticate } from '../../../auth/authenticate';
import { getCurrentUser } from '../../../auth/isAuthenticated';

import './userLogin.css'

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

  useEffect(() => {
    if (userData.headers) {
      setToken({
        access_token: userData.headers["x-auth-token"],
        expires: new Date(userData.headers["x-auth-expire"])
      });
      const auth = Authenticate(token);

      setUserEmail('');
      setPassword('');

      if(auth.success) {
        props.setLoggedUser(getCurrentUser());
        Cookies.set("user", userData.data.user.data[0].id);
        Cookies.set("user_name", `${userData.data.user.data[0].attributes.first_name} ${userData.data.user.data[0].attributes.last_name}`);
        navigate('/dashboard')
      } else {
        setLoginMessage(<Message message={`${auth.error}`} />);
        navigate('/signin')
      }
    }
  }, [userData, navigate, props, token])

  const submitHandler = (event) => {
    event.preventDefault();

    setLoginData({
      email:    email,
      password: password
    });

    userLoginApi(loginData, setUserData, setLoading);
  };

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
            className="btn btn-success"
          >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UserLogin;