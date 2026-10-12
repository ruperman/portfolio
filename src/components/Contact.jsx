import FadeInSection from "./FadeInSection";

export default function Contact({ personalInfo }) {
  return (
    <FadeInSection id="contact" className="contact-section">
      <div className="app-shell">
        <h2>Contact</h2>
        <p className="section-intro">
          Interested in collaboration, software opportunities, or technical
          discussions? Let us connect.
        </p>

        <div className="contact-grid">
          <a className="surface-card contact-card" href={`mailto:${personalInfo.email}`}>
            <span>Email</span>
            <strong>{personalInfo.email}</strong>
          </a>

          <a
            className="surface-card contact-card"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>{personalInfo.linkedin.replace("https://", "")}</strong>
          </a>
        </div>
      </div>
    </FadeInSection>
  );
}
