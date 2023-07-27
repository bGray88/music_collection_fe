import React, { useState, useEffect } from "react";

import Loading from "../../ui/loading/loading";
import VerticalCarousel from "../../ui/carousel/verticalCarousel"
import { albumSuggestIndexApi } from "../../../api/albums/albumsApi";

const AlbumCarousel = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      albumSuggestIndexApi(setAlbums, "rock", setLoading);
  }, [])

  if (isLoading) {
    return (
      <div className='album-carousel__loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return (
      albums !== [] ? <VerticalCarousel data={albums} leadingText={"Recommended"} /> : <></>
    )
  }
}

export default AlbumCarousel;