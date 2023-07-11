import React, { useState, useEffect } from "react";
import axios from "axios";

const AlbumsContainer = (props) => {
  const [albums, setAlbums] = useState([]);
  const [artistId, setArtistId] = useState('');

  const loadAlbums = () => {
    axios
      .get("/api/v1/albums")
      .then((res) => {
        setAlbums(res.data.data);
      })
      .catch((error) => console.log(error));
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const artistName = e.target[0].value;
    const artistYear = e.target[1].value;
    const albumTitle = e.target[2].value;
    const albumYear  = e.target[3].value;
    const albumGenre = e.target[4].value;
    await axios
      .post("/api/v1/artists", {
        artist: {
          name: artistName,
          form_year: artistYear
      }})
      .then((res) => {
        setArtistId(res.data.artist_id);
        console.log(artistId);
      })
      .catch((error) => console.log(error));
    await axios
      .post("/api/v1/albums", {
        album: {
          title: albumTitle,
          release_year: albumYear,
          genre: albumGenre,
          artist_id: artistId
      }})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadAlbums();
  }, [])

  return (
    <div className="albumContainer">
      <form className="newAlbumArtist"
        onSubmit={onFormSubmit}
      >
        <input type="text"
          className="albumArtist"
          placeholder="Input Album Artist"
          maxLength="75" />
        <input type="text"
          className="albumArtistFormYear"
          placeholder="Input Artist's form year"
          maxLength="75" />
        <input type="text"
          className="artistAlbum"
          placeholder="Input Artist's Album"
          maxLength="75" />
        <input type="text"
          className="artistAlbumReleaseYear"
          placeholder="Input Album's release year"
          maxLength="75" />
        <input type="text"
          className="artistAlbumGenre"
          placeholder="Input Album's genre"
          maxLength="75" />
        <button type="submit"
          className="btn btn-success"
        >Submit</button>
      </form>
      <div className="wrapItems">
        <ul className="listItems">
          { albums.map ((album) => {
            return (
              <li className="item" album={album} key={album.id}>
                <input className="itemCheckbox" type="checkbox" />
                <label className="itemDisplay">{album.attributes.title}</label>
                <span className="removeItemButton">x</span>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  );
}

export default AlbumsContainer;