import React from "react";

import AlbumItem from "../albumItem/albumItem";

import './albumList.css'

const AlbumList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="album-list__fallback">Found No Albums</h2>
  }

  return (
    <ul className="album-list">
      { props.items.map ((album) => {
        return <AlbumItem
          key={album.id}
          id={album.id}
          title={album.attributes.title}
          release_year={album.attributes.release_year}
          genre={album.attributes.genre}
          image={album.attributes.image}
        />
      }) }
    </ul>
  );
}

export default AlbumList;