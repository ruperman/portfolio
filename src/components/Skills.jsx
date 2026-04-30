import FadeInSection from "./FadeInSection";

export default function Skills({ skills }) {
  const categories = Object.entries(skills);

  return (
    <FadeInSection id="skills" className="section-alt">
      <div className="app-shell">
        <h2>Technical Skills</h2>
        <p className="section-intro">
          A practical stack built from enterprise delivery, system integration,
          and full lifecycle development.
        </p>

        <div className="skills-grid">
          {categories.map(([category, items]) => (
            <article className="surface-card skill-card" key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
