import React, { useState } from "react";
import "./App.css";
import Navbar from './Components/Window/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Index';
import About from './Pages/About'
import Contact from './Pages/Contact';
import SignUp from './Pages/Sign-Up'
import SignIn from './Pages/SignIn'

import UserLogin from './Components/User/Account/UserLogin/UserLogin'
import Dashboard from './Components/User/Dashboard/Dashboard';
import Preferences from './Components/User/Preferences/Preferences';
import Albums from './Components/Albums/Albums/Albums'

function App () {
  const [token, setToken] = useState('');

  if(!token) {
    return <UserLogin setToken={setToken} />
  }

  return (
    <div>
      <div className="main-navbar">
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
      </div>
      <div className="main-container">
        <div className="top-heading">
          <h1>Music Collection</h1>
        </div>

      </div>
    </div>
  );
}

export default App;
