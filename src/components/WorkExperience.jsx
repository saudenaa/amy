function ExpCard({ date, company, role, mission, body, bullets, stats }) {
  return (
    <article className="card card-media">
      <div className="card-no-img">
        <span className="card-img-date">{date}</span>
        <p className="card-img-company" style={{ color: "var(--text)" }}>{company}</p>
        <p className="card-img-role" style={{ color: "var(--muted)" }}>{role}</p>
      </div>

      <div className="card-body">
        {mission && (
          <p className="exp-mission">
            <span className="exp-mission-label">The Mission —</span> {mission}
          </p>
        )}
        {body && <p className="exp-body">{body}</p>}
        {bullets && (
          <ul className="exp-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        {stats && (
          <div className="stat-row">
            {stats.map((s) => (
              <span key={s.label} className="stat-tag">
                <span className="stat-num">{s.num}</span> {s.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function WorkExperience() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Work Experience</span>
          <h2 className="section-heading">Where the rubber meets the road.</h2>
          <p className="section-intro">Real users. Real stakes. No mockups.</p>
        </div>

        <div className="work-stack">

          {/* Kroger AI & Data Strategy — newest */}
          <div className="reveal reveal-delay-1">
            <ExpCard
              date="May 2026 – August 2026 · Incoming"
              company="Kroger"
              role="AI & Data Strategy Intern"
              bullets={[
                <>
                  <strong>Generative Decision Intelligence: Architecting</strong> a custom{" "}
                  <strong>LLM-driven interface</strong> ("AI for Leaders") that allows executives
                  to query complex datasets using natural language.
                </>,
                <>
                  <strong>Strategic Velocity: Automating</strong> high-level data synthesis to
                  provide <strong>instantaneous answers</strong>, eliminating the need for manual
                  analyst reports and reducing information lag.
                </>,
                <>
                  <strong>Process Efficiency: Optimizing</strong> data pipelines to ensure{" "}
                  <strong>real-time accuracy</strong>, shifting leadership from reactive browsing
                  to proactive, AI-assisted decision-making.
                </>,
              ]}
            />
          </div>

          {/* Kroger Software Developer */}
          <div className="reveal reveal-delay-2">
            <ExpCard
              date="January 2026 – April 2026"
              company="Kroger"
              role="Software Developer Intern"
              bullets={[
                <>
                  <strong>Systemic Consolidation: Migrated</strong> a <strong>$1B+</strong>{" "}
                  logistics workflow from fragmented chat records to a centralized technical
                  engine, ensuring <strong>100% data retention.</strong>
                </>,
                <>
                  <strong>Operational Transparency: Engineered</strong> a real-time tracking
                  system utilized by <strong>500+ employees</strong>, eliminating data loss and
                  accelerating coordination between Planning and Transportation teams.
                </>,
                <>
                  <strong>Workforce Optimization: Architected</strong> a "one-click" self-service
                  system for <strong>56+ employees</strong>, achieving{" "}
                  <strong>100% manual task reduction</strong> for leave tracking.
                </>,
                <>
                  <strong>Data Integrity: Identified and corrected</strong> high-frequency
                  scheduling errors and duplicate entries, establishing a{" "}
                  <strong>Single Source of Truth</strong> for workforce data.
                </>,
              ]}
              stats={[
                { num: "500+", label: "Employees Impacted" },
                { num: "$1B+", label: "Operational Scale" },
                { num: "100%", label: "Manual Task Reduction" },
              ]}
            />
          </div>

          {/* UC Strategic Data Analyst */}
          <div className="reveal reveal-delay-2">
            <ExpCard
              date="February 2025 – December 2025"
              company="University of Cincinnati — CECH"
              role="Strategic Data Analyst"
              mission="Provide the single source of truth for executive leadership."
              bullets={[
                <>
                  <strong>Decision Intelligence: Transformed 10,000+ raw records</strong> into{" "}
                  <strong>15+ interactive dashboards</strong> designed for senior leadership.
                </>,
                <>
                  <strong>Operational Acceleration: Automated</strong> data pipelines that
                  reduced information lag, increasing executive{" "}
                  <strong>decision-making speed by 15%.</strong>
                </>,
                <>
                  <strong>Impact-Driven Design: Shifted</strong> department workflows from
                  manual guesswork to high-fidelity, data-driven strategy.
                </>,
              ]}
              stats={[
                { num: "15+",     label: "Dashboards Built" },
                { num: "10,000+", label: "Records Automated" },
                { num: "15%",     label: "Faster Decisions" },
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
