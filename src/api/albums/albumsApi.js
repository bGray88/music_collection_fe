import axios from "axios";

export const albumIndexApi = async (setAlbums) => {
  await axios
    .get("/api/v1/albums")
    .then((res) => {
      setAlbums(res.data.data);
    })
    .catch((error) => console.log(error));
}
