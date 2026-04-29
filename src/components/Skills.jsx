const SKILLS = [
  {
    category: "Strategic Stack",
    items: ["Python", "C++", "SQL", "JavaScript", "React", "Supabase"],
  },
  {
    category: "AI / ML",
    items: [
      "TensorFlow", "PyTorch", "Scikit-Learn", "Neural Networks",
      "Deep Reinforcement Learning", "Gradient Boosted Trees",
      "LLMs", "NLP", "Computer Vision", "Anomaly Detection", "Fuzzy Logic",
    ],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "Google Cloud", "Power BI", "Tableau", "Excel VBA"],
  },
  {
    category: "Certifications",
    items: [
      "AWS Cloud Practitioner",
      "CompTIA Network+",
      "Cisco Cyber Threat Management",
      "Google Cloud Generative AI Essentials",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Technical Core</span>
          <h2 className="section-heading">The stack behind the work.</h2>
          <p className="section-intro">
            Every tool chosen deliberately. Every domain understood from first principles.
          </p>
        </div>

        <div className="skills-grid reveal">
          {SKILLS.map((group) => (
            <div key={group.category} className="skills-group">
              <h3 className="skills-category">{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
