import axios from "axios";

import { getAccessToken } from '../../auth/isAuthenticated';

export const albumAdd = async (album, setLoading) => {
  setLoading(true);
  const url = "/api/v1/albums"
  const data = {
    "album": {
      "title":        album.attributes.title,
      "genre":        "rock",
      "release_year": album.attributes.release_year,
      "image":        album.attributes.image,
      "api_id":       album.attributes.api_id,
      "artist_id":       album.attributes.artist_id
    }
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': getAccessToken()
  }
  await axios
    .post(url, data, { headers: headers })
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

export const albumGetByIdIndexApi = async (setAlbum, albumId, setLoading) => {
  setLoading(true);
  const url = "/api/v1/album"
  const data = {
    "params": {
      "find_album_id": albumId
    }
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get(url, data, { headers: headers })
    .then((res) => {
      setAlbum(res.data.data[0]);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}

export const albumSearchIndexApi = async (setAlbums, search, setLoading) => {
  const url = "/api/v1/albums"
  const data = {
    "params": {
      "search": search
    }
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get(url, data, { headers: headers })
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

export const albumSuggestIndexApi = async (setAlbums, suggest, setLoading) => {
  const url = "/api/v1/albums"
  const data = {
    "params": {
      "suggest": suggest
    }
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get(url, data, { headers: headers })
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

export const albumRecentIndexApi = async (setAlbums, setLoading) => {
  const url = "/api/v1/albums"
  const data = {
    "params": {
      "recent": 'recent'
    }
  }
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get(url, data, { headers: headers })
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
