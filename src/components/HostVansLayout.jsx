import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HostVansLayout = ({ currentVan }) => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
  };
  console.log(currentVan.name);
  return (
    <div>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"."}
          end
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"pricing"}
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"photos"}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ currentVan }} />
    </div>
  );
};

export default HostVansLayout;
