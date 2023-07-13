import React, { useState } from "react";
import "./App.css";
import Navbar from '../Window/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../../Pages/Index';
import About from '../../Pages/About'
import Contact from '../../Pages/Contact';
import SignUp from '../../Pages/Sign-Up'
import SignIn from '../../Pages/SignIn'

import Welcome from '../User/Welcome/Welcome'
import UserLogin from '../User/Account/UserLogin/UserLogin'
import UserCreate from '../User/Account/UserCreate/UserCreate'
import Dashboard from '../User/Dashboard/Dashboard';
import Preferences from '../User/Preferences/Preferences';
import Albums from '../Albums/Albums/Albums'

function App () {
  const [token, setToken] = useState('');
  const [session, setSession] = useState('');

  const loginChoice = (selection) => {
    setSession(selection);
  }

  const loginUser = (selection) => {
    if(selection == "signin") {
      setSession('');
      return <UserLogin setToken={setToken} />
    } else if(selection == "signup") {
      setSession('');
      return <UserCreate setToken={setToken} />
    }
  }

  const validateUser = () => {
    return <Welcome onLoginClick={loginChoice} />
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
            <Route path="/sign-up" element={<UserCreate />} />
            <Route path="/signin" element={<UserLogin />} />
          </Routes>
        </Router>
      </div>
      <div className="main-container">
        <div className="top-heading">
          <h1>Music Collection</h1>
        </div>
        {!token && validateUser()}
        {session === ("signin" || "signup") && loginUser(session)}
      </div>
    </div>
  );
}

export default App;
