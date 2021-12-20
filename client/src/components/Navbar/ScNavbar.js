import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);

  .active {
    color: #276658;
  }

  img {
    width: 140px;
    height: 40px;
  }

  .mobile {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const NavLinks = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  a:not(last-child) {
    margin-left: 1rem;
  }
`;

export const HamburgerMenu = styled.div`
  .hamburger {
    font-size: 1.5rem;
    cursor: pointer;
    color: #347768;

    @media screen and (min-width: 768px) {
      display: none;
    }

    &__menu {
      position: absolute;
      top: 0;
      right: 0;
      width: 5rem;
      height: 100vh;
      z-index: 2;
      color: #8a8a8a;
    }
  }
`;

export const HamburgerMenuLinks = styled.div`
  position: absolute;
  height: 100vh;
  width: 150px;
  top: 0;
  padding: 1.5rem 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  background-color: #bdbebe;
  transition: width 2s, height 4s;

  a {
    margin-top: 1rem;
    padding: 0.2rem 1rem;
    color: white;
  }

  .close {
    align-self: flex-end;
    font-size: 1.5rem;
    color: #347768;
    cursor: pointer;
  }
`;
