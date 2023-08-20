import axios from "axios";

export const WelcomeApi = async (setLoading) => {
  setLoading(true);
  const url = "/api/v1/albums"
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get(url, { headers: headers })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}