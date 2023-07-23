import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import Navbar from '../Window/Navbar/Navbar';
import UserLogin from '../User/Account/UserLogin/UserLogin';
import UserCreate from '../User/Account/UserCreate/UserCreate';
import UserLogout from '../User/Account/UserLogout/UserLogout';
// import Profile from '../User/Account/Profile/Profile';

import Welcome from '../../Pages/Welcome/Welcome';
import About from '../../Pages/Support/About'
import Contact from '../../Pages/Support/Contact'
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Account from '../../Pages/Account/Account';

function App () {
  return (
    <div>
      <div className="main-navbar">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Welcome />} />
            <Route path='/about' element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<UserCreate />} />
            <Route path="/signin" element={<UserLogin />} />
            <Route path="/signout" element={<UserLogout />} />
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
