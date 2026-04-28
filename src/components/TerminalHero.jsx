import { useState, useEffect } from "react";

const LINES = [
  { text: "whoami",                  type: "cmd" },
  { text: "  Amy Sauden",            type: "out" },
  { text: "",                        type: "gap" },
  { text: "cat role.txt",            type: "cmd" },
  { text: "  Role        →  ML / Software Engineer Intern", type: "out" },
  { text: "  Focus       →  Machine Learning · Cybersecurity · Data", type: "out" },
  { text: "  University  →  UC Cincinnati, May 2029",       type: "out" },
  { text: "",                        type: "gap" },
  { text: "./stats --all",           type: "cmd" },
  { text: "  Employees impacted   500+",  type: "stat" },
  { text: "  Operational scale    $1B+",  type: "stat" },
  { text: "  Tools shipped        2",     type: "stat" },
  { text: "  ML accuracy          99%",   type: "stat" },
  { text: "  Neural net epochs    10,000",type: "stat" },
  { text: "  NASA participants    66+",   type: "stat" },
  { text: "  Dashboards built     15+",   type: "stat" },
  { text: "  Records automated    10,000+",type:"stat" },
  { text: "",                        type: "gap" },
  { text: "status",                  type: "cmd" },
  { text: "  Currently building...", type: "out" },
];

export default function TerminalHero() {
  const [shown, setShown] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (shown >= LINES.length) return;
    const delay = LINES[shown].type === "cmd" ? 420 : 80;
    const t = setTimeout(() => setShown((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [shown]);

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="terminal-window">
      {/* macOS title bar */}
      <div className="terminal-bar">
        <span className="terminal-dot terminal-dot--red" />
        <span className="terminal-dot terminal-dot--yellow" />
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-title">amy@portfolio ~ zsh</span>
      </div>

      {/* Terminal body */}
      <div className="terminal-body">
        {LINES.slice(0, shown).map((line, i) => (
          <div key={i} className={`terminal-line terminal-line--${line.type}`}>
            {line.type === "cmd" && <span className="terminal-prompt">❯ </span>}
            {line.text}
          </div>
        ))}

        {/* Active blinking cursor line */}
        {shown < LINES.length && (
          <div className="terminal-line terminal-line--cmd">
            <span className="terminal-prompt">❯ </span>
            <span className={`terminal-cursor ${cursor ? "terminal-cursor--on" : ""}`}>▋</span>
          </div>
        )}

        {shown >= LINES.length && (
          <div className="terminal-line terminal-line--cmd">
            <span className="terminal-prompt">❯ </span>
            <span className={`terminal-cursor ${cursor ? "terminal-cursor--on" : ""}`}>▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
