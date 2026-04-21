import React, { useState } from "react";

// Import Images properly for vite + Github
import profile from "../assets/profile.jpg";
import nasaImg from "../assets/nasaobservatory.jpg";
import cechImg from "../assets/cech.jpg";
import adaaptImg from "../assets/adaapt.jpg";
import internImg from "../assets/intern.jpg";
import ucImg from "../assets/uc.png";
import uniglobeImg from "../assets/uniglobe.jpg";

export default function About() {
  const [active, setActive] = useState("skills");

  return (
    <section className="about">
      <div className="about-wrapper">
         
        {/* LEFT IMAGE SECTION */}
        <div className="about-photo">
         <img src={profile} alt="Amy Sauden" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-intro">
            I’m Amy — I operate at the intersection where business logic meets data infrastructure.
            Studying Cybersecurity and Data Science at the University of Cincinnati, while embedding
            myself in Fortune 20 logistics operations at Kroger and leading community tech initiatives for NASA.
          </p>

          <p className="about-intro">
            I don’t choose between understanding systems and building them. I do both —
            and that dual fluency is exactly what makes the difference between a recommendation
            and an intervention that actually gets adopted.
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
                  <img src={nasaImg} alt="NASA Space Apps" />
                  <div>
                    <h4>NASA International Space Apps | Cincinnati — Local Lead</h4>
                    <p>Managed mentorship, event operations, logistics, storytelling, and community engagement.</p>
                  </div>
                </div>

                <div className="exp-item">
                  <img src={cechImg} alt="CECH Analytics" />
                  <div>
                    <h4>Marketing Analyst — CECH, University of Cincinnati</h4>
                    <p>Built dashboards, analysed trends, and supported social media insights.</p>
                  </div>
                </div>

                <div className="exp-item">
                  <img src={adaaptImg} alt="ADAAPT Studio" />
                  <div>
                    <h4>ADAAPT Studio — Creative and Operational Support</h4>
                    <p>Helped student entrepreneurs with branding, visuals, and product design.</p>
                  </div>
                </div>

                <div className="exp-item">
                  <img src={internImg} alt="Marketing Intern" />
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
                  <img src={ucImg} alt="University of Cincinnati" />
                  <div>
                    <h4>University of Cincinnati</h4>
                    <p>2024–2029</p>
                    <p>Bachelor of Science in Cybersecurity, Data Track</p>
                  </div>
                </div>

                <div className="edu-item">
                  <img src={uniglobeImg} alt="Uniglobe Secondary School" />
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
