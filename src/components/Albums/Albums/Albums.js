import React, { useState, useEffect } from "react";
import './albums.css'

import Card from '../../ui/card/card'
import { albumIndexApi } from "../../../api/albums/albumsApi";
import AlbumList from '../albumList/albumList'

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    albumIndexApi(setAlbums);
  }, [])

  return (
    <Card className='albums'>
      <AlbumList items={albums} />
    </Card>
  );
}

export default Albums;