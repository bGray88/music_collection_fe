import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import { userAlbumAddToUser, userAlbumRemoveFromUser } from '../../api/userAlbums/userAlbumsApi';
import { artistAdd, artistGetByIdIndexApi } from '../../api/artists/artistsApi';
import { albumGetByIdIndexApi, albumAdd } from '../../api/albums/albumsApi';
import Message from '../../components/ui/message/message'
import Card from '../../components/ui/card/card';
import Loading from 'react-loading';

import './album.css'

const Album = () => {
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [userAlbum, setUserAlbum] = useState('');
  const [newMessage, setMessage] = useState();
  const [isLoading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    albumGetByIdIndexApi(setAlbum, params.id, setLoading)
    if (album !== '') {
      artistGetByIdIndexApi(setArtist, album.attributes.artist_id, setLoading)
    }
  }, [params.id, album.id])

  const handleAddClick = () => {
    artistAdd(artist, setLoading);
    albumAdd(album, setLoading);
    userAlbumAddToUser(setUserAlbum, album.id, setLoading)
  }

  useEffect(() => {
    if (userAlbum === "added") {
      setMessage(<Message className="message-prompt" message={"Album Added to Collection"} />);
    } else if (userAlbum === "removed") {
      setMessage(<Message className="message-prompt" message={"Album Removed from Collection"} />);
    }
  }, [userAlbum])

  const handleRemoveClick = () => {
    userAlbumRemoveFromUser(setUserAlbum, params.id, setLoading)
  }

  if (album === '') {
    return <h2>Found No Album</h2>
  }
  if (isLoading) {
    return (
      <div className='albums__loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return (
      <Card className='album-info_container'>
        {newMessage}
        <Card className='album-info'>
          <div className='album-info_image'>
            <img src={album.attributes.image} alt={album.attributes.image} height={375} />
          </div>
          <div className='album-info_description'>
            <h2>{album.attributes.title}</h2>
            <h3>{album.attributes.release_year}</h3>
            <h3>{album.attributes.genres}</h3>
          </div>
        </Card>
        <button
          className='album-info_add-button'
          type="button"
          onClick={handleAddClick}
        >
          Add
        </button>
        <button
          className='album-info_remove-button'
          type="button"
          onClick={handleRemoveClick}
        >
          Remove
        </button>
      </Card>
    );
  }
}

export default Album;