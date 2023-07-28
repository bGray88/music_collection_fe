import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from '../components/ui/navbar/navbar';
import Footer from '../components/ui/navbar/footer';
import Signup from '../pages/account/userCreate/userCreate';
import Login from '../pages/account/userLogin/userLogin';
import Logout from '../pages/account/userLogout/userLogout';

import Welcome from '../pages/welcome/welcome';
import About from '../pages/support/about'
import Contact from '../pages/support/contact'
import Dashboard from '../pages/dashboard/dashboard';
import Account from '../pages/account/profile/profile';
import Card from "../components/ui/card/card";
import SuggestedCarousel from "../pages/carousel/suggested/suggestedCarousel";
import RecentCarousel from "../pages/carousel/recent/recentCarousel";

const Switch = (props) => {
  const redirect = <Navigate to='/signin' replace={true} />

  return (
    <div className="router-outer">
      <Router>
        <Navbar loggedUser={props.loggedUser} className="app-navbar"/>
        <div className="content-container">
          <SuggestedCarousel />
          <Card className="content-container">
            <Routes>
              <Route path="/" exact element={<Welcome />} />
              <Route path="/signin" element={<Login loggedUser={props.loggedUser} setLoggedUser={props.setLoggedUser} />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/signout" element={!props.loggedUser ? redirect : <Logout loggedUser={props.loggedUser} setLoggedUser={props.setLoggedUser} />} />
              <Route path='/about' element={<About loggedUser={props.loggedUser} />} />
              <Route path="/contact" element={<Contact loggedUser={props.loggedUser} />} />
              <Route path='/dashboard' element={!props.loggedUser ? redirect : <Dashboard loggedUser={props.loggedUser} />} />
              <Route path="/account" element={!props.loggedUser ? redirect : <Account loggedUser={props.loggedUser} />} />
            </Routes>
          </Card >
          <RecentCarousel />
        </div>
        <Footer loggedUser={props.loggedUser} className="app-footer"/>
      </Router>
    </div>
  )
}


export default Switch