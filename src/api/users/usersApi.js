import axios from "axios";

import { getAccessToken } from '../../Auth/IsAuthenticated';

export const userIndexApi = async (setUserAlbums, setLoading) => {
  setLoading(true);
  const url = "/api/v1/users";
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  axios
    .get(url, { headers: headers })
    .then((res) => {
      setUserAlbums(res.data.data);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const userCreateApi = async (creds, setCreate, setLoading) => {
  setLoading(true);
  const url = "/api/v1/register";
  const data = {
    "user": {
      "first_name": creds.first_name,
      "last_name": creds.last_name,
      "email": creds.email,
      "password": creds.password,
      "password_confirmation": creds.password_confirmation
    }
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .post(url, data, { headers: headers })
    .then((res) => {
      setCreate(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const userLoginApi = async (creds, setUserData, setLoading) => {
  setLoading(true);
  const url = "/api/v1/login";
  const data = {
    "login": {
      "email": creds.email,
      "password": creds.password
    }
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .post(url, data, { headers: headers })
    .then((res) => {
      setUserData(res);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const userLogoutApi = async (setLoading) => {
  setLoading(true);
  const url = "/api/v1/logout";
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .delete(url, { headers: headers })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}