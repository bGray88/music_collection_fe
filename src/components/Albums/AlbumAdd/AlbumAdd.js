const AlbumsContainer = (props) => {
  const [artistId, setArtistId] = useState('');
  
  const submitHandler = async (event) => {
    event.preventDefault();
    const artistName = event.target[0].value;
    const artistYear = event.target[1].value;
    const albumTitle = event.target[2].value;
    const albumYear  = event.target[3].value;
    const albumGenre = event.target[4].value;
    await axios
      .post("/api/v1/artists", {
        artist: {
          name: artistName,
          form_year: artistYear
      }})
      .then((res) => {
        setArtistId(res.data.artist_id);
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
        // console.log(res);
      })
      .catch((error) => console.log(error));
  }
  
  return (
    <div className="albumContainer">
      <form className="newAlbumArtist"
        onSubmit={submitHandler}
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
    </div>
  );
}