import React from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
const NavbarItems = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <Dropdown />
      </ul>
      <Search />
    </div>
  );
};

export default NavbarItems;
