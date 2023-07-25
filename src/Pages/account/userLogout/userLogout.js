import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import Loading from '../../../components/ui/loading/loading';
import { userLogoutApi } from '../../../api/users/usersApi';
import './userLogout.css'
import { getAccessToken } from '../../../auth/isAuthenticated';

const UserLogout = () => {
  const [isLoading, setLoading] = useState(true);
  const [currentDisplay, setCurrentDisplay] = useState(<Loading />);
  const navigate = useNavigate();

  useEffect(() => {
    userLogoutApi(setLoading, getAccessToken());

    Cookies.remove("access_token");
    Cookies.remove('user');
    Cookies.remove('user_name');

    navigate('/');
  }, [])

  return (
    <div>{currentDisplay}</div>
  )
}

export default UserLogout;