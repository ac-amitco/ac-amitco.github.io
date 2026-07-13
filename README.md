# ac-amitco.github.io

Amit Bar Cohen — personal portfolio website, live at [https://ac-amitco.github.io](https://ac-amitco.github.io).

Built with React + Vite, deployed automatically to GitHub Pages on every push to `main`.

## Local development

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing content

All text on the site — name, bio, skills, experience, projects, social links —
lives in a single file: [`src/data/content.js`](src/data/content.js).
Edit it and push; the site redeploys automatically.

To publish a project when it's ready: in `content.js`, set its `comingSoon: false`
and fill in `link` (live URL) and `repo` (GitHub URL).
