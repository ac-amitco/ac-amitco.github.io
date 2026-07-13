import { site } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-kicker">Hi, my name is</p>
        <h1>{site.name}.</h1>
        <h2>{site.role}</h2>
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
    </section>
  )
}
