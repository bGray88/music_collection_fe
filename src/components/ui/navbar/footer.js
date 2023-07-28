import React from "react";

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnsContainer
} from './navbarElements';

const Footer = (props) => {
  const classes = 'footer ' + props.className;

  return (
    <div className={classes}>{props.children}
      <Nav>
        <NavBtnsContainer>
          <NavMenu>
            {<NavLink to='/contact'>Contact</NavLink>}
          </NavMenu>
          <NavBtn>
          {<NavLink to='/about'>About</NavLink>}
          </NavBtn>
        </NavBtnsContainer>
      </Nav>
    </div>
  );
};

export default Footer;