import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const aciveStyle = {
    fontweight: "bold",
    color: "#161616",
    textDecoration: "underline",
  };
  return (
    <header>
      <NavLink to={"/"}>#VANLIFE</NavLink>
      <nav>
        <NavLink
          to={"/host"}
          style={({ isActive }) => (isActive ? aciveStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? aciveStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to={"/vans"}
          style={({ isActive }) => (isActive ? aciveStyle : null)}
        >
          Van
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
