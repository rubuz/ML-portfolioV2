![Screenshot of page](https://i.postimg.cc/Sx9b0zTQ/Screenshot-2024-03-07-144017.png)

# Matjaž Lovenjak – Portfolio

Personal portfolio of a Senior Software Developer building enterprise web and mobile apps with Angular, React, React Native and TypeScript.

[lovenjak.vercel.app](https://lovenjak.vercel.app/)

## Features

1. **About cards** – role, UI/UX, background, CV download, socials and hobbies, with a sideways scroll on desktop
2. **Project showcase** – selected work with descriptions and tech stack; works with mouse, touch and keyboard
3. **Contact** – email and social links
4. **Dark mode** – follows the system setting, remembers your choice
5. **Motion** – intro curtain (click the ML logo to replay it), smooth scrolling, scroll-linked reveals, magnetic buttons and a labelled cursor
6. **Accessible motion** – with `prefers-reduced-motion` the page is fully static: no intro, no smooth scroll, no parallax

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4, [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling.

Motion is built in-house in `src/motion/`: one `requestAnimationFrame` loop drives every scroll and pointer effect (written straight to the DOM, so scrolling never re-renders React), and reveals are CSS transitions triggered by an IntersectionObserver. Timings and easings follow the motion handoff; the easing tokens live in `@theme` in `src/index.css`.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run lint     # lint TypeScript files
npm run build    # type-check and build to dist/
```

Analytics: Vercel Web Analytics and Speed Insights (cookieless, so no consent banner is needed).

TypeScript is held at 5.9: typescript-eslint does not support TypeScript 6+ yet.
