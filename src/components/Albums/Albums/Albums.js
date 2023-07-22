import React, { useState, useEffect } from "react";
import axios from "axios";
import './Albums.css'

import Card from '../../Window/Card/Card'
import AlbumList from '../AlbumList/AlbumList'

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const loadAlbums = async () => {
    await axios
      .get("/api/v1/albums")
      .then((res) => {
        setAlbums(res.data.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadAlbums();
  }, [])

  return (
    <Card className='albums'>
      <AlbumList items={albums} />
    </Card>
  );
}

export default Albums;