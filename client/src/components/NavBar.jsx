import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">
        TuneRank
      </Logo>
      <Menu>
        <NavItem to="/signup">Signup</NavItem>
        <NavItem to="/login">Login</NavItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;

// Styles
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-bottom: 3px solid #f60;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px #000;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 5px #000;
  
  &:hover {
    color: #f60;
  }
  
  &:active,
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;
