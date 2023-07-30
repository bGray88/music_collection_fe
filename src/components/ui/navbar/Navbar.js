import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavSearchBtn,
  NavBtn,
  NavBtnLink,
  NavLogoContainer,
  NavBtnsContainer,
  NavSearchContainer
} from './navBarElements';
import NavBarSearch from "./navBarSearch";
import DropdownItemMenu from './dropdownItems/dropdownItemMenu/dropdownItemMenu'

import logo from '../../../assets/images/navbar/logoRecordBanner.png'

const Navbar = (props) => {
  const classes = 'navbar ' + props.className;
  const [currentNavUser, setCurrentUser] = useState('');
  const [currentNavSignUp, setCurrentSignUp] = useState('');
  const [currentNavSignIn, setCurrentSignIn] = useState('');
  const [searchText, setSearchText] = useState();

  const navigate = useNavigate();

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

  const handleSearch = () => {
    navigate('/search', { state: { searchTerm: searchText } });
  }

  return (
    <div className={classes}>{props.children}
      <Nav>
        <NavLogoContainer>
          <NavLogo to="/">
            <img src={logo} alt={logo} height={40} />
          </NavLogo>
          {currentNavUser}
        </ NavLogoContainer>
        <NavSearchContainer>
          <NavBarSearch handleSearchText={setSearchText} />
          <NavSearchBtn onClick={handleSearch} text={searchText}>Search</NavSearchBtn>
        </NavSearchContainer>
        <Bars />
        <NavBtnsContainer className="navbar-btn-container">
          <NavMenu className="navbar-signup-btn">
            {currentNavSignUp}
          </NavMenu>
          <NavBtn className="navbar-signin-btn">
            {currentNavSignIn}
          </NavBtn>
        </NavBtnsContainer>
      </Nav>
    </div>
  );
};

export default Navbar;