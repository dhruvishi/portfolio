import { about, projects, experience } from "@/data/content";

export default function Home() {
  return (
    <main>
      <h1>{about.name}</h1>
      <p>{about.tagline}</p>

      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <section>
        <h2>Projects</h2>
        {
          projects.map((project) => (
            <article key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.context}</p>
              {project.badge && <p>🏆 {project.badge}</p>}
              <p>{project.hook}</p>
              <p>(project.description)</p>
              {project.reflection && (
                <p>
                  <strong>{project.reflection.label}:</strong> {project.reflection.text}
                </p>
              )}

              <ul>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>

          ))
        }
      </section>

      <section>
        <h2>Experience</h2>
        {
          experience.map((experience) => (
            <article key={experience.company}>
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
              <p>{experience.dates}</p>
              <p>{experience.location}</p>
              <p>{experience.hook}</p>

              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

          ))
        }

      </section>
    </main>
  );
}