// Click handler for same-page anchor links: scrolls smoothly to the target
// section without relying on browser hash-scrolling behavior.
export default function scrollToHash(e) {
  const hash = e.currentTarget.getAttribute('href')
  const el = document.querySelector(hash)
  if (!el) return
  e.preventDefault()
  // No explicit behavior: html's scroll-behavior: smooth animates it where
  // supported, and everything else jumps straight to the section.
  el.scrollIntoView()
  history.replaceState(null, '', hash)
}
