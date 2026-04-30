import { FiGithub, FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    type: "Full-Stack Engineering · AI & Data",
    tech: "Team Lead · AI Triage Logic · Optimized Resource Flow",
    title: "FixMate",
    subtitle: "AI-Driven Home Maintenance · Hackathon",
    body: "Most platforms are slow and manual. Leading a team of three, I architected an AI triage engine to solve simple problems instantly — ensuring professional resources are only used for complex structural needs. The most effective systems automate the noise so that human expertise stays focused on high-value work.",
    stats: ["Team Lead", "AI Triage Engine", "Hackathon Build"],
    github: null,
  },
  {
    type: "Research",
    tech: "Fuzzy Logic · Deep Learning · Python",
    title: "AI / Bio Research Lab",
    subtitle: "Undergraduate Research Assistant · December 2025 – Present",
    body: "Refining deep learning pipelines for cyber-threat detection. I use Fuzzy Logic to identify the anomalies that traditional binary classification systems miss — extracting signal from ambiguity at the data layer.",
    stats: ["Active research", "Cyber threat detection"],
    github: null,
  },
  {
    type: "ML · Cybersecurity",
    tech: "Python · Scikit-Learn",
    title: "ClickSnitch",
    subtitle: "Phishing Detection ML App",
    body: "Built an ML app that classifies URLs and RGB color data as phishing or safe — engineered the full pipeline from feature extraction to model training to visualization entirely from scratch. 99% accuracy. No shortcuts.",
    stats: ["99% accuracy", "Full pipeline — zero shortcuts"],
    github: "https://github.com/saudenaa/clicksnitch-phishing-detection",
  },
  {
    type: "Systems Programming",
    tech: "C++",
    title: "NeuralNet++",
    subtitle: "Deep Learning from Scratch",
    body: "Most people use libraries. I built a neural network in C++ from the ground up — implementing backpropagation and gradient descent by hand. Why? Because a leader must master the foundations before they can manage the tower.",
    stats: ["100% accuracy", "10,000 epochs", "Zero libraries"],
    github: null,
  },
  {
    type: "Data Analysis · Optimization",
    tech: "Excel VBA · Linear Programming · Power BI",
    title: "Water Cost & Health Risk Analysis",
    subtitle: "Optimization Modelling",
    body: "Used linear programming to balance infrastructure costs against human health thresholds. I translated a complex mathematical tradeoff into executive-level clarity — making the invisible visible for leadership.",
    stats: ["Cost vs. safety optimized", "Executive dashboards delivered"],
    github: "https://github.com/saudenaa/water-risk-cost-env-analysis",
    caseStudy: true,
  },
];

function ProjectCard({ p }) {
  return (
    <article className="card card-media">
      <div className="card-no-img">
        <span className="card-img-date">{p.type} &nbsp;·&nbsp; {p.tech}</span>
        <p className="card-img-company" style={{ color: "var(--text)", fontSize: "18px" }}>{p.title}</p>
        <p className="card-img-role" style={{ color: "var(--muted)" }}>{p.subtitle}</p>
      </div>
      <div className="card-body">
        <p className="project-body">{p.body}</p>
        {p.stats.length > 0 && (
          <div className="stat-row">
            {p.stats.map((s) => <span key={s} className="stat-tag">{s}</span>)}
          </div>
        )}
        {p.github && (
          <div className="card-links">
            {p.caseStudy ? (
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link card-link--primary">
                <FiExternalLink /> Case Study
              </a>
            ) : (
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link">
                <FiGithub /> GitHub Repo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Research &amp; Projects</span>
          <h2 className="section-heading">The architecture of curiosity.</h2>
          <p className="section-intro">
            These aren't student projects. They are proof of a builder's mindset —
            systems designed from first principles, engineered for real-world reliability.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="reveal">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
