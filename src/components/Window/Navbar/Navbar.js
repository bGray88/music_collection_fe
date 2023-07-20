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

import logo from '../../../Assets/images/navbar/logoRecordBanner.png'

const Navbar = ({loggedUser, user}) => {
  const { pathname } = useLocation();
  const [currentUser, setUser] = useState('');
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  const removeActive = () => {
    setIsActive(false)
  }
  
  useEffect(() => {
    if (loggedUser) {
      setUser(user.name)
    }
  }, [loggedUser])

  return (
    <Nav>
      <NavLogoContainer>
        <NavLogo to="/">
          <img src={logo} height={40} />
        </NavLogo>
      </NavLogoContainer>
      <Bars />
      <NavBtnsContainer>
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>
            Sign In
          </NavBtnLink>
        </NavBtn>
      </NavBtnsContainer>
    </Nav>
  );
};

export default Navbar;