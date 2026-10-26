# Portfolio design direction

## Purpose
Russian portfolio for HR and design leads. The home page should make identity, role, seniority and three relevant projects clear in a quick scan. Detailed evidence lives on separate project pages.

## Reference sources
Reviewed the twelve Refero style references supplied by Roman. Main direction:
- [Intercom](https://styles.refero.design/style/12255b63-e506-4bc1-a4cd-d05487de32f3): restrained typography and flat surfaces; the warm canvas was replaced with pure white at Roman's request.
- [Vercel](https://styles.refero.design/style/f24daf3a-d43f-4dec-85a9-8ac1d5148a03): clear hierarchy, hairline rules, compact navigation.
- [ElevenLabs](https://styles.refero.design/style/031056ff-7af1-46db-8daa-115f731c5d26): color in project imagery, quiet page chrome.

The reference systems informed local CSS tokens; this is an independent portfolio, not an exact reproduction of those websites. No proprietary typefaces or brand marks are used.

## Tokens
- Canvas #ffffff; ink #1c1c1c; secondary text #626262; border #e2e2e2; surface #f3f3f3.
- Monochrome focus and hover #404040, with underlines for text links. Color belongs to project artwork only.
- Manrope, local Latin/Cyrillic font files, OFL license included.
- Content max-width 1240px. Grid: 3 product columns, 4 compact UI previews; 2 columns in the full gallery.
- 8px media corners; 5px controls. No ornamental shadows or gradients.
- Home display 28–56px; body 16–20px. Relaxed tracking and separate product/team paragraphs support scanning.

## Content and interaction
- Home: role and scope of work first, named products, team leadership, two facts, portrait, selected projects and contacts. Pilot results stay inside the Dobro project, not the hero.
- One Projects catalogue contains all 16 works with Products / Sites / Games filters. The former UI URL redirects to it and preserves project anchors.
- About: introduction, leadership achievements, experience, project awards, education and a direct certificate link. Project awards are attributed to Pragmacore, not presented as personal prizes.
- No decorative northeast arrows on links or image overlays. No repeated name, year or location in the footer.
- Introduction references: https://www.toloknova.com/ and https://jupels.github.io/portfolio/index.html — role, relevant experience and proof visible immediately; wording uses Roman's own verified experience.
- Cases: final screens first; responsibility, design decisions, expandable research.
- Images: native dialog, zoom, previous/next, Escape, original-image link.
- HTML links and research details work without JavaScript.
- Keep claims specific. Separate survey preferences from production conversion and pilot before/after from causal attribution.
- Preserve readable body copy on mobile; avoid extra slogans, decorative labels and repeated disclaimers.

## Mobile
- One responsive block for screens up to 760px, with 16–20px page gutters and a consistent 24/32/48px spacing rhythm.
- Compact portrait beside the role; text and results remain the main focus. The about page uses the same introduction hierarchy.
- Stacked before/after comparison. Full case artwork keeps its natural height; no hidden lower half of a presentation.
- App screenshots use native horizontal scrolling with snap points, a visible next-screen preview and keyboard access. My Safe uses a dedicated mobile cover.
- In-flow navigation, balanced filter grid and at least 44px targets for menu, filter, viewer and contact controls.
- Fullscreen image viewer with safe-area spacing; original images and research disclosures remain accessible without JavaScript.
