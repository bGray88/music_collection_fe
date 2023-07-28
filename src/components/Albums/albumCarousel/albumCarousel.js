import React from "react";

import VerticalCarousel from "../../ui/carousel/verticalCarousel"

const AlbumCarousel = (props) => {
  return (
    <VerticalCarousel data={props.albums} leadingText={props.leadingText} />
  )
}

export default AlbumCarousel;