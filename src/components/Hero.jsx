import { site } from '../data/content.js'
import AsciiPortrait from './AsciiPortrait.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">Hi, my name is</p>
          <h1>{site.name}.</h1>
          <h2>
            {site.role}
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </h2>
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              See my projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <AsciiPortrait />
      </div>
    </section>
  )
}
