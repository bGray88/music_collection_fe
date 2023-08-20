import React, { useState, useEffect } from "react";

import Card from '../../../Components/UI/Card/Card'
import Loading from '../../../Components/UI/Loading/Loading'
import AlbumCarousel from "../../../Components/Albums/AlbumCarousel/AlbumCarousel";
import { albumSuggestIndexApi } from "../../../API/Albums/AlbumsApi";

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
      <Card className="carousel-suggested">
        {albums !== [] ? <AlbumCarousel albums={albums} leadingText={"Recommended"}/> : <></>}
      </Card>
    )
  }
}

export default SuggestedCarousel;