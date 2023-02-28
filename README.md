# Init Project

This is the base set up project with React,Next,Prisma,tRPC, TanStack Query etc

## Installations

### NextJS

`terminal`

```bash
pnpm pnpm create next-app --use-pnpm --eslint --typescript --import-alias "@/*" project-name
```

Note: Go with defaults after this

### Tailwind

`terminal`

```bash
pnpm install -D tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

`tailwind.config.js`

``` javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Run Dev

`terminal`

```bash
pnpm next dev
```
