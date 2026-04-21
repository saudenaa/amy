import { FiAward } from "react-icons/fi";

const CERTS = [
  "AWS Cloud Practitioner",
  "CompTIA Network+",
  "Cisco Cyber Threat Management",
  "Google Cloud Generative AI Essentials",
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="cert-bar reveal">
          <span className="cert-label">Certifications</span>
          <div className="cert-divider" />
          <div className="cert-tags">
            {CERTS.map((c) => (
              <span key={c} className="cert-tag">
                <FiAward />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
