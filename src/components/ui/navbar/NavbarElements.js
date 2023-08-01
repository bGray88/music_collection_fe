import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #222222;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 4);
  z-index: 12;
`;

export const NavLogoContainer = styled.nav`
  background: #222222;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  z-index: 12;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavSearchContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`;

export const NavSearchInput = styled.input`
  height: 2rem;
  font-size: 15px;
  width: 75%;
  border: 2px solid #aaa;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 1rem;
  cursor: pointer;
  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

export const NavSearchBtn = styled.button`
  border-radius: 4px;
  padding: 0.5rem 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;

export const NavBtnsContainer = styled.nav`
  background: #222222;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #f0ff4a
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080
  }
`;
