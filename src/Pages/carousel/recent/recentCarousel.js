import React, { useState, useEffect } from "react";

import Loading from '../../../components/ui/loading/loading'
import AlbumCarousel from "../../../components/albums/albumCarousel/albumCarousel";
import { albumRecentIndexApi } from "../../../api/albums/albumsApi";

const RecentCarousel = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      albumRecentIndexApi(setAlbums, setLoading);
  }, [])

  console.log(albums);

  if (isLoading) {
    return (
      <div className='album-recent-carousel__loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return (
      albums !== [] ? <AlbumCarousel albums={albums} leadingText={"Recently Released"}/> : <></>
    )
  }
}

export default RecentCarousel;