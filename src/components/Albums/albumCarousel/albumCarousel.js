import React from "react";

import VerticalCarousel from "../../UI/Carousel/VerticalCarousel"

const AlbumCarousel = (props) => {
  return (
    <VerticalCarousel data={props.albums} leadingText={props.leadingText} />
  )
}

export default AlbumCarousel;