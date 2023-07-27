import axios from "axios";

export const albumIndexApi = async (setAlbums, search) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get("/api/v1/albums", { 
      params: {
        search: search
      },
      headers: headers })
    .then((res) => {
      console.log(res);
      setAlbums(res.data.data);
    })
    .catch((error) => console.log(error));
}
