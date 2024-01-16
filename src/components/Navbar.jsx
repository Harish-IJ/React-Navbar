import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <div>This is Navbar Component</div> */}
      <div className="Nav-Holder">
        <NavLink className="Logo" to="/">
          hij
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "Nav-Menu Nav-active item1"
              : isPending
              ? "Nav-Menu item1"
              : "Nav-Menu item1"
          }
          to="/"
        >
          <div className="uline">Home</div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "Nav-Menu Nav-active"
              : isPending
              ? "Nav-Menu"
              : "Nav-Menu"
          }
          to="/projects"
        >
          <div className="uline">Projects</div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "Nav-Menu Nav-active"
              : isPending
              ? "Nav-Menu"
              : "Nav-Menu"
          }
          to="/updates"
        >
          <div className="uline">Updates</div>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "Nav-Button-active"
              : isPending
              ? "Nav-Button"
              : "Nav-Button"
          }
          to="/contactme"
        >
          Contact Me
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
