import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>نقش گمرک ها در تجارت بین الملل</p>
      <p>هر روز هفته 24 ساعته در خدمت شما هستیم!</p>
      <div className="contact-info">
        <span>09123456789</span>
      </div>
      <p>راه های ارتباطی</p>
      <div className="social-links">
        <a href="#">اینستاگرام</a>
        <a href="#">تلگرام</a>
        <a href="#">ایمیل</a>
      </div>
    </footer>
  );
}

export default Footer;
