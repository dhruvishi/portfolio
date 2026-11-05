import { about, projects } from "@/data/content";

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
              <p>{project.description}</p>

              <ul>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>

          ))
        }
      </section>
    </main>
  );
}