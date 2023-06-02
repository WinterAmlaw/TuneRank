import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = () => {
  const location = useLocation();
  // if (location.pathname === '/signup' || location.pathname === '/login') {
  //   return null; 
  // }
  return (
    <NavContainer>
      <Logo href="/">
        <span>Tune</span>Rank
      </Logo>
      <SearchContainer>
        <SearchBar type="text" placeholder="Search..." />
        <SearchButton>Go</SearchButton>
      </SearchContainer>
      <RightContainer>
        <NavSignup to="/signup" isActive={() => ['/signup', '/signup/'].includes(location.pathname)}>Sign Up</NavSignup>
        <NavLogin to="/login" isActive={() => location.pathname === '/login'}>Log In</NavLogin>
      </RightContainer>
    </NavContainer>
  );
};

export default Navbar;

// Styles
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    // flex-wrap: wrap-reverse;
    flex-direction: column;
  }
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 2px;

  span {
    background-color: #f60;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;
    color: #fff;
    transform: skew(-20deg);
  }

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    // order: 3;
    margin-top: 10px;
    margin-bottom: 24px;
  }
`;

const SearchContainer = styled.div`
  display: inline-block;
  margin-left: 50px;
  margin-right: auto;

  @media (max-width: 992px) {
    margin-left: 10px;
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const SearchBar = styled.input`
  height: 32px;
  width: 400px;
  padding: 5px;
  font-size: 16px;
  border: 2px solid #ccc;
  background: #f7f7f7;
  color: #444;
  border-radius: 10px 0px 0px 10px;

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 992px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 80px);
  }

  &:focus {
    // border-color: #f60;
    // box-shadow: 0 0 0 0 #f60;
  }
`;

const SearchButton = styled.button`
  height: 46px;
  width: 60px;
  border: none;
  background: #f60;
  color: #fff;
  font-size: 16px;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  margin-left: -2px;


  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #f90;
  }
}`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    justify-content: space-around;
    margin-top: 10px;
  }
`;


const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 18px;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #f60;
  }

  &.active {
    color: #f60;
    text-decoration: underline;
  }

  @media (max-width: 992px) {
    padding: 10px;
    margin-right: 10px;    
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

const NavSignup = styled(NavItem)`
  &.active {
    color: #f60;
    text-decoration: underline;
  }
`;

const NavLogin = styled(NavItem)`
  &.active {
    color: #f60;
    text-decoration: underline;
  }
`;
