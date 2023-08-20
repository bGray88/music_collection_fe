import axios from "axios";

import { getAccessToken } from '../../Auth/IsAuthenticated';

export const artistAddApi = async (setAddArtist, artist, setLoading) => {
  setLoading(true);
  const url = "/api/v1/artists"
  const data = {
    "artist": {
      "name":      artist.attributes.name,
      "image":     artist.attributes.image,
      "api_id":    artist.attributes.api_id
    }
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .post(url, data, { headers: headers })
    .then((res) => {
      setAddArtist(true);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const artistGetByIdIndexApi = async (setArtist, artistId, setLoading) => {
  const url = "/api/v1/artist"
  const data = {
    "params": {
      "find_artist_id": artistId
    }
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get(url, data, { headers: headers })
    .then((res) => {
      setArtist(res.data.data[0]);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}
