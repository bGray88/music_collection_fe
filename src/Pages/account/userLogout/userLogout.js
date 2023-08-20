import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import Loading from '../../../Components/UI/Loading/Loading';
import { userLogoutApi } from '../../../API/Users/UsersApi';
import { getAccessToken } from '../../../Auth/IsAuthenticated';

import './UserLogout.css'

const UserLogout = (props) => {
  const { setLoggedUser } = props;
  const { loggedUser } = props;
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    userLogoutApi(setLoading, getAccessToken());
    setLoggedUser('');

    Cookies.remove("access_token");
    Cookies.remove('user');
    Cookies.remove('user_name');

    navigate('/');
  }, [loggedUser, navigate])

  if (isLoading) {
    return (
      <div className='create-loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default UserLogout;