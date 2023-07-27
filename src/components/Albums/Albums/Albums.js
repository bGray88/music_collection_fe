import React, { useState, useEffect } from "react";
import './albums.css'

import Card from '../../ui/card/card'
import { albumSearchIndexApi } from "../../../api/albums/albumsApi";
import AlbumList from '../albumList/albumList'
import Loading from "../../ui/loading/loading";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    albumSearchIndexApi(setAlbums, "Led Zeppilin", setLoading);
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