import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from '../Components/UI/Navbar/Navbar';
import Footer from '../Components/UI/Navbar/Footer';
import Signup from '../Pages/Account/UserCreate/UserCreate';
import Login from '../Pages/Account/UserLogin/UserLogin';
import Logout from '../Pages/Account/UserLogout/UserLogout';

import Welcome from '../Pages/Welcome/Welcome';
import About from '../Pages/Support/About'
import Contact from '../Pages/Support/Contact'
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from '../Pages/Account/Profile/Profile';
import Album from "../Pages/Album/Album";
import Search from '../Pages/Search/Search'
import Card from "../Components/UI/Card/Card";
import SuggestedCarousel from "../Pages/Carousel/Suggested/SuggestedCarousel";
import RecentCarousel from "../Pages/Carousel/Recent/RecentCarousel";

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
              <Route path="/signin" element={<Login setLoggedUser={props.setLoggedUser} />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/signout" element={!props.loggedUser ? redirect : <Logout loggedUser={props.loggedUser} setLoggedUser={props.setLoggedUser} />} />
              <Route path='/about' element={<About loggedUser={props.loggedUser} />} />
              <Route path="/contact" element={<Contact loggedUser={props.loggedUser} />} />
              <Route path='/dashboard' element={!props.loggedUser ? redirect : <Dashboard loggedUser={props.loggedUser} />} />
              <Route path="/profile" element={!props.loggedUser ? redirect : <Profile loggedUser={props.loggedUser} />} />
              <Route path="/search" element={<Search loggedUser={props.loggedUser} />} />
              <Route path={`/album/:id`} element={<Album loggedUser={props.loggedUser} />}/>
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