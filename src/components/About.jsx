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
          <div>
            <p className="skills-title">Skills</p>
            <ul className="skills">
              {about.skills.map((skill) => (
                <li className="skill-chip" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
