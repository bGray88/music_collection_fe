import React, { Component } from "react";
import axios from "axios";

class AlbumsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  loadAlbums() {
    axios
      .get("/api/v1/albums")
      .then((res) => {
        this.setState({ albums: res.data.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadAlbums();
  }

  render() {
    return (
      <div>
        <div className="taskContainer">
          <input
            className="newTask"
            type="text"
            placeholder="Input a New Album and Press Enter"
            maxLength="75"
          />
        </div>
        <div className="wrapItems">
          <ul className="listItems">
            {this.state.albums.map((album) => {
              return (
                <li className="item" album={album} key={album.id}>
                  <input className="itemCheckbox" type="checkbox" />
                  <label className="itemDisplay">{album.attributes.title}</label>
                  <span className="removeItemButton">x</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default AlbumsContainer;