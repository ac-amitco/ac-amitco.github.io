function FolderIcon() {
  return (
    <svg
      className="project-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.comingSoon ? ' coming-soon' : ''}`}>
      <div className="project-card-top">
        <FolderIcon />
        {project.comingSoon && <span className="coming-soon-badge">Coming soon</span>}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="tech-list">
        {project.tech.map((tech) => (
          <li className="tech-tag" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      {!project.comingSoon && (
        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}
