import React, { useState, useEffect } from "react";

import Loading from '../../../components/ui/loading/loading'
import AlbumCarousel from "../../../components/albums/albumCarousel/albumCarousel";
import { albumSuggestIndexApi } from "../../../api/albums/albumsApi";

const SuggestedCarousel = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      albumSuggestIndexApi(setAlbums, "rock", setLoading);
  }, [])

  if (isLoading) {
    return (
      <div className='album-suggested-carousel__loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return (
      albums !== [] ? <AlbumCarousel albums={albums} leadingText={"Recommended"}/> : <></>
    )
  }
}

export default SuggestedCarousel;