import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Nav from "../data.json"

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
          {Nav.map((data,index) => (
            <NavLink
            key={index}
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
