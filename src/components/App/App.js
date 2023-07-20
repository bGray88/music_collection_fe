import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import Navbar from '../Window/Navbar/Navbar';
import Welcome from '../../Pages/Welcome/Welcome';
import UserLogin from '../User/Account/UserLogin/UserLogin';
import UserCreate from '../User/Account/UserCreate/UserCreate';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Preferences from '../User/Profile/Profile';
import Albums from '../Albums/Albums/Albums';

import About from '../../Pages/Support/About'
import Contact from '../../Pages/Support/Contact'

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
      </div>
    </div>
  );
}

export default App;
