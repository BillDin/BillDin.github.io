import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <ul className="ullist">
        <li>
          {" "}
          <NavLink to="/" onClick={props.clicked}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} to="/blogs" onClick={props.clicked}>
            Medium Blogs
          </NavLink>{" "}
        </li>
      </ul>
    </>
  );
}

export default Navbar;
