import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import Navbar from '../Window/Navbar/Navbar';
import Welcome from '../Window/Welcome/Welcome';
import UserLogin from '../User/Account/UserLogin/UserLogin';
import UserCreate from '../User/Account/UserCreate/UserCreate';
import Dashboard from '../User/Dashboard/Dashboard';
import Preferences from '../User/Profile/Profile';
import Albums from '../Albums/Albums/Albums';

import About from '../../Pages/About'
import Contact from '../../Pages/Contact'

function App () {
  const [token, setToken] = useState('');
  const [loggedUser, setLoggedUser] = useState(7)
  const [user, setUserName] = useState('')

  const selectGuestAction = (selected) => {
    if(selected === "signin") {
      return <UserLogin setToken={setToken} />
    } else if(selected === "sign-up") {
      return <UserCreate setToken={setToken} />
    }
  }

  return (
    <div>
      <div className="main-navbar">
        <Router>
          <Navbar user={user} loggedUser={loggedUser} />
          <Routes>
            <Route path="/" exact element={<Welcome onSelectOption={selectGuestAction} />} />
            <Route path='/about' element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<UserLogin />} />
            <Route path="/signin" element={<UserCreate />} />
          </Routes>
        </Router>
      </div>
      <div className="main-container">
        <div className="top-heading">
          <h2>Music Collection</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
