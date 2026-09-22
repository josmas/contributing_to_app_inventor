# Contributing to App Inventor 2

A plain HTML/CSS/JS slideshow (no framework, no build step) walking through
how to fork, build, and run App Inventor 2 locally. Meant to be hosted
directly on GitHub Pages.

Live at: (fill in once Pages is enabled)

## Editing

Everything lives in three files:

- `index.html` — the slides. Each `<section class="slide" data-slide="N">`
  is one slide, in order.
- `css/style.css` — layout and theme (auto light/dark).
- `js/slides.js` — navigation (arrow keys, prev/next buttons, `#N` deep
  links). You shouldn't need to touch this when just editing content.

### Adding a slide

1. Copy an existing `<section class="slide" data-slide="N">...</section>`
   block in `index.html` to where you want the new slide.
2. Renumber `data-slide` on it and every slide after it so the sequence
   stays consecutive (the JS doesn't strictly require this, but the
   `#N` deep links only make sense if slide order matches the numbers).
3. Edit the heading/body/code as needed.

### Adding an image

Drop the file in `images/` and reference it as `images/your-file.png`
from within a slide's `<p>`.

## Previewing locally

No build step — just open `index.html` in a browser, or serve it:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Hosting

Plain static files served from the repo root via GitHub Pages
(Settings → Pages → Deploy from branch → `main` / `/ (root)`).
