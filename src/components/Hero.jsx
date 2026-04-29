import { FiArrowDown } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import TerminalHero from "./TerminalHero.jsx";

export default function Hero() {
  const jumpTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">

          {/* ── Left ─────────────────────────────────── */}
          <div className="hero-left">
            <span className="hero-eyebrow">
              AI &amp; IT &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; Systems Architecture
            </span>

            <h1 className="hero-name">
              Amy<br />
              <span className="hero-name-accent">Sauden.</span>
            </h1>

            <p className="hero-tagline">
              I don't build software.<br />
              I build certainty.
            </p>

            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => jumpTo("work")}>
                Enter System
              </button>
              <button className="btn-secondary" onClick={() => jumpTo("projects")}>
                View Impact
              </button>
            </div>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/amysauden/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/saudenaa"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* ── Right: Terminal ─────────────────────── */}
          <div className="hero-graph">
            <TerminalHero />
          </div>
        </div>
      </div>

      <button
        className="scroll-arrow"
        onClick={() => jumpTo("work")}
        aria-label="Scroll to work"
      >
        <span>scroll</span>
        <FiArrowDown />
      </button>
    </section>
  );
}
