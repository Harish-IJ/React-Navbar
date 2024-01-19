import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [navtoggle, setNavtoggle] = useState(false);
  const onToggle = () => setNavtoggle(!navtoggle);

  return (
    <>
      <div className="Nav-Holder">
        <NavLink className="Logo" to="/">
          hij
        </NavLink>
        <div className="MenuToggle" onClick={onToggle}>
          <div className={navtoggle ? "Rect1 T-active" : "Rect1"}></div>
          <div className={navtoggle ? "Rect2 T-active" : "Rect2"}></div>
          <div className={navtoggle ? "Rect3 T-active" : "Rect3"}></div>
        </div>
        <div
          className={
            navtoggle ? "NavMenuList NMactive" : "NavMenuList NMinactive"
          }
        >
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "Nav-Menu Nav-Menu-active"
                : isPending
                ? "Nav-Menu"
                : "Nav-Menu"
            }
            to="/"
            onClick={onToggle}
          >
            <div className="uline">Home</div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "Nav-Menu Nav-Menu-active"
                : isPending
                ? "Nav-Menu"
                : "Nav-Menu"
            }
            to="/projects"
            onClick={onToggle}
          >
            <div className="uline">Projects</div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "Nav-Menu Nav-Menu-active"
                : isPending
                ? "Nav-Menu"
                : "Nav-Menu"
            }
            to="/updates"
            onClick={onToggle}
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
            onClick={onToggle}
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
