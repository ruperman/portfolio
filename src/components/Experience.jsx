import FadeInSection from "./FadeInSection";

export default function Experience({ experiences }) {
  return (
    <FadeInSection id="experience" className="section-alt">
      <div className="app-shell">
        <h2>Professional Experience</h2>
        <p className="section-intro">
          Roles focused on delivering business value through robust systems and
          thoughtful engineering decisions.
        </p>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article key={item.company} className="surface-card experience-card">
              <div className="experience-head">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <p className="experience-period">{item.period}</p>
              <ul className="achievement-list">
                {item.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
