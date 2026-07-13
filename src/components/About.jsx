import { about } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section className="section" id="about">
      <div className="container reveal" ref={ref}>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <p className="about-bio">{about.bio}</p>
          <div className="skill-groups">
            {about.skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <p className="skills-title">{group.title}</p>
                <ul className="skills">
                  {group.items.map((skill) => (
                    <li className="skill-chip" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
