import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-Section">
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="post" title="Post">
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
