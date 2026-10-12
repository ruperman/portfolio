import FadeInSection from "./FadeInSection";

export default function Experience({ experiences }) {
  return (
    <FadeInSection id="experience" className="section-alt">
      <div className="app-shell">
        <h2>Work Experience</h2>
        <p className="section-intro">
          Experience developing and supporting business systems, improving
          application reliability, and helping fellow programming students.
        </p>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="surface-card experience-card"
            >
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
