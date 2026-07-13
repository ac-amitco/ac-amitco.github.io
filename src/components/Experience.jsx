import { experience } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

export default function Experience() {
  const ref = useReveal()

  return (
    <section className="section" id="experience">
      <div className="container reveal" ref={ref}>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <p className="timeline-period">{item.period}</p>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-desc">{item.description}</p>
              {item.tech.length > 0 && (
                <ul className="tech-list">
                  {item.tech.map((tech) => (
                    <li className="tech-tag" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
