import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { getAccessToken } from '../Auth/IsAuthenticated';

import './UserLogout.css'

const deleteRequest = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }

  await axios
    .delete("/api/v1/logout", { headers: headers })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
}

const UserLogout = ({ setLoggedUser, setUserName }) => {
  const navigate = useNavigate();

  useEffect(() => {
    deleteRequest();

    setLoggedUser('');
    setUserName('');

    navigate('/');
  }, [])

  return (
    <div></div>
  )
}

export default UserLogout;