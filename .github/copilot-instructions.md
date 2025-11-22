<!-- Brief, actionable instructions for AI coding agents working on this repo -->
# copilot-instructions for voltCore (static portfolio)

Purpose
- Keep changes minimal, focused, and safe: this repository is a static personal portfolio (HTML/CSS/JS) published via GitHub Pages (see `CNAME`).

Big picture
- Single-page static site. `index.html` is the canonical source-of-truth for content and structure.
- Styling lives in `styles.css` (CSS variables at `:root` control theme and colors).
- Small runtime behaviour is in `script.js` (canvas animation + resize/visibility handlers).
- There is no build step: editing files and pushing to `main` updates the GitHub Pages site.

Key files to reference
- `index.html` — main markup and accessible entry points (e.g. `.secret-trigger` links to `secret-resume.html`).
- `styles.css` — theme tokens, layout, and BEM-style class naming (e.g. `hero__top`, `panel__title`).
- `script.js` — animation loop using `requestAnimationFrame`, `visibilitychange` listener, and resize handling.
- `CNAME` — custom domain for GitHub Pages. Don't remove or change without confirmation.

Project-specific conventions and patterns
- Class naming: component__element (BEM-like). Keep modifier names short (e.g. `btn.primary`, `btn.ghost`).
- Theme: colors and common values are defined as CSS variables in `:root`. Prefer updating variables over changing many selectors.
- Minimal JS: keep global footprint small (current code uses a few module-level const/let bindings). If adding modules, keep them lightweight — there is no bundler configured.
- Accessibility: uses `.sr-only` utility and `aria-label` on interactive anchors. Preserve or extend similar patterns when adding UI.

Examples & patterns to follow
- Canvas animation: `index.html` contains `<canvas id="matrix"></canvas>` and `script.js` reads it by `document.getElementById('matrix')`. The animation loop is started with `requestAnimationFrame` and paused on `document.hidden`.
- Responsive resize: `script.js` recalculates `canvas.width/height` and `columns` in `onResize()` and reinitialises `drops[]` — mirror this pattern if you add other viewport-sensitive logic.
- Styling changes: to change the primary glow, edit `--accent` / `--accent-2` in `styles.css` rather than finding many rules.

How to run, debug, and test locally
- No build tooling required — open `index.html` in a browser.
- For a local server (recommended to avoid CORS issues with some browsers):
  - `python -m http.server 8000` (from repo root) or
  - `npx serve` (if `serve` is available).
- Dev tips: use the browser inspector to inspect CSS variables in `:root`, and pause the JS by setting breakpoints inside `script.js` functions `draw()` / `animate()` / `onResize()`.

Editing & PR guidance for AI agents
- Small, focused PRs: change one area at a time (styling vs content vs behaviour).
- When modifying layout, update `index.html` and `styles.css` together in the same commit.
- Preserve contact info and external links unless the user instructs otherwise.
- If adding dependencies or a build system (e.g., React/Next), state trade-offs in the PR description and include a migration plan — do not add a build pipeline silently.

Integration points & external dependencies
- Google Fonts are loaded from `fonts.googleapis.com` in `index.html` — preserve the `<link>` tag unless you intentionally self-host fonts.
- External links to projects and GitHub in the portfolio are references only; they are not programmatically integrated.

When unsure, follow these rules
- Avoid adding a bundler or package.json without the owner's consent.
- Ask before changing `CNAME` or other deployment-related files.
- Keep global scope changes minimal; this repo intentionally favors simple, static files.

If you update this file
- Keep content concise and specific to patterns discoverable in the repository.
- If you detect a different workflow (tests, CI, or build) add a short "How to run" snippet and examples.

Questions for the owner
- Do you want a CI-based deploy (GitHub Actions) or keep the current simple GitHub Pages workflow?
- Is `secret-resume.html` sensitive — should we avoid editing/printing its contents in PRs?

---
Please review and tell me which areas you want expanded (CI, testing, or migration notes).
