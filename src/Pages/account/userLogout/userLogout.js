import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import { userLogoutApi } from '../../../api/users/usersApi';
import './userLogout.css'

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    userLogoutApi();

    Cookies.remove("access_token");
    Cookies.remove('user');
    Cookies.remove('user_name');

    navigate('/');
  }, [navigate])

  return (
    <div></div>
  )
}

export default UserLogout;