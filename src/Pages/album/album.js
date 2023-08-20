import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import { userAlbumAddApi, userAlbumRemoveApi } from '../../API/UserAlbums/UserAlbumsApi';
import { artistAddApi, artistGetByIdIndexApi } from '../../API/Artists/ArtistsApi';
import { albumGetByIdIndexApi, albumAddApi } from '../../API/Albums/AlbumsApi';
import Message from '../../Components/UI/Message/Message'
import Card from '../../Components/UI/Card/Card';
import Loading from 'react-loading';

import './Album.css'

const Album = () => {
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [artistName, setArtistName] = useState('');
  const [update, setUpdate] = useState('');
  const [addAlbum, setAddAlbum] = useState('');
  const [addArtist, setAddArtist] = useState('');
  const [userAlbum, setUserAlbum] = useState('');
  const [newMessage, setMessage] = useState('');
  const [isLoading, setLoading] = useState(true);

  const params = useParams();

  const handleAddClick = () => {
    setUpdate('Add')
  }

  const handleRemoveClick = () => {
    setUpdate('Remove')
  }

  useEffect(() => {
    albumGetByIdIndexApi(setAlbum, params.id, setLoading)
  }, [])

  useEffect(() => {
    if (album !== '') {
      artistGetByIdIndexApi(setArtist, album.attributes.artist_id, setLoading)
    }
  }, [album])

  useEffect(() => {
    if (artist !== '') {
      setArtistName(artist.attributes.name)
    }
  }, [artist])

  useEffect(() => {
    if (update === 'Add') {
      albumAddApi(setAddAlbum, album, setLoading)
    }
  }, [addArtist])

  useEffect(() => {
    if (update === 'Add') {
      userAlbumAddApi(setUserAlbum, album.id, setLoading)
    }
  }, [addAlbum])

  useEffect(() => {
      if (update === 'Add') {
        artistAddApi(setAddArtist, artist, setLoading)
      } else if (update === 'Remove') {
        userAlbumRemoveApi(setUserAlbum, params.id, setLoading)
      }
  }, [update])

  useEffect(() => {
    if (userAlbum === "added") {
      setMessage(<Message className="message-prompt" message={"Album Added to Collection"} />);
    } else if (userAlbum === "removed") {
      setMessage(<Message className="message-prompt" message={"Album Removed from Collection"} />);
    }
  }, [userAlbum])

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
            <h3>{"Pop/Rock"}</h3>
            <h3>{artistName}</h3>
          </div>
        </Card>
        { 
          album.attributes.owned === false ?
            <button
              className='album-info_add-button'
              type="button"
              onClick={handleAddClick}
            >
              Add
            </button>
          : <button
              className='album-info_remove-button'
              type="button"
              onClick={handleRemoveClick}
            >
              Remove
            </button>
        }
      </Card>
    );
  }
}

export default Album;