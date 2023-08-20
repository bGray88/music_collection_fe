import axios from "axios";

import { getAccessToken } from '../../Auth/IsAuthenticated';

export const userAlbumAddApi = async (setAddUserAlbum, albumId, setLoading) => {
  setLoading(true);
  const url = "/api/v1/user_albums"
  const data = {
    "album_id": albumId
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .post(url, data, { headers: headers })
    .then((res) => {
      console.log(res.data);
      setAddUserAlbum("added")
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const userAlbumRemoveApi = async (setAddUserAlbum, albumId, setLoading) => {
  setLoading(true);
  const url = "/api/v1/user_albums"
  const data = {
    "params": {
      "album_id": albumId
    }
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .delete(url, data, { headers: headers })
    .then((res) => {
      console.log(res.data);
      setAddUserAlbum("removed")
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const userAlbumOwnedIndexApi = async (setAlbums, setLoading) => {
  const url = "/api/v1/user_albums"
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .get(url, { headers: headers })
    .then((res) => {
      setAlbums(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}
