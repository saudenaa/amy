const ROLES = [
  {
    org: "NASA International Space Apps Challenge",
    role: "Local Lead — Cincinnati",
    date: "March 2025 – October 2025",
    body: "Led end-to-end logistics and technical coordination for 66+ participants — managed sponsor outreach, resolved hardware and software incidents in real time, and kept the entire event running under pressure.",
    stats: ["66+ participants", "Full event logistics owned"],
  },
  {
    org: "Gaskin Foundation",
    role: "STEM Robotics Instructor",
    date: "November 2025 – Present",
    body: "Teaching K–12 students to design, program, and build automation robots — introducing engineering concepts, programming logic, and systems thinking through hands-on project-based learning.",
    stats: [],
  },
  {
    org: "Bearcat Beginnings — UC-CECH",
    role: "Production Lead",
    date: null,
    body: "Created the online experience that welcomes international students to UC before they set foot on campus — wrote the scripts, recorded and edited the content, and shaped the first impression thousands of students get of their new home.",
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
          <h2 className="section-heading">The work that isn't on the payroll.</h2>
          <p className="section-intro">
            I don't think leadership is something you do at work. These are the rooms I walked
            into, the problems I picked up, and the people I tried to make things better for.
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
