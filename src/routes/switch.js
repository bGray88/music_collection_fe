import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Navbar from '../components/ui/navbar/Navbar';
import Signup from '../pages/account/userCreate/userCreate';
import Login from '../pages/account/userLogin/userLogin';
import Logout from '../pages/account/userLogout/userLogout';

import Welcome from '../pages/welcome/welcome';
import About from '../pages/support/about'
import Contact from '../pages/support/contact'
import Dashboard from '../pages/dashboard/dashboard';
import Account from '../pages/account/profile/profile';
import VerticalCarousel from "../components/ui/carousel/verticalCarousel";
import Card from "../components/ui/card/card";

const Switch = (props) => {
  const redirect = <Navigate to='/signin' replace={true} />

  const data = {
    "leadingText": "All about",
    "slides": [
      {
        "introline": "dogs",
        "id": "dogs",
        "content": {
          "image": "https://via.placeholder.com/400x200?text=Dogs",
          "copy": "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "cats",
        "id": "cats",
        "content": {
          "image": "https://via.placeholder.com/400x200?text=Cats",
          "copy": "Cat ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "snakes",
        "id": "snakes",
        "content": {
          "image": "https://via.placeholder.com/400x200?text=Snakes",
          "copy": "Snake ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "pigs",
        "id": "pigs",
        "content": {
          "image": "https://via.placeholder.com/400x200?text=Pigs",
          "copy": "Pig ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      }
    ]
  }

  return (
    <div className="router-outer">
      <Router>
        <Navbar loggedUser={props.loggedUser} className="app-navbar"/>
        <div className="content-container">
          <Card className="carousel-container">
            <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
          </Card>
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
        </div>
      </Router>
    </div>
  )
}


export default Switch