import React, { useState } from "react";

const SunIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
    <circle cx="12" cy="12" r="5.2" fill="currentColor" opacity="0.9"/>
    <g stroke="currentColor" strokeWidth="1.4" opacity="0.7">
      <line x1="12" y1="1.8" x2="12" y2="4.2" />
      <line x1="12" y1="19.8" x2="12" y2="22.2" />
      <line x1="1.8" y1="12" x2="4.2" y2="12" />
      <line x1="19.8" y1="12" x2="22.2" y2="12" />
      <line x1="4.5" y1="4.5" x2="6.2" y2="6.2" />
      <line x1="17.8" y1="17.8" x2="19.5" y2="19.5" />
      <line x1="4.5" y1="19.5" x2="6.2" y2="17.8" />
      <line x1="17.8" y1="6.2" x2="19.5" y2="4.5" />
    </g>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
    <path
      fill="currentColor"
      d="M21 14.5A9 9 0 0 1 9.5 3c.2-.6-.4-1.1-1-.9A9.5 9.5 0 1 0 21.9 15.5c.2-.6-.3-1.2-.9-1z"
      opacity="0.9"
    />
  </svg>
);

export default function Navbar({ theme, setTheme, current, onJump }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Portfolio" },
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const ToggleIcon = theme === "dark" ? <MoonIcon /> : <SunIcon />;

  return (
    <>
      <nav className="nav-glass">
        <button className="brand" onClick={() => onJump("home")}>
          <span className="brand-badge">AS</span>
          <div className="brand-text">
            <span className="brand-name">Amy Sauden</span>
            <span className="brand-sub">Cybersecurity · Data &amp; AI</span>
          </div>
        </button>

        <div className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onJump(l.id)}
              className={`nav-pill ${current === l.id ? "active" : ""}`}
            >
              {l.label}
            </button>
          ))}
          <button
            className="theme-pill"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Dark" : "Light"}
          >
            {ToggleIcon}
          </button>
        </div>

        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile glass panel */}
      {open && (
        <div className="mobile-sheet" onClick={() => setOpen(false)}>
          <div className="mobile-card" onClick={(e) => e.stopPropagation()}>
            {links.map((l) => (
              <button
                key={l.id}
                className="mobile-link"
                onClick={() => {
                  onJump(l.id);
                  setOpen(false);
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              className="mobile-theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {ToggleIcon} <span>{theme === "dark" ? "Dark" : "Light"}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
