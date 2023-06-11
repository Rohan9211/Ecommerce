import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Nav2 from "./Nav2";


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/rafcart.svg" alt="my logo img" />
      </NavLink>
      <Nav />
      <Nav2 />

    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  gap:2rem;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
