import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { getCurrentUser, isAuthenticated } from "../auth/isAuthenticated";

import Navbar from '../components/ui/navbar/Navbar';
import Signup from '../pages/account/userCreate/userCreate';
import Login from '../pages/account/userLogin/userLogin';
import Logout from '../pages/account/userLogout/userLogout';

import Welcome from '../pages/welcome/welcome';
import About from '../pages/support/about'
import Contact from '../pages/support/contact'
import Dashboard from '../pages/dashboard/dashboard';
import Account from '../pages/account/profile/profile';

const Switch = () => {
  const [loggedUser, setLoggedUser] = useState(getCurrentUser());
  const redirect = <Navigate to='/signin' replace={true} />

  useEffect(() => {
    setLoggedUser(getCurrentUser);
  }, [isAuthenticated()])

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/sign-up" element={<Signup  />} />
          <Route path="/signout" element={!loggedUser ? redirect : <Logout />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/dashboard' element={!loggedUser ? redirect : <Dashboard />} />
          <Route path="/account" element={!loggedUser ? redirect : <Account />} />
        </Routes>
      </Router>
    </div>
  )
}


export default Switch