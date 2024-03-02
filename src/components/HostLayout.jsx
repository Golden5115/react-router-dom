import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyle = {
    fontweight: "bold",
    color: "#161616",
    textDecoration: "underline",
  };
  return (
    <div>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"."}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"/host/income"}
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"/host/reviews"}
        >
          Reviews
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to={"/host/vans"}
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
