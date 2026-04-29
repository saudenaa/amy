function N({ children }) {
  return <span className="stat-num">{children}</span>;
}

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
            {bullets.map((b) => (
              <li key={b.title}>
                <strong>{b.title}</strong> — {b.text}
              </li>
            ))}
          </ul>
        )}
        {stats && (
          <div className="stat-row">
            {stats.map((s) => <span key={s.label} className="stat-tag"><N>{s.num}</N> {s.label}</span>)}
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
          <p className="section-intro">
            Real users. Real stakes. No mockups.
          </p>
        </div>

        <div className="work-stack">
          <div className="reveal reveal-delay-1">
            <ExpCard
              date="January 2026 – Present"
              company="The Kroger Co."
              role="Software Development & Systems Intern"
              mission="Eliminate administrative friction in high-volume environments."
              bullets={[
                {
                  title: "Leave Tracker",
                  text: "I identified a communication breakdown where 500+ employees were trapped in manual email chains. I engineered a one-click self-service app that collapsed multi-layer approval chains into a single source of truth.",
                },
                {
                  title: "Transportation Dispatch Hub",
                  text: "Scaled my influence to a billion-dollar fulfillment engine — connecting fragmented departments into a cohesive technical ecosystem that drives operational clarity at scale.",
                },
              ]}
              stats={[
                { num: "500+", label: "Users Empowered" },
                { num: "$1B+", label: "Operational Scale" },
                { num: "100%", label: "Manual Task Reduction" },
              ]}
            />
          </div>

          <div className="reveal reveal-delay-2">
            <ExpCard
              date="February 2025 – December 2025"
              company="University of Cincinnati — CECH"
              role="Strategic Data Analyst"
              mission="Provide the single source of truth for executive leadership."
              body="Transformed 10,000+ raw records into 15+ interactive dashboards that senior leadership actually used to make decisions. This wasn't about data visualization — it was about decision speed. My pipelines accelerated the ability to act by 15%."
              stats={[
                { num: "15+", label: "Dashboards Built" },
                { num: "10,000+", label: "Records Automated" },
                { num: "15%", label: "Faster Decisions" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
