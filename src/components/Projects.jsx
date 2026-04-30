import { useMemo, useState } from "react";
import FadeInSection from "./FadeInSection";

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const tags = new Set(["All"]);

    projects.forEach((project) => {
      project.techStack.forEach((tech) => tags.add(tech));
    });

    return Array.from(tags);
  }, [projects]);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(activeFilter));

  return (
    <FadeInSection id="projects">
      <div className="app-shell">
        <h2>Selected Projects</h2>
        <p className="section-intro">
          Solutions designed for real business outcomes, scalable architecture,
          and measurable impact.
        </p>

        <div className="filter-row" role="toolbar" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? "active" : ""}`}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="surface-card project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <p className="project-label">Tech Stack</p>
              <div className="chip-row">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="project-label">Key Achievements</p>
              <ul className="achievement-list">
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.demo ? (
                  <a className="btn btn-secondary" href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
