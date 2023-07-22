import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import Navbar from '../Window/Navbar/Navbar';
import UserLogin from '../User/Account/UserLogin/UserLogin';
import UserCreate from '../User/Account/UserCreate/UserCreate';
import UserLogout from '../User/Account/UserLogout/UserLogout';
import Preferences from '../User/Account/Profile/Profile';
import Albums from '../Albums/Albums/Albums';
import Message from '../Window/Message/Message'

import Welcome from '../../Pages/Welcome/Welcome';
import About from '../../Pages/Support/About'
import Contact from '../../Pages/Support/Contact'
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Account from '../../Pages/Account/Account';

function App () {
  const [loggedUser, setLoggedUser] = useState('')
  const [user, setUserName] = useState('')

  useEffect(() => {
     console.log(loggedUser);
     console.log(user);
  })

  return (
    <div>
      <div className="main-navbar">
        <Router>
          <Navbar loggedUser={loggedUser} user={user} />
          <Routes>
            <Route path="/" exact element={<Welcome />} />
            <Route path='/about' element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<UserCreate />} />
            <Route path="/signin" element={<UserLogin setLoggedUser={setLoggedUser} setUserName={setUserName} />} />
            <Route path="/signout" element={<UserLogout setLoggedUser={setLoggedUser} setUserName={setUserName} />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      </div>
      <div className="main-container">
      </div>
    </div>
  );
}

export default App;
