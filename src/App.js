import React from "react";
import "./App.css";
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about'
import Contact from './pages/contact';
import SignUp from './pages/sign-up'
import SignIn from './pages/signin'
import AlbumsContainer from "./components/container/AlbumsContainer";

function App () {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={About} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
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

export default App;
