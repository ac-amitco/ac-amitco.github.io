import { useState } from 'react'
import scrollToHash from '../utils/scroll.js'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (e) => {
    setOpen(false)
    scrollToHash(e)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a className="navbar-logo" href="#top" onClick={handleLinkClick}>
          &lt;AC /&gt;
        </a>
        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
