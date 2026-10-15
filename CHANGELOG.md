# Changelog

## 2.0.0 – 2026-10-15

A full refresh: new content for the Senior Software Developer role, a motion pass, and a modernized stack.

### Content

- Hero, About and meta text updated for the senior role; new portrait
- Projects: After-Sales Portal and Supplier Portal (Angular) added with anonymized screenshots; InventuraOS and Production Dashboard updated with results; cEnergija and Moto Lander removed
- New "Off the clock" card; contact heading "Say hello — let's talk."; updated CV
- Link-preview (Open Graph) tags and image

### Motion

- Intro curtain with replay from the ML logo, smooth scrolling (Lenis), anchor links glide with the nav offset
- Live JetBrains Mono wordmark with letter-by-letter reveal and scroll parallax (replaces the cycling title images)
- Pinned About section with horizontal scrub; sticky project frame with clip-path screen wipes and color crossfade
- Magnetic buttons, rolling labels, labelled trailing cursor, scroll-reactive marquee
- Ambient blurred-blob background; frosted nav that only appears once scrolled
- Everything respects `prefers-reduced-motion`

### Accessibility and quality

- Works with keyboard, touch and mouse: visible focus everywhere, details open on focus, 44px touch targets
- Fixed: blank page in local dev without a GA ID, layout jumps when selecting projects, mobile nav shifting the page on scroll, and more
- Google Analytics removed (cookieless Vercel Analytics remains)

### Stack

- React 19, Vite 8, Tailwind CSS 4, ESLint 10 (flat config)
- Removed: Framer Motion, react-awesome-reveal, react-fast-marquee, react-responsive, Headless UI, react-ga4
- JS bundle: 121 KB → 90 KB gzipped; `npm audit`: 0 vulnerabilities

## 1.2.0 and earlier

The original portfolio: React 18, Tailwind 3, Framer Motion.
