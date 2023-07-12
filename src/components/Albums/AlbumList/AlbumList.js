import React, { useState, useEffect } from "react";

import AlbumItem from "../AlbumItem/AlbumItem";

import './AlbumList.css'

const AlbumList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="albums-list__fallback">Found No Albums</h2>
  }

  return (
    <ul className="album-list">
      { props.items.map ((album) => {
        return <AlbumItem
          key={album.id}
          title={album.attributes.title}
          release_year={album.attributes.release_year}
          genre={album.attributes.genre}
        />
      }) }
    </ul>
  );
}

export default AlbumList;