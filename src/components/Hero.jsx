import "../styles/Hero.css";

export default function Hero({ personalInfo }) {
  return (
    <section id="home" className="hero">
      <div className="app-shell hero-content reveal in-view">
        <p className="hero-kicker">Software Developer Portfolio</p>
        <h1>{personalInfo.name}</h1>
        <p className="hero-title">{personalInfo.title}</p>
        <p className="hero-summary">{personalInfo.summary}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            View Experience
          </a>
          <a className="btn btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
