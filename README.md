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
## Basic Setup

### Fonts

Setting multiple next fonts with tailwind

`_app.tsx`

```ts
import { Raleway, Montserrat, Dancing_Script } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
```

Add Variables in Component

`_app.tsx`

```ts
<>
    <style jsx global>
    {`
        :root {
        --font-raleway: ${raleway.style.fontFamily};
        --font-montserrat: ${montserrat.style.fontFamily};
        --font-dancing-script: ${dancingScript.style.fontFamily};
        }
    `}
    </style>
    <Component {...pageProps} />
</>
```

Add font variable in tailwind

`tailwind.config.js`

```ts
theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        montserrat: ["var(--font-montserrat)"],
        dancingScript: ["var(--font-dancing-script)"],
      },
    },
  }
```

setting default font - You can override sans and serif variables

`tailwind.config.js`

```ts
theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
    },
  }
```

## Run Dev

`terminal`

```bash
pnpm next dev
```
