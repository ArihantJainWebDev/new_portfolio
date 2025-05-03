import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const pages = ["Home", "About", "Achievements", "Services", "Contact"];

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  const [setActiveIndex] = useState(0);

  return (
    <nav className="navbar">
      <div className="logo">
        <span onClick={handleLogoClick}>Arihant Jain</span>
      </div>
      <div className="nav-pages">
        {pages.map((page, index) => (
          <NavLink
            key={page}
            to={index === 0 ? "/" : `/${pages[index].toLowerCase()}`}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {page}
          </NavLink>
        ))}
      </div>
      <div className="nav-button">
        <button className="btn">
          Download CV <i className="uil uil-file-alt"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
