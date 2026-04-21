function ExpCard({ date, company, role, body, bullets, stats }) {
  return (
    <article className="card card-media">
      <div className="card-no-img">
        <span className="card-img-date">{date}</span>
        <p className="card-img-company" style={{ color: "var(--text)" }}>{company}</p>
        <p className="card-img-role" style={{ color: "var(--muted)" }}>{role}</p>
      </div>

      <div className="card-body">
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
            {stats.map((s) => <span key={s} className="stat-tag">{s}</span>)}
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
          <h2 className="section-heading">Where the rubber met the road.</h2>
          <p className="section-intro">
            Real tools. Real users. Real impact — not side projects, not mockups.
            The kind of work that changes how hundreds of people do their jobs every single day.
          </p>
        </div>

        <div className="work-stack">
          <div className="reveal reveal-delay-1">
            <ExpCard
              date="January 2026 – Present"
              company="The Kroger Co."
              role="Software Development Intern"
              body="Built and shipped two internal tools that fundamentally changed how 500+ employees work — replacing manual email chains and Excel sheets with self-service apps that run on a single click."
              bullets={[
                {
                  title: "Leave Tracker",
                  text: "Collapsed a multi-layer manager approval chain into one self-service app. Before it existed, a single leave request meant messages passing through manager after manager, manually updated Excel sheets, and someone building a calendar by hand. Now one click does everything.",
                },
                {
                  title: "Transportation Dispatch Hub",
                  text: "After delivering the Leave Tracker, was trusted to build something at a larger scale. Connected 500+ supply chain employees across the fulfillment department, driving cost reductions at a billion-dollar operational scale.",
                },
              ]}
              stats={["500+ employees impacted", "Billion-dollar cost impact", "2 tools built & shipped", "1 click replaces entire approval chain"]}
            />
          </div>

          <div className="reveal reveal-delay-2">
            <ExpCard
              date="February 2025 – December 2025"
              company="University of Cincinnati"
              role="Marketing Analyst — CECH"
              body="Turned raw departmental data into dashboards that senior leadership actually used to make decisions — 15+ interactive Power BI and Tableau dashboards serving as the single source of truth for executive reporting. Python automation processed 10,000+ interaction records, cutting manual work and improving decision speed by 15%."
              stats={["15+ dashboards built", "10,000+ records automated", "15% faster decisions"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
