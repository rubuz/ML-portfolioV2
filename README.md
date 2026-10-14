![Screenshot of page](https://i.postimg.cc/Sx9b0zTQ/Screenshot-2024-03-07-144017.png)

# Matjaž Lovenjak – Portfolio

Personal portfolio of a Senior Software Developer building enterprise web and mobile apps with Angular, React, React Native and TypeScript.

[lovenjak.vercel.app](https://lovenjak.vercel.app/)

## Features

1. **About cards** – role, UI/UX, background, CV download, socials and hobbies, with a sideways scroll on desktop
2. **Project showcase** – selected work with descriptions, tech stack and live links; works with mouse, touch and keyboard
3. **Contact** – email and social links
4. **Dark mode** – follows the system setting, remembers your choice
5. **Accessible motion** – respects `prefers-reduced-motion`

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4, react-awesome-reveal

## Development

```bash
npm install
npm run dev      # start the dev server
npm run lint     # lint TypeScript files
npm run build    # type-check and build to dist/
```

Optional: set `VITE_GA_ID` in a `.env` file to enable Google Analytics. Without it, analytics is skipped.

TypeScript is held at 5.9: typescript-eslint does not support TypeScript 6+ yet.
