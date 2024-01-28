import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Nav from "../data.json";
import { HIJ_Icon } from "../icons/HIJ_Icon";

const Navbar = () => {
  // "navtoggle" hook is used for mobile view menu toggle
  const [navtoggle, setNavtoggle] = useState(false);
  const onToggle = () => setNavtoggle(!navtoggle);

  // "scrollNav" hook is used for changing the background of Navbar on initial scroll
  const [scrollNav, setScrollNav] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener("scroll", changeNavBg);

  return (
    <>
      <div className={scrollNav ? "Nav-Holder onScroll" : "Nav-Holder"}>
        <NavLink className="Logo" to="/">
          {/* Logo SVG is exportd as Component */}
          <HIJ_Icon />
        </NavLink>

        {/* Below is the "MenuToggle for Mobile View" */}
        <div className="MenuToggle" onClick={onToggle}>
          <div className={navtoggle ? "Rect1 T-active" : "Rect1"}></div>
          <div className={navtoggle ? "Rect2 T-active" : "Rect2"}></div>
          <div className={navtoggle ? "Rect3 T-active" : "Rect3"}></div>
        </div>
        {/* List of Navigation Links are mapped via JSON */}
        <div
          className={
            navtoggle ? "NavMenuList NMactive" : "NavMenuList NMinactive"
          }
        >
          {Nav.map((data, index) => (
            <NavLink
              key={index}
              // Below is the Function used to highlght the active page
              className={({ isActive, isPending }) =>
                isActive
                  ? "Nav-Menu Nav-Menu-active"
                  : isPending
                  ? "Nav-Menu"
                  : "Nav-Menu"
              }
              to={data.link}
              onClick={onToggle}
            >
              <div className="uline">{data.name}</div>
            </NavLink>
          ))}
          {/* A button inside the Navbar is designed below */}
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
