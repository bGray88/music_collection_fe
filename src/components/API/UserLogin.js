import axios from "axios";

export const UserLoginApi = async (creds) => {
  return await axios
      .post("/api/v1/login", {
        login: {
          email: creds.email,
          password: creds.password
      }})
      .then((res) => {
        return res;
      })
      .catch((error) => console.log(error));
 }
 