import React from "react";
import GalaxyGraph from "./GalaxyGraph";

export default function Hero({ onJump }) {
  return (
    <section id="home" className="hero-section">
      {/* LEFT SIDE TEXT */}
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, i'm <span className="highlight">Amy</span> Sauden.
        </h1>

        <p className="hero-subtitle">
          Exploring. Questioning. Learning.
  
        </p>

        {/* SOCIAL ICONS (now inside hero-left) */}
        <div className="hero-social">
          <a
            href="https://www.linkedin.com/in/amishasauden/"
            target="_blank"
            rel="noreferrer"
            className="social-icon linkedin"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/saudenaa"
            target="_blank"
            rel="noreferrer"
            className="social-icon github"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE 3D GRAPH */}
      <div className="hero-right no-bg">
        <GalaxyGraph />
      </div>
    </section>
  );
}
