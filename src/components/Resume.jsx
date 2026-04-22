import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Resume</span>
          <h2 className="section-heading">One page. Everything that matters.</h2>
        </div>

        <div className="resume-wrapper reveal">
          <div className="resume-toolbar no-print">
            <button className="btn-primary" onClick={() => window.print()}>
              <FiDownload style={{ marginRight: 8 }} />
              Download PDF
            </button>
          </div>

          <div className="resume-page" id="resume-sheet">

            {/* ── Header ── */}
            <div className="rp-header">
              <h1 className="rp-name">Amy Sauden</h1>
              <div className="rp-contact">
                <span>saudenaa@mail.uc.edu</span>
                <span>·</span>
                <span>linkedin.com/in/amysauden</span>
                <span>·</span>
                <span>github.com/saudenaa</span>
                <span>·</span>
                <span>Cincinnati, OH</span>
              </div>
            </div>

            {/* ── Education ── */}
            <div className="rp-section">
              <h2 className="rp-heading">Education</h2>
              <div className="rp-entry-row">
                <div>
                  <span className="rp-org">University of Cincinnati</span>
                  <span className="rp-sep"> — </span>
                  <span className="rp-role">B.S. Cybersecurity &amp; Data Science</span>
                </div>
                <span className="rp-date">Expected May 2029</span>
              </div>
            </div>

            {/* ── Work Experience ── */}
            <div className="rp-section">
              <h2 className="rp-heading">Work Experience</h2>

              <div className="rp-entry">
                <div className="rp-entry-row">
                  <div><span className="rp-org">The Kroger Co.</span><span className="rp-sep"> — </span><span className="rp-role">Software Development Intern</span></div>
                  <span className="rp-date">Jan 2026 – Present</span>
                </div>
                <ul className="rp-bullets">
                  <li>Built and shipped 2 internal tools replacing manual workflows for 500+ supply chain employees</li>
                  <li><b>Leave Tracker:</b> Collapsed multi-layer approval chains into a 1-click self-service app, eliminating manual Excel tracking and calendar coordination</li>
                  <li><b>Transportation Dispatch Hub:</b> Connected 500+ fulfillment employees across departments, contributing to billion-dollar operational cost reductions</li>
                </ul>
              </div>

              <div className="rp-entry">
                <div className="rp-entry-row">
                  <div><span className="rp-org">University of Cincinnati — CECH</span><span className="rp-sep"> — </span><span className="rp-role">Marketing Analyst</span></div>
                  <span className="rp-date">Feb – Dec 2025</span>
                </div>
                <ul className="rp-bullets">
                  <li>Built 15+ Power BI &amp; Tableau dashboards used by senior leadership as the single source of truth for executive decisions</li>
                  <li>Automated processing of 10,000+ interaction records with Python, improving decision speed by 15%</li>
                </ul>
              </div>
            </div>

            {/* ── Projects & Research ── */}
            <div className="rp-section">
              <h2 className="rp-heading">Projects &amp; Research</h2>

              <div className="rp-entry">
                <div className="rp-entry-row">
                  <div><span className="rp-org">AI / Bio Research Lab</span><span className="rp-sep"> — </span><span className="rp-role">Undergraduate Research Assistant · Python, Fuzzy Logic, Deep Learning</span></div>
                  <span className="rp-date">Dec 2025 – Present</span>
                </div>
                <ul className="rp-bullets">
                  <li>Extracting and analyzing URL datasets for fuzzy logic-based anomaly and cyber threat detection; refining deep learning pipelines for data quality and model accuracy</li>
                </ul>
              </div>

              <div className="rp-entry">
                <div className="rp-entry-row">
                  <div><span className="rp-org">ClickSnitch</span><span className="rp-sep"> — </span><span className="rp-role">Phishing Detection ML App · Python, Scikit-Learn, Feature Engineering</span></div>
                </div>
                <ul className="rp-bullets">
                  <li>Engineered full ML pipeline (feature extraction → training → visualization) classifying URLs and RGB data; 99% accuracy from scratch — no pre-built pipelines</li>
                </ul>
              </div>

              <div className="rp-entry">
                <div className="rp-entry-row">
                  <div><span className="rp-org">NeuralNet++</span><span className="rp-sep"> — </span><span className="rp-role">Neural Network from Scratch · C++</span></div>
                </div>
                <ul className="rp-bullets">
                  <li>Implemented feedforward neural network with backpropagation and gradient descent in C++; 100% XOR accuracy across 10,000 epochs, zero external libraries</li>
                </ul>
              </div>

              <div className="rp-entry">
                <div className="rp-entry-row">
                  <div><span className="rp-org">Water Cost &amp; Health Risk Analysis</span><span className="rp-sep"> — </span><span className="rp-role">Linear Programming, Power BI</span></div>
                </div>
                <ul className="rp-bullets">
                  <li>Applied optimization models to balance infrastructure costs against health/safety thresholds; built executive dashboards for cost-benefit leadership decisions</li>
                </ul>
              </div>
            </div>

            {/* ── Volunteer & Leadership ── */}
            <div className="rp-section">
              <h2 className="rp-heading">Volunteer &amp; Leadership</h2>
              <table className="rp-vol-table">
                <tbody>
                  <tr>
                    <td><span className="rp-org">NASA International Space Apps Challenge</span><span className="rp-role"> — Local Lead, Cincinnati · 66+ participants, end-to-end event logistics</span></td>
                    <td className="rp-date rp-td-date">Mar – Oct 2025</td>
                  </tr>
                  <tr>
                    <td><span className="rp-org">Gaskin Foundation</span><span className="rp-role"> — STEM Robotics Instructor, teaching K–12 students programming logic and systems thinking</span></td>
                    <td className="rp-date rp-td-date">Nov 2025 – Present</td>
                  </tr>
                  <tr>
                    <td><span className="rp-org">Bearcat Beginnings, UC-CECH</span><span className="rp-role"> — Production Lead · scripted, recorded, and edited international student orientation</span></td>
                    <td className="rp-date rp-td-date"></td>
                  </tr>
                  <tr>
                    <td><span className="rp-org">Science Olympiad</span><span className="rp-role"> — Proctor · evaluated academic events for 10+ high school students</span></td>
                    <td className="rp-date rp-td-date">2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── Skills ── */}
            <div className="rp-section">
              <h2 className="rp-heading">Technical Skills</h2>
              <table className="rp-skills-table">
                <tbody>
                  <tr>
                    <td className="rp-skill-label">Languages</td>
                    <td>Python, C++, SQL, JavaScript, React</td>
                  </tr>
                  <tr>
                    <td className="rp-skill-label">ML / Deep Learning</td>
                    <td>TensorFlow, PyTorch, Scikit-Learn, Neural Networks, Deep Reinforcement Learning, Gradient Boosted Trees, LLMs, Fuzzy Logic</td>
                  </tr>
                  <tr>
                    <td className="rp-skill-label">ML Domains</td>
                    <td>NLP, Computer Vision, Anomaly Detection, Personalization &amp; Recommendation, Feature Engineering, Model Training &amp; Serving</td>
                  </tr>
                  <tr>
                    <td className="rp-skill-label">Tools &amp; Cloud</td>
                    <td>AWS, Google Cloud, Power BI, Tableau, Supabase, Excel VBA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── Certifications ── */}
            <div className="rp-section rp-section--last">
              <h2 className="rp-heading">Certifications</h2>
              <p className="rp-certs">AWS Cloud Practitioner &nbsp;·&nbsp; CompTIA Network+ &nbsp;·&nbsp; Cisco Cyber Threat Management &nbsp;·&nbsp; Google Cloud Generative AI Essentials</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
