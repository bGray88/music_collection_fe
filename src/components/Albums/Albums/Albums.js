import React, { useState, useEffect } from "react";
import './albums.css'

import Card from '../../UI/Card/Card'
import { albumOwnedIndexApi } from "../../../API/albums/albumsApi";
import AlbumList from '../AlbumList/albumList'
import Loading from "../../UI/Loading/Loading";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    albumOwnedIndexApi(setAlbums, setLoading);
  }, [])

  if (isLoading) {
    return (
      <div className='albums__loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return (
      <Card className='albums'>
        <AlbumList items={albums} />
      </Card>
    );
  }
}

export default Albums;