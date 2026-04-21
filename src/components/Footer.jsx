import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/amysauden/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <FaLinkedinIn size={14} /> LinkedIn
            </a>
            <a
              href="https://github.com/saudenaa"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <FaGithub size={14} /> GitHub
            </a>
          </div>

          <p className="footer-copy">
            Designed &amp; built by Amy Sauden &nbsp;&middot;&nbsp; UC Cincinnati &nbsp;&middot;&nbsp; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
