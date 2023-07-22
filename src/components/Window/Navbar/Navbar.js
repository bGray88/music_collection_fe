import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

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

const Navbar = ({ loggedUser, user }) => {
  const [currentNavUser, setCurrentUser] = useState('');
  const [currentNavSignUp, setCurrentSignUp] = useState('');
  const [currentNavSignIn, setCurrentSignIn] = useState('');

  useEffect(() => {
    if (!loggedUser) {
      setCurrentUser(<UserItemMenu loggedUser={loggedUser} user={user} />);
      setCurrentSignUp(<NavLink to='/sign-up'>Sign Up</NavLink>);
      setCurrentSignIn(<NavBtnLink to='/signin'>Sign In</NavBtnLink>)
    } else {
      setCurrentUser(<UserItemMenu loggedUser={loggedUser} user={user} />);
      setCurrentSignUp('');
      setCurrentSignIn(<NavBtnLink to='/signout'>Sign Out</NavBtnLink>)
    }
  }, [loggedUser, user])

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