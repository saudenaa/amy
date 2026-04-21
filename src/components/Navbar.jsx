import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { label: "Work",      id: "work"      },
  { label: "Projects",  id: "projects"  },
  { label: "Volunteer", id: "volunteer" },
  { label: "Resume",    id: "resume"    },
  { label: "Contact",   id: "contact"   },
];

export default function Navbar({ theme, setTheme, current }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else       document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <button className="nav-logo" onClick={() => jump("hero")}>
          <span className="nav-logo-badge">AS</span>
          <span>Amy Sauden</span>
        </button>

        {/* Desktop links */}
        <div className="nav-right">
          <div className="nav-links" style={{ display: "flex", gap: "4px" }}>
            {LINKS.map((l) => (
              <button
                key={l.id}
                className={`nav-link${current === l.id ? " active" : ""}`}
                onClick={() => jump(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="nav-hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <button key={l.id} className="mobile-menu-link" onClick={() => jump(l.id)}>
              {l.label}
            </button>
          ))}
          <button
            style={{ marginTop: 16, color: "var(--muted)", fontSize: 14, textAlign: "left" }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Switch to {theme === "dark" ? "Light" : "Dark"} mode
          </button>
        </div>
      )}
    </>
  );
}
