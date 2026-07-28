# HOLD LE 首页复刻 — Design QA

## Comparison target

- Source visual truth: `qa/source-desktop.png`, `qa/source-mobile.png` — captured from `https://www.holdle.com/`.
- Implementation: `qa/implementation-desktop.png`, `qa/implementation-mobile.png` — browser-rendered local prototype.
- Full-view normalized evidence: `qa/desktop-top-comparison.jpg` and `qa/mobile-top-comparison.jpg`; each places source on the left and implementation on the right.
- Desktop state: initial homepage, FAQ and letter collapsed. Source capture is 1512 × 4793 px and implementation capture is 1536 × 4952 px. The top-region comparison crops both to 1200 × 1300 px and scales each to 800 × 867 px before placing them side by side.
- Mobile state: initial homepage at a 390 × 844 CSS viewport. Source is 390 × 7958 px and implementation is 390 × 6176 px; the top-region comparison uses matching 390 × 1800 px crops at 1:1 density.

## Interaction and browser checks

- Mobile menu opens and exposes navigation.
- FAQ expands and renders the captured answer content.
- “给大苏写信” opens the contact modal.
- Header/footer anchors scroll to their corresponding sections.
- Search accepts input and provides an explicit demo response on Enter.
- Browser console: no error-level entries after the final mobile reload.

## Findings

No actionable P0/P1/P2 mismatches remain.

- Fonts and typography: matches the system Chinese font stack, black/gray hierarchy, small all-caps eyebrow labels, and responsive hero wrapping. The mobile hero heading was adjusted in the second comparison pass to match the source's two-line wrap.
- Spacing and layout rhythm: the 1152 px desktop content frame, large vertical section spacing, 3-column/2-column card grids, single-column mobile flow, thin borders, and compact radii match the source structure.
- Colors and visual tokens: warm off-white page background, near-black headings, muted gray secondary text, blue content links/CTA, and muted red gains match the source palette.
- Image quality and asset fidelity: the source hero illustration, founder image, and mobile menu asset are copied locally; no source image is hotlinked. The final pass corrected the local menu SVG dimensions so it renders instead of appearing as a broken image.
- Copy and content: homepage copy, table rows, author card, FAQ labels, and footer information follow the captured source content.

## Comparison history

1. Initial desktop/mobile comparison found two P2 visual drifts on mobile: the hero title stayed on one line and the menu icon had zero intrinsic height.
2. Fixes applied: constrained and slightly enlarged the mobile hero title; gave the copied menu SVG explicit namespace and dimensions.
3. Post-fix evidence: `qa/implementation-mobile.png` and `qa/mobile-top-comparison.jpg`. The hero wraps across two lines and the menu asset resolves at 18 × 18 px.

## Follow-up polish

- P3: Exact vertical page length differs slightly because the local FAQ answers and contact-modal copy are implementation content rather than an untouched server-rendered template.

## Final result

passed
