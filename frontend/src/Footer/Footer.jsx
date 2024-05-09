import React from "react";
import "./Footer.css";
import { assets } from "../assets/assets";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>bete the great bete the great always god with me</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Comapny</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+2519 -111 -222-333</li>
            <li>Rocky@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> CopyRight 2024 tomato.com - All Right reserved</p>
    </div>
  );
}

export default Footer;
