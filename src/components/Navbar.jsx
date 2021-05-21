import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };
  const renderClasses = () => {
    let classes = "navlinks";
    if (navLinkOpen) {
      classes += " active";
    }
    return classes;
  };
  return (
    <nav className="top-nav">
      <div className="top-nav-content">
      <div className="logo">

      <Link className="alink" to="/">
        <img src={logo} alt="Logo" />
          
        </Link>
      </div>
      <ul className={renderClasses()}>
        <li className="link">
          <Link className="alink" to="/main">
            포항연탄은행
          </Link>
        </li>
        <li className="link">
          <Link className="alink" to="/donate">
            후원안내
          </Link>
        </li>
        <li className="link">
          <Link className="alink" to="/volunteer">
            자원봉사
          </Link>
        </li>
        <li className="link">
          <Link className="alink" to="/story">
            이야기나눔
          </Link>
        </li>
      </ul>
      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
