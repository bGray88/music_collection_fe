import React, { useState, useEffect } from "react";

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
import UserItemMenu from './dropdownItems/dropdownItemMenu/dropdownItemMenu'

import logo from '../../../assets/images/navbar/logoRecordBanner.png'
import { getCurrentUser, isAuthenticated } from "../../../auth/isAuthenticated";

const Navbar = () => {
  const [currentNavUser, setCurrentUser] = useState('');
  const [currentNavSignUp, setCurrentSignUp] = useState('');
  const [currentNavSignIn, setCurrentSignIn] = useState('');
  const [loggedUser, setLoggedUser] = useState(getCurrentUser());

  useEffect(() => {
    setLoggedUser(getCurrentUser);
  }, [isAuthenticated()])

  useEffect(() => {
    if (!loggedUser) {
      setCurrentUser(<UserItemMenu />);
      setCurrentSignUp(<NavLink to='/sign-up'>Sign Up</NavLink>);
      setCurrentSignIn(<NavBtnLink to='/signin' >Sign In</NavBtnLink>)
    } else {
      setCurrentUser(<UserItemMenu />);
      setCurrentSignUp('');
      setCurrentSignIn(<NavBtnLink to='/signout' >Sign Out</NavBtnLink>)
    }
  }, [loggedUser])

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