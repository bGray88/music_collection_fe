import axios from "axios";

import { getAccessToken } from '../../auth/isAuthenticated';

export const userIndexApi = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .get("/api/v1/users", { headers: headers })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}

export const userCreateApi = async (creds, setCreate) => {
  await axios
    .post("/api/v1/register", {
      user: {
        first_name: creds.first_name,
        last_name: creds.last_name,
        email: creds.email,
        password: creds.password,
        password_confirmation: creds.password_confirmation
    }})
    .then((res) => {
      setCreate(res.data);
    })
    .catch((error) => console.log(error));
}

export const userLoginApi = async (creds, setUserData) => {
  await axios
    .post("/api/v1/login", {
      login: {
        email: creds.email,
        password: creds.password
    }})
    .then((res) => {
      setUserData(res);
    })
    .catch((error) => console.log(error));
}

export const userLogoutApi = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .delete("/api/v1/logout", { headers: headers })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}