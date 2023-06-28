import React, { Component } from "react";
import "./App.css";
import AlbumsContainer from "./components/container/AlbumsContainer";

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="topHeading">
          <h1>Music Collection</h1>
        </div>
        <AlbumsContainer />
      </div>
    );
  }
}

export default App;
