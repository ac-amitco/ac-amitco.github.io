import { projects } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Projects() {
  const ref = useReveal()

  return (
    <section className="section" id="projects">
      <div className="container reveal" ref={ref}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
