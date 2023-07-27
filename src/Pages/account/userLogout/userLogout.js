import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import Loading from '../../../components/ui/loading/loading';
import { userLogoutApi } from '../../../api/users/usersApi';
import './userLogout.css'
import { getAccessToken } from '../../../auth/isAuthenticated';

const UserLogout = (props) => {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    userLogoutApi(setLoading, getAccessToken());
    props.setLoggedUser('');

    Cookies.remove("access_token");
    Cookies.remove('user');
    Cookies.remove('user_name');

    navigate('/');
  }, [props, navigate])

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