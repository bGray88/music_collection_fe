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
} from './navbarElements';
import DropdownItemMenu from './dropdownItems/dropdownItemMenu/dropdownItemMenu'

import logo from '../../../assets/images/navbar/logoRecordBanner.png'

const Navbar = (props) => {
  const classes = 'navbar ' + props.className;
  const [currentNavUser, setCurrentUser] = useState('');
  const [currentNavSignUp, setCurrentSignUp] = useState('');
  const [currentNavSignIn, setCurrentSignIn] = useState('');

  useEffect(() => {
    if (!props.loggedUser) {
      setCurrentUser(<DropdownItemMenu loggedUser={props.loggedUser} />);
      setCurrentSignUp(<NavLink to='/sign-up'>Sign Up</NavLink>);
      setCurrentSignIn(<NavBtnLink to='/signin' >Sign In</NavBtnLink>)
    } else {
      setCurrentUser(<DropdownItemMenu loggedUser={props.loggedUser} />);
      setCurrentSignUp('');
      setCurrentSignIn(<NavBtnLink to='/signout' >Sign Out</NavBtnLink>)
    }
  }, [props.loggedUser])

  return (
    <div className={classes}>{props.children}
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
    </div>
  );
};

export default Navbar;