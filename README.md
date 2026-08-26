# Rian Fritz D. Jalandoni — CV site

A single-page, static CV site built with plain HTML, CSS, and JS — no build step, no dependencies beyond two Google Fonts and IBM Plex Mono. Ready to publish on GitHub Pages.

## What's here

```
index.html              the whole page
assets/css/styles.css   design system + layout
assets/js/main.js       mobile nav, scroll-spy, ambient Voronoi-tessellation background
assets/img/favicon.svg  monogram favicon
assets/Jalandoni_CV.pdf downloadable CV (linked from the sidebar)
```

The background animation is a nod to the Voronoi-tessellation cell models in the
Education/Publications sections — it's decorative, respects
`prefers-reduced-motion`, and pauses automatically for people who've asked their
OS to reduce motion.

## Publish it on GitHub Pages

**Option A — personal site (`<username>.github.io`)**
1. Create a repo named exactly `<your-github-username>.github.io`.
2. Push the contents of this folder to the `main` branch (the files themselves,
   not this folder nested inside another one — `index.html` should sit at the
   repo root).
3. Visit `https://<your-github-username>.github.io` after a minute or two.

**Option B — project site (`<username>.github.io/cv`)**
1. Create any repo, e.g. `cv`.
2. Push these files to `main`.
3. In the repo's **Settings → Pages**, set the source to the `main` branch
   (root).
4. Visit `https://<your-github-username>.github.io/cv`.

```bash
cd this-folder
git init
git add .
git commit -m "Initial CV site"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<repo-name>.git
git push -u origin main
```

## Before you publish — a few things to personalize

- **GitHub link**: `index.html` still points to `https://github.com/yourusername`
  in two places (sidebar + contact section). Replace `yourusername` with your
  actual handle.
- **Phone number**: left off this public version by design — most academic
  sites skip it. Add it back into the sidebar contact block if you'd rather
  include it.
- **CV PDF**: `assets/Jalandoni_CV.pdf` was compiled here with fallback fonts
  (no `fontawesome5`/`lato`) for preview purposes. Swap in the PDF you compile
  from your LaTeX source on Overleaf (same filename, or update the link in
  `index.html`) so the icons and Lato typeface show correctly.
- **Custom domain (optional)**: if you have one, add a `CNAME` file at the repo
  root containing just the domain, and configure the DNS records per GitHub's
  docs.

## Editing content

Everything lives in `index.html` as plain markup — each section is clearly
commented (`RESEARCH`, `EDUCATION`, `EXPERIENCE`, etc.) and mirrors the
structure of the LaTeX CV, so updating one after you update the other is
straightforward.
