import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

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
      </div>
    </>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <>
//         <div className='Nav-Holder'>
//             <Link to={"/"} className='logo'>hij</Link>
//             <Link to={"/"} className='Nav-Menu i1 active'>Home</Link>
//             <Link to={"/projects"} className='Nav-Menu'>Projects</Link>
//             <Link to={"/updates"} className='Nav-Menu'>Updates</Link>
//         </div>
//     </>
//   )
// }

// export default Navbar
