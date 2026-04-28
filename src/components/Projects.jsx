import { FiGithub, FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    type: "Research",
    tech: "Fuzzy Logic · Deep Learning · Python",
    title: "AI / Bio Research Lab",
    subtitle: "Undergraduate Research Assistant · December 2025 – Present",
    body: "Working with graduate researchers on real findings — extracting and analyzing URL datasets for fuzzy logic-based cyber threat detection and refining deep learning pipelines to keep data clean and models accurate.",
    stats: ["Active research", "Cyber threat detection"],
    github: null,
    demo: null,
  },
  {
    type: "ML · Cybersecurity",
    tech: "Python · Scikit-Learn",
    title: "ClickSnitch",
    subtitle: "Phishing Detection ML App",
    body: "Built an ML app that classifies URLs and RGB color data as phishing or safe — engineered the full pipeline from feature extraction to model training to visualization entirely from scratch. Hit 99% accuracy.",
    stats: ["99% accuracy", "Full pipeline built from scratch"],
    github: "https://github.com/saudenaa/clicksnitch-phishing-detection",
    demo: null,
  },
  {
    type: "Systems Programming",
    tech: "C++",
    title: "NeuralNet++",
    subtitle: "Neural Network from Scratch",
    body: "Built a feedforward neural network in C++ implementing backpropagation and gradient descent by hand. Achieved 100% accuracy on XOR classification across 10,000 training epochs. Most people use a library. I wanted to understand what was actually happening inside.",
    stats: ["100% accuracy", "10,000 epochs", "Zero libraries used"],
    github: null,
    demo: null,
  },
  {
    type: "Data Analysis",
    tech: "Excel VBA · Linear Programming · Power BI",
    title: "Water Cost & Health Risk Analysis",
    subtitle: "Optimization Modelling",
    body: "Applied optimization models to balance infrastructure costs against health and safety thresholds — produced executive-level Power BI reports making cost-benefit tradeoffs visible at a glance for leadership decision-making.",
    stats: ["Cost vs. safety optimized", "Executive dashboards delivered"],
    github: "https://github.com/saudenaa/water-risk-cost-env-analysis",
    demo: null,
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
        {(p.github || p.demo || p.caseStudy) && (
          <div className="card-links">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link">
                <FiGithub /> GitHub Repo
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="card-link card-link--primary">
                <FiExternalLink /> View Project
              </a>
            )}
            {p.caseStudy && (
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link card-link--primary">
                <FiExternalLink /> Case Study
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
          <h2 className="section-heading">The things I built when no one told me to.</h2>
          <p className="section-intro">
            Some of these were class projects. Most weren't. All of them exist because I got
            curious about a problem and couldn't stop until I had a working system.
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
