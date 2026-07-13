import { useEffect, useRef } from 'react'
import photo from '../assets/me.jpeg'

// Brightness ramp, darkest → brightest
const RAMP = ' .,:-=+*#%@'
const COLS = 96
// Monospace cells are taller than wide (~0.6em wide vs 0.9em line-height),
// so squash rows to keep the portrait's proportions on screen.
const CELL_ASPECT = 0.6 / 0.9

export default function AsciiPortrait() {
  const preRef = useRef(null)

  useEffect(() => {
    const img = new Image()
    img.src = photo
    img.onload = () => {
      const rows = Math.round(COLS * (img.height / img.width) * CELL_ASPECT)
      const canvas = document.createElement('canvas')
      canvas.width = COLS
      canvas.height = rows
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, COLS, rows)
      const { data } = ctx.getImageData(0, 0, COLS, rows)

      let out = ''
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < COLS; x++) {
          const i = (y * COLS + x) * 4
          const [r, g, b] = [data[i], data[i + 1], data[i + 2]]
          // Green-hued pixels with real saturation are the foliage backdrop —
          // flatten them into a sparse dot grid so the subject stands out.
          // (Skin/hair are red-dominant, the shirt is near-gray, so they stay.)
          const mx = Math.max(r, g, b)
          const sat = (mx - Math.min(r, g, b)) / (mx || 1)
          if (g === mx && sat > 0.12) {
            out += x % 2 === 0 && y % 2 === 0 ? '.' : ' '
            continue
          }
          let lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
          lum = Math.min(1, Math.max(0, (lum - 0.18) / 0.72))
          out += RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))]
        }
        out += '\n'
      }
      if (preRef.current) preRef.current.textContent = out
    }
  }, [])

  return (
    <div className="ascii-portrait" title="Hover to reveal">
      <pre ref={preRef} aria-hidden="true" />
      <img src={photo} alt="Amit Bar Cohen" className="ascii-photo" />
    </div>
  )
}
