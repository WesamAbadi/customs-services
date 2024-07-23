import React from "react";
import "./Header.css";
import header from "../assets/header.png";
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={header} alt="Header" className="header-image" />
        <div>
          <h1>ارائه کلیه خدمات گمرکی در گمرکات کشور</h1>
          <p>با برنامه ریزی علمی، سریعتر ترخیص کنید</p>
          <button>تماس با ما</button>
          <button>درخواست مشاوره</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
