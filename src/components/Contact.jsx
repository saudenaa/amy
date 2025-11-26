import React from "react";

export default function Contact({ formRef, sendEmail, sending, sent }) {
  return (
    <section id="contact" className="contact-section reveal">

      <header className="section-head centered">
        <h2 className="title-xxl glass-title">Contact</h2>
        <p className="sub contact-sub">You came this far — let’s connect.</p>
      </header>

      <div className="contact-wrapper">

        {/* LEFT ICONS */}
        <div className="contact-left">
          <a href="mailto:saudenaa@mail.uc.edu" className="contact-link">
            <i className="fa-solid fa-envelope"></i>
            <span>saudenaa@mail.uc.edu</span>
          </a>

          <a href="https://www.linkedin.com/in/amishasauden/" target="_blank" className="contact-link">
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/saudenaa" target="_blank" className="contact-link">
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>

          <a className="contact-link">
            <i className="fa-solid fa-phone"></i>
            <span>(513) 307-2996</span>
          </a>
        </div>

        {/* GLASS FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form glass-card">
          <div className="form-row">
            <input name="from_name" placeholder="Your name" required />
            <input name="reply_to" type="email" placeholder="Email" required />
          </div>

          <input name="subject" placeholder="Subject" />
          <textarea name="message" rows="6" placeholder="Your message…" required />

          <button className="btn-primary glass-btn" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>

          {sent && <p className="sent-note">{sent}</p>}
        </form>

      </div>
    </section>
  );
}
