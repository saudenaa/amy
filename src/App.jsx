import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Cursor from "./components/Cursor.jsx";
import Hero from "./components/Hero.jsx";
import { projects } from "./projects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import emailjs from "@emailjs/browser";
import Footer from "./components/Footer.jsx";



export default function App() {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("home");

  const refs = useMemo(
    () => ({
      home: React.createRef(),
      projects: React.createRef(),
      about: React.createRef(),
      contact: React.createRef(),
    }),
    []
  );

  /* THEME TOGGLE */
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  /* FIXED INTERSECTION OBSERVER */
  useEffect(() => {
    const sections = Object.values(refs).map((r) => r.current);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCurrent(e.target.id);
            e.target.classList.add("in"); // reveal
          }
        });
      },
      { threshold: 0.1 } // FIX → was 0.6 causing sections to remain invisible
    );

    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, [refs]);

  const jump = (id) =>
    refs[id]?.current?.scrollIntoView({ behavior: "smooth" });

  /* EMAIL JS */
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSent("");
    setSending(true);

    try {
      const SERVICE_ID = "your_service_id";
      const TEMPLATE_ID = "your_template_id";
      const PUBLIC_KEY = "your_public_key";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setSent("Thanks! Your message was sent.");
      formRef.current.reset();
    } catch (err) {
      setSent("Something went wrong. Please email me directly.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} current={current} onJump={jump} />

      <main className="snap-root">
        
        {/* HERO */}
        <section id="home" ref={refs.home} className="screen section-hero reveal">
          <Hero onJump={jump} />
        </section>

        {/* PROJECTS */}
        <section id="projects" ref={refs.projects} className="screen reveal projects-section">
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

        {/* ABOUT */}
        <section id="about" ref={refs.about} className="screen reveal">
          <About />
        </section>

        {/* CONTACT */}
        <section id="contact" ref={refs.contact} className="screen reveal">
          <Contact
            formRef={formRef}
            sendEmail={sendEmail}
            sending={sending}
            sent={sent}
          />
        </section>

        <Footer/>
      </main>
      
      <Cursor />
    </>
  );
}
