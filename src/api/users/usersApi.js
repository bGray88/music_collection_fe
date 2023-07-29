import axios from "axios";

import { getAccessToken } from '../../auth/isAuthenticated';

export const userIndexApi = async (setUserAlbums, setLoading) => {
  setLoading(true);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  axios
    .get("/api/v1/albums", {
      headers: headers
    })
    .then((res) => {
      setUserAlbums(res.data.data);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const userCreateApi = async (creds, setCreate, setLoading) => {
  setLoading(true);
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .post("/api/v1/register", {
      user: {
        first_name: creds.first_name,
        last_name: creds.last_name,
        email: creds.email,
        password: creds.password,
        password_confirmation: creds.password_confirmation
      },
      headers: headers
    })
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
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .post("/api/v1/login", {
      login: {
        email: creds.email,
        password: creds.password
      },
      headers: headers
    })
    .then((res) => {
      setUserData(res);
      console.log(res.data);
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
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .delete("/api/v1/logout", { headers: headers })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}