import { useState, useEffect } from "react";
import Navbar         from "./components/Navbar.jsx";
import Hero           from "./components/Hero.jsx";
import VideoSection   from "./components/VideoSection.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Projects       from "./components/Projects.jsx";
import Volunteer      from "./components/Volunteer.jsx";
import Certifications from "./components/Certifications.jsx";
import Resume         from "./components/Resume.jsx";
import Skills         from "./components/Skills.jsx";
import Contact        from "./components/Contact.jsx";
import Footer         from "./components/Footer.jsx";

// Section IDs for active-nav tracking
const SECTION_IDS = ["hero", "work", "projects", "volunteer", "certifications", "resume", "skills", "contact"];

export default function App() {
  const [theme,   setTheme]   = useState("dark");
  const [current, setCurrent] = useState("hero");

  /* ── Theme ───────────────────────────────────────────── */
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  /* ── Active section (IntersectionObserver) ───────────── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* ── Scroll reveal ───────────────────────────────────── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} current={current} />

      <main>
        <Hero />
        <VideoSection />
        <WorkExperience />
        <Projects />
        <Volunteer />
        <Certifications />
        <Resume />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
