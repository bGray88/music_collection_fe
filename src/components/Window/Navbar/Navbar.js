import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogoContainer,
  NavBtnsContainer
} from './NavbarElements';
import UserItemMenu from './UserItems/UserItemMenu/UserItemMenu'

import logo from '../../../Assets/images/navbar/logoRecordBanner.png'
import { getAccessToken, isAuthenticated } from "../../User/Account/Auth/IsAuthenticated";

const Navbar = () => {
  const [currentNavUser, setCurrentUser] = useState('');
  const [currentNavSignUp, setCurrentSignUp] = useState('');
  const [currentNavSignIn, setCurrentSignIn] = useState('');

  useEffect(() => {
    if(!isAuthenticated()) {
      setCurrentUser(<UserItemMenu />);
      setCurrentSignUp(<NavLink to='/sign-up'>Sign Up</NavLink>);
      setCurrentSignIn(<NavBtnLink to='/signin'>Sign In</NavBtnLink>)
    } else {
      setCurrentUser(<UserItemMenu />);
      setCurrentSignUp('');
      setCurrentSignIn(<NavBtnLink to='/signout'>Sign Out</NavBtnLink>)
    }
  }, [isAuthenticated()])

  return (
    <Nav>
      <NavLogoContainer>
        <NavLogo to="/">
          <img src={logo} alt={logo} height={40} />
        </NavLogo>
        {currentNavUser}
      </NavLogoContainer>
      <Bars />
      <NavBtnsContainer>
        <NavMenu>
          {currentNavSignUp}
        </NavMenu>
        <NavBtn>
          {currentNavSignIn}
        </NavBtn>
      </NavBtnsContainer>
    </Nav>
  );
};

export default Navbar;