const ROLES = [
  {
    org: "NASA International Space Apps Challenge",
    role: "Local Lead — Cincinnati",
    date: "March 2025 – October 2025",
    body: "Orchestrated Cincinnati's NASA hackathon for 66+ innovators. I managed the sponsors, the logistics, and the technical pressure — ensuring a seamless experience where participants could focus entirely on building.",
    stats: ["66+ participants", "Full event logistics owned"],
  },
  {
    org: "Gaskin Foundation",
    role: "STEM Robotics Instructor",
    date: "November 2025 – Present",
    body: "Translating complex systems thinking into programming logic for K–12 students. If you can't explain it simply, you don't understand it well enough.",
    stats: [],
  },
  {
    org: "Bearcat Beginnings — UC-CECH",
    role: "Production Lead",
    date: null,
    body: "Scripted and produced the digital welcome for thousands of international students — shaping the first human impression they have of their new home. Every word was intentional.",
    stats: [],
  },
  {
    org: "Science Olympiad",
    role: "Proctor",
    date: "2025",
    body: "Proctored competitive events and evaluated answer sheets for 10+ high school students — ensuring accuracy and integrity across academic assessments.",
    stats: [],
  },
];

function VolCard({ r }) {
  return (
    <article className="card card-media">
      <div className="card-no-img">
        {r.date && <span className="card-img-date">{r.date}</span>}
        <p className="card-img-company" style={{ color: "var(--text)", fontSize: "17px" }}>{r.org}</p>
        <p className="card-img-role" style={{ color: "var(--muted)" }}>{r.role}</p>
      </div>
      <div className="card-body">
        <p className="vol-body">{r.body}</p>
        {r.stats.length > 0 && (
          <div className="stat-row">
            {r.stats.map((s) => <span key={s} className="stat-tag">{s}</span>)}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Volunteer() {
  return (
    <section id="volunteer">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Volunteer &amp; Leadership</span>
          <h2 className="section-heading">Leadership beyond the code.</h2>
          <p className="section-intro">
            Real leadership isn't a job title. These are the rooms I walked into,
            the problems I picked up, and the people I chose to show up for.
          </p>
        </div>

        <div className="volunteer-grid">
          {ROLES.map((r) => (
            <div key={r.org} className="reveal">
              <VolCard r={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
