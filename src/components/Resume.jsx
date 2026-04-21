import { FiDownload } from "react-icons/fi";

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <section id="resume">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Resume</span>
          <h2 className="section-heading">Everything in one place.</h2>
          <p className="section-intro">
            The full picture — work, projects, leadership, certifications.
          </p>
          <button className="btn-primary resume-download-btn no-print" onClick={handlePrint}>
            <FiDownload style={{ marginRight: 8 }} />
            Download PDF
          </button>
        </div>

        {/* ── Resume sheet — this is what prints ── */}
        <div className="resume-sheet reveal" id="resume-sheet">

          {/* Header */}
          <div className="rs-header">
            <h1 className="rs-name">Amy Sauden</h1>
            <div className="rs-contact">
              <span>amishasauden5@gmail.com</span>
              <span className="rs-dot">·</span>
              <a href="https://www.linkedin.com/in/amysauden/" target="_blank" rel="noreferrer">
                linkedin.com/in/amysauden
              </a>
              <span className="rs-dot">·</span>
              <a href="https://github.com/saudenaa" target="_blank" rel="noreferrer">
                github.com/saudenaa
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="rs-section">
            <h2 className="rs-section-title">Education</h2>
            <div className="rs-row">
              <div className="rs-row-left">
                <p className="rs-org">University of Cincinnati</p>
                <p className="rs-sub">B.S. Cybersecurity &amp; Data Science</p>
              </div>
              <span className="rs-date">Expected May 2029</span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="rs-section">
            <h2 className="rs-section-title">Work Experience</h2>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">The Kroger Co.</p>
                  <p className="rs-sub">Software Development Intern</p>
                </div>
                <span className="rs-date">Jan 2026 – Present</span>
              </div>
              <ul className="rs-bullets">
                <li>Built and shipped 2 internal tools impacting 500+ employees — replacing manual email chains and Excel sheets with self-service apps</li>
                <li><strong>Leave Tracker:</strong> Collapsed multi-layer manager approval chains into a 1-click self-service app; automated calendar updates and notifications</li>
                <li><strong>Transportation Dispatch Hub:</strong> Connected 500+ supply chain employees across the fulfillment department, driving billion-dollar operational cost reductions</li>
              </ul>
            </div>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">University of Cincinnati — CECH</p>
                  <p className="rs-sub">Marketing Analyst</p>
                </div>
                <span className="rs-date">Feb 2025 – Dec 2025</span>
              </div>
              <ul className="rs-bullets">
                <li>Built 15+ interactive Power BI &amp; Tableau dashboards used by senior leadership as the single source of truth for executive reporting</li>
                <li>Python automation processed 10,000+ interaction records, improving decision speed by 15%</li>
              </ul>
            </div>
          </div>

          {/* Projects & Research */}
          <div className="rs-section">
            <h2 className="rs-section-title">Projects &amp; Research</h2>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">AI / Bio Research Lab</p>
                  <p className="rs-sub">Undergraduate Research Assistant · Python, Fuzzy Logic, Deep Learning</p>
                </div>
                <span className="rs-date">Dec 2025 – Present</span>
              </div>
              <ul className="rs-bullets">
                <li>Extracting and analyzing URL datasets for fuzzy logic-based cyber threat detection; refining deep learning pipelines to maintain data quality and model accuracy</li>
              </ul>
            </div>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">ClickSnitch — Phishing Detection ML App</p>
                  <p className="rs-sub">Python · Scikit-Learn</p>
                </div>
              </div>
              <ul className="rs-bullets">
                <li>Engineered full ML pipeline from feature extraction to model training — classifies URLs and RGB color data as phishing or safe; achieved 99% accuracy</li>
              </ul>
            </div>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">NeuralNet++ — Neural Network from Scratch</p>
                  <p className="rs-sub">C++</p>
                </div>
              </div>
              <ul className="rs-bullets">
                <li>Implemented feedforward neural network with backpropagation and gradient descent in C++; 100% accuracy on XOR classification across 10,000 epochs, zero libraries</li>
              </ul>
            </div>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">Water Cost &amp; Health Risk Analysis</p>
                  <p className="rs-sub">Excel VBA · Linear Programming · Power BI</p>
                </div>
              </div>
              <ul className="rs-bullets">
                <li>Applied optimization models to balance infrastructure costs vs. health thresholds; built executive Power BI dashboards for leadership cost-benefit decisions</li>
              </ul>
            </div>
          </div>

          {/* Volunteer & Leadership */}
          <div className="rs-section">
            <h2 className="rs-section-title">Volunteer &amp; Leadership</h2>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">NASA International Space Apps Challenge</p>
                  <p className="rs-sub">Local Lead — Cincinnati</p>
                </div>
                <span className="rs-date">Mar – Oct 2025</span>
              </div>
              <ul className="rs-bullets">
                <li>End-to-end event logistics for 66+ participants — sponsor outreach, real-time hardware/software incident resolution</li>
              </ul>
            </div>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">Gaskin Foundation</p>
                  <p className="rs-sub">STEM Robotics Instructor</p>
                </div>
                <span className="rs-date">Nov 2025 – Present</span>
              </div>
              <ul className="rs-bullets">
                <li>Teaching K–12 students to design, program, and build automation robots through hands-on project-based learning</li>
              </ul>
            </div>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">Bearcat Beginnings — UC-CECH</p>
                  <p className="rs-sub">Production Lead</p>
                </div>
              </div>
              <ul className="rs-bullets">
                <li>Produced online orientation experience shaping the first impression thousands of international students get of UC — scripted, recorded, and edited all content</li>
              </ul>
            </div>

            <div className="rs-entry">
              <div className="rs-row">
                <div className="rs-row-left">
                  <p className="rs-org">Science Olympiad</p>
                  <p className="rs-sub">Proctor</p>
                </div>
                <span className="rs-date">2025</span>
              </div>
              <ul className="rs-bullets">
                <li>Proctored competitive events and evaluated answer sheets for 10+ high school students</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="rs-section">
            <h2 className="rs-section-title">Certifications</h2>
            <p className="rs-certs">
              AWS Cloud Practitioner &nbsp;·&nbsp; CompTIA Network+ &nbsp;·&nbsp;
              Cisco Cyber Threat Management &nbsp;·&nbsp; Google Cloud Generative AI Essentials
            </p>
          </div>

          {/* Skills */}
          <div className="rs-section rs-section--last">
            <h2 className="rs-section-title">Technical Skills</h2>
            <div className="rs-skills">
              <div className="rs-skill-row">
                <span className="rs-skill-label">Languages</span>
                <span>Python, C++, SQL, JavaScript, React</span>
              </div>
              <div className="rs-skill-row">
                <span className="rs-skill-label">Tools &amp; ML</span>
                <span>Scikit-Learn, Power BI, Tableau, Excel VBA, Supabase</span>
              </div>
              <div className="rs-skill-row">
                <span className="rs-skill-label">Cloud &amp; Security</span>
                <span>AWS, Google Cloud, fuzzy logic threat detection, ML-based phishing classification</span>
              </div>
            </div>
          </div>

        </div>
        {/* end resume-sheet */}
      </div>
    </section>
  );
}
