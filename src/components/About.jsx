import React, { useState } from "react";

export default function About() {
  const [active, setActive] = useState("skills");

  return (
    <section className="about">
      <div className="about-wrapper">

        {/* LEFT IMAGE SECTION */}
        <div className="about-photo">
          <img src="/src/assets/profile.jpg" alt="Amy Sauden" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-intro">
            I’m Amy, cybersecurity and data student who likes building things that are practical,
            useful, and easy to understand. Most of my work sits at the intersection of security and research.
          </p>

          <p className="about-intro">
            
            
          </p>

          {/* TABS */}
          <div className="about-tabs">
            <button 
              className={active === "skills" ? "active" : ""} 
              onClick={() => setActive("skills")}
            >
              Skills
            </button>
            <button 
              className={active === "experience" ? "active" : ""} 
              onClick={() => setActive("experience")}
            >
              Experience
            </button>
            <button 
              className={active === "education" ? "active" : ""} 
              onClick={() => setActive("education")}
            >
              Education
            </button>
          </div>

          {/* TAB CONTENTS */}
          <div className="about-tab-content">

            {/* SKILLS */}
            {active === "skills" && (
              <div className="skills-grid">
                <div className="skill-card">
                  <h3>Data & ML</h3>
                  <ul>
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Scikit-Learn</li>
                    <li>Excel</li>
                    <li>Power BI</li>
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>Cybersecurity</h3>
                  <ul>
                    <li>Wireshark</li>
                    <li>Linux</li>
                    <li>VMware / VirtualBox</li>
                    <li>Docker</li>
                    <li>Packet Tracer</li>
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>Web Development</h3>
                  <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>npm</li>
                  </ul>
                </div>

                <div className="skill-card">
                  <h3>UI / UX</h3>
                  <ul>
                    <li>Figma</li>
                    <li>Canva</li>
                  </ul>
                </div>
              </div>
            )}

            {/* EXPERIENCE */}
            {active === "experience" && (
              <div className="exp-list">

                <div className="exp-item">
                  <img src="/src/assets/nasaobservatory.jpg" alt="NASA Space Apps" />
                  <div>
                    <h4>NASA International Space Apps | Cincinnati — Local Lead</h4>
                    <p>Managed mentorship, event operations, logistics, storytelling, and community engagement.</p>
                  </div>
                </div>

                <div className="exp-item">
                  <img src="/src/assets/cech.jpg" alt="CECH Analytics" />
                  <div>
                    <h4>Marketing Analyst — CECH, University of Cincinnati</h4>
                    <p>Built dashboards, analysed trends, and supported social media insights.</p>
                  </div>
                </div>

                <div className="exp-item">
                  <img src="/src/assets/adaapt.jpg" alt="ADAAPT Studio" />
                  <div>
                    <h4>ADAAPT Studio — Creative and Operational Support</h4>
                    <p>Helped student entrepreneurs with branding, visuals, and product design.</p>
                  </div>
                </div>

                <div className="exp-item">
                  <img src="/src/assets/intern.jpg" alt="Marketing Intern" />
                  <div>
                    <h4>Marketing Intern </h4>
                    <p>Designed content, managed social media, and supported event coordination.</p>
                  </div>
                </div>

              </div>
            )}

            {/* EDUCATION */}
            {active === "education" && (
              <div className="edu-list">

                <div className="edu-item">
                  <img src="/src/assets/uc.png" alt="University of Cincinnati" />
                  <div>
                    <h4>University of Cincinnati</h4>
                    <p>2024–2029</p>
                    <p>Bachelor of Science in Cybersecurity, Data Track</p>
                  </div>
                </div>

                <div className="edu-item">
                  <img src="/src/assets/uniglobe.jpg" alt="Uniglobe Secondary School" />
                  <div>
                    <h4>Uniglobe Secondary School</h4>
                    <p>Business Management & Economics</p>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
