import FadeInSection from "./FadeInSection";

export default function About({ highlights }) {
  return (
    <FadeInSection id="about">
      <div className="app-shell">
        <h2>About Me</h2>
        <p className="section-intro">
          I specialize in enterprise-grade business systems where reliability,
          performance, and long-term maintainability matter.
        </p>

        <div className="about-grid">
          {highlights.map((item) => (
            <article key={item} className="surface-card about-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
