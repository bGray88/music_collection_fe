import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/">
        <img src="./logoRecord.png" height={80} />
      </NavLogo>
      <Bars />
      <NavMenu>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/contact' activeStyle>
          Contact
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
          Sign Up
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>
          Sign In
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;