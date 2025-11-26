import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-glass-box">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-left">
            <h3 className="footer-name">Amy Sauden</h3>
            <p className="footer-tagline">Cybersecurity · Data · Design</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-icons">
            <a href="mailto:saudenaa@mail.uc.edu"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/amishasauden" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/saudenaa" target="_blank"><FaGithub /></a>
            <a href="tel:5133072996"><FaPhone /></a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2025 Amy Sauden — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
