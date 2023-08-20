import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../../Components/UI/Loading/Loading";
import AlbumList from '../../Components/Albums/AlbumList/AlbumList'
import Card from "../../Components/UI/Card/Card";

import './Search.css'
import { albumSearchIndexApi } from "../../API/Albums/AlbumsApi";

const Search = () => {
  const [search_albums, setSearchAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const location = useLocation();
  
  useEffect(() => {
    albumSearchIndexApi(setSearchAlbums, location.state, setLoading);
  }, [location.state])

  if (isLoading) {
    return (
      <div className='create-loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="search-main">
        <Card className='albums'>
          <AlbumList items={search_albums} />
        </Card>
      </div>
    );
  }
}

export default Search