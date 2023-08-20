import React, { useState, useEffect } from "react";

import Card from '../../../Components/UI/Card/Card'
import Loading from '../../../Components/UI/Loading/Loading'
import AlbumCarousel from "../../../Components/Albums/AlbumCarousel/AlbumCarousel";
import { albumRecentIndexApi } from "../../../API/Albums/AlbumsApi";

const RecentCarousel = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      albumRecentIndexApi(setAlbums, setLoading);
  }, [])

  if (isLoading) {
    return (
      <div className='album-recent-carousel__loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return (
      <Card className="carousel-recent">
        {albums !== [] ? <AlbumCarousel albums={albums} leadingText={"Recently Released"}/> : <></>}
      </Card>
    )
  }
}

export default RecentCarousel;