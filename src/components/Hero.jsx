import { FiArrowDown } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import TerminalHero from "./TerminalHero.jsx";

const TICKER = [
  { num: "500+",  label: "Employees Impacted" },
  { num: "$1B+",  label: "Operational Scale Managed" },
  { num: "99%",   label: "Machine Learning Accuracy" },
  { num: "10k+",  label: "Records Automated" },
];

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
              Amy Sauden &nbsp;·&nbsp; UC Cincinnati &nbsp;·&nbsp; May 2029
            </span>

            <h1 className="hero-heading">
              I architect systems that bridge the gap between complex data and human decision.
            </h1>

            <p className="hero-sub">
              Most systems are built for machines; I build for the people who lead them.
              I specialize in turning billion-dollar operational complexity into one-click reality.
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
              <a href="https://www.linkedin.com/in/amysauden/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/saudenaa" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* ── Right: Terminal ─────────────────────── */}
          <div className="hero-graph">
            <TerminalHero />
          </div>
        </div>

        {/* ── Impact Ticker ────────────────────────── */}
        <div className="impact-ticker">
          {TICKER.map((t) => (
            <div key={t.label} className="impact-item">
              <span className="impact-num">{t.num}</span>
              <span className="impact-label">{t.label}</span>
            </div>
          ))}
        </div>

      </div>

      <button className="scroll-arrow" onClick={() => jumpTo("work")} aria-label="Scroll">
        <span>scroll</span>
        <FiArrowDown />
      </button>
    </section>
  );
}
