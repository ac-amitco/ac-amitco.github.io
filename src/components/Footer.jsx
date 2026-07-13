import { site } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        Built by {site.name} · {new Date().getFullYear()}
      </div>
    </footer>
  )
}
