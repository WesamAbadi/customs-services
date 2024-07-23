import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="logo.png" alt="Company Logo" />
      </div>
      <ul className="navbar-links">
        <li>تماس با ما</li>
        <li>مشتریان ما</li>
        <li>درباره ما</li>
        <li>خدمات تخصصی</li>
      </ul>
    </nav>
  );
}

export default Navbar;
