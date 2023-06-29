import React, { Component } from "react";
import "./App.css";
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about'
import AlbumsContainer from "./components/container/AlbumsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
          </Routes>
        </Router>
        <div className="mainContainer">
          <div className="topHeading">
            <h1>Music Collection</h1>
          </div>
          <AlbumsContainer />
        </div>
      </div>
    );
  }
}

export default App;
