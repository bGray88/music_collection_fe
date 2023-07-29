import axios from "axios";

export const albumOwnedIndexApi = async (setAlbums, setLoading) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get("/api/v1/albums", { 
      params: {
        owned: 'owned'
      },
      headers: headers })
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

export const albumSearchIndexApi = async (setAlbums, search, setLoading) => {
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
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get("/api/v1/albums", { 
      params: {
        suggest: suggest
      },
      headers: headers })
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
  const headers = {
    'Content-Type': 'application/json'
  }
  await axios
    .get("/api/v1/albums", { 
      params: {
        recent: 'recent'
      },
      headers: headers })
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
