import React, { useState, useRef } from "react";
import { useLocation } from "react-router";
import { NavLink, Link } from "react-router-dom";
import { Nav, NavLinks, HamburgerMenu, HamburgerMenuLinks } from "./ScNavbar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { signOut } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import useOutsideClick from "../../hooks/useOutsideClick";

import logo from "../../images/etecube-logo.png";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isHamburgerMenu) setIsHamburgerMenu(false);
  });

  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  if (location.pathname === "/sign-up" || location.pathname === "/sign-in")
    return null;
  else
    return (
      <Nav className="container navbar">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Etecube" />
          </NavLink>
        </div>
        <NavLinks>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/companies">
            Companies
          </NavLink>
          <NavLink activeclassname="active" to="/products">
            Products
          </NavLink>
          <Link onClick={() => dispatch(signOut())} to="/sign-in">
            Logout
          </Link>
        </NavLinks>

        {/* Mobile */}
        <div className="mobile">
          <HamburgerMenu onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}>
            {!isHamburgerMenu && <AiOutlineMenu className="hamburger" />}
          </HamburgerMenu>
          {isHamburgerMenu && (
            <div className="hamburger__menu">
              <HamburgerMenuLinks ref={ref}>
                <div onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}>
                  <AiOutlineClose className="close" />
                </div>
                <NavLink
                  onClick={() => setIsHamburgerMenu(false)}
                  activeclassname="activeHamburger"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setIsHamburgerMenu(false)}
                  activeclassname="activeHamburger"
                  to="/companies"
                >
                  Companies
                </NavLink>
                <NavLink
                  onClick={() => setIsHamburgerMenu(false)}
                  activeclassname="activeHamburger"
                  to="/products"
                >
                  Products
                </NavLink>
                <Link
                  onClick={() => {
                    setIsHamburgerMenu(false);
                    dispatch(signOut());
                  }}
                  to="/sign-in"
                >
                  Logout
                </Link>
              </HamburgerMenuLinks>
            </div>
          )}
        </div>
      </Nav>
    );
};

export default Navbar;
