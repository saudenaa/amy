import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { supabase } from "../lib/supabase.js";

const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm]     = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");

    try {
      // 1 — Store in Supabase
      if (supabase) {
        const { error } = await supabase.from("contacts").insert([
          { ...form, created_at: new Date().toISOString() },
        ]);
        if (error) console.error("Supabase error:", error);
      }

      // 2 — Send email via EmailJS
      if (EJS_SERVICE && EJS_TEMPLATE && EJS_KEY) {
        await emailjs.send(
          EJS_SERVICE,
          EJS_TEMPLATE,
          {
            from_name:  form.name,
            from_email: form.email,
            subject:    form.subject,
            message:    form.message,
          },
          { publicKey: EJS_KEY }
        );
      }

      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrMsg("Something went wrong. Please email me directly at saudenaa@mail.uc.edu");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">

          {/* ── Left ───────────────────────────────── */}
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="contact-left-heading">
              Let&rsquo;s build<br />the future.
            </h2>
            <blockquote className="contact-manifesto">
              "A system is only as good as the person's ability to use it. I build for the person
              at the other end of the screen. I believe in Invisible Technology — systems so
              efficient they stay out of the way, allowing leaders to lead."
            </blockquote>
            <p className="contact-left-body">
              I am looking for high-stakes opportunities in AI, Systems Architecture,
              and Strategic Data. Let&rsquo;s build the future of how people actually work.
            </p>
            <a href="mailto:saudenaa@mail.uc.edu" className="contact-email-link">
              saudenaa@mail.uc.edu
            </a>
          </div>

          {/* ── Right: form ─────────────────────────── */}
          <div className="reveal reveal-delay-1">
            {status === "success" ? (
              <div className="form-success">
                <FiCheckCircle size={20} />
                Sent. I&rsquo;ll get back to you soon.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      className="form-input"
                      placeholder="What should I call you?"
                      value={form.name}
                      onChange={update}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="So I can write back"
                      value={form.email}
                      onChange={update}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="cf-subject">Subject</label>
                  <input
                    id="cf-subject"
                    name="subject"
                    className="form-input"
                    placeholder="Internship, collab, just saying hi..."
                    value={form.subject}
                    onChange={update}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me what's on your mind"
                    value={form.message}
                    onChange={update}
                    required
                  />
                </div>

                {status === "error" && (
                  <div className="form-error">{errMsg}</div>
                )}

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send it \u2192"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
