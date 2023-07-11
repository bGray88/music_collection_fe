import React from "react";
import "./App.css";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Index';
import About from './Pages/About'
import Contact from './Pages/Contact';
import SignUp from './Pages/Sign-Up'
import SignIn from './Pages/SignIn'

import Albums from './Components/Albums/Albums/Albums'

function App () {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={Home} />
          <Route path='/about' element={About} />
          <Route path="/contact" element={Contact} />
          <Route path="/sign-up" element={SignUp} />
          <Route path="/signin" element={SignIn} />
        </Routes>
      </Router>
      <div className="mainContainer">
        <div className="topHeading">
          <h1>Music Collection</h1>
        </div>
        <Albums />
      </div>
    </div>
  );
}

export default App;
