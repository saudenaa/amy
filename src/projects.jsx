
export const projects = [
  {
    id: 1,
    title: "Water Treatment Cost, Risk & Health Impact Analysis",
    tags: ["ML", "Python", "Data"],
    blurb: "A scientific analysis exploring how treatment choices affect operational cost, environmental risk, and public health outcomes",
    action: { label: "View case study", href: "https://github.com/saudenaa/water-risk-cost-env-analysis" }
  },
  {
    id: 2,
    title: "ClickSnitch — Phishing Detection Tool",
    tags: ["Cyber", "Community", "Data"],
    blurb: "A lightweight machine-learning phishing-detection engine that identifies malicious URLs, classifies risk levels, and explains threat patterns through a clear, interactive dashboard.",
    
    action: { label: "See event", href: "https://github.com/saudenaa/ClickSnitch" }
  },

  {
    id: 3,
    title: "NASA Space Apps — Local Lead",
    tags: ["Events", "Community", "Data"],
    blurb: "Organising sponsors, mentors, dashboards and storytelling.",
    
    action: { label: "See event", href: "https://www.spaceappschallenge.org/2025/local-events/cincinnati/" }
  },

  {
    id: 4,
    title: "Personal Portfolio",
    tags: ["Events", "Community", "Data"],
    blurb: "A fully custom, multi-section portfolio designed and engineered from scratch using React, Vite, custom UI components, and glassmorphism-based UX.",
   
    action: { label: "See event", href: "#" }
  },

  {
    id: 5,
    title: "Linux VM & Cross-Functional System Operations",
    tags: ["Unix", "VM", "Linux"],
    blurb: "A hands-on project involving Linux server setup, user/permission management, remote access, package control, and system monitoring.",
    
    action: { label: "See event", href: "#" }
  },

    {
    id: 6,
    title: "SQL Database Design & Management",
    tags: ["database", "SQL", "Data"],
    blurb: "End-to-end development of a relational database system including schema design, ERD modelling, normalisation, stored procedures, triggers, and test queries.",
    
    action: { label: "See event", href: "#" }
  }

];


<section id="projects" className="screen reveal projects-section">
  <div className="project-header">
    <h2 className="section-title">Projects</h2>
    <p className="section-sub">Here are some of the projects I’ve worked on.</p>
  </div>

  <div className="projects-row">
    {projects.map((p) => (
      <div key={p.id} className="project-card-glass">
        <img src={p.image} alt={p.title} className="project-img" />

        <h3 className="project-name">{p.title}</h3>
        <p className="project-desc">{p.blurb}</p>

        <a
          href={p.action.href}
          target="_blank"
          rel="noreferrer"
          className="project-btn-glass"
        >
          {p.action.label}
        </a>
      </div>
    ))}
  </div>
</section>


