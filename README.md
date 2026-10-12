# My Portfolio

A personal portfolio built with React and Vite.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Deploying to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys
the site whenever changes are pushed to `main`. In the repository settings,
open **Settings → Pages** and set the build and deployment source to **GitHub
Actions**. After the workflow succeeds, the site is available at
`https://ruperman.github.io/portfolio/`.

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — build tool with HMR
- [ESLint](https://eslint.org/) — linting

## Notes

- The React Compiler is not enabled by default due to its impact on dev & build performance. To add it, see the [React Compiler docs](https://react.dev/learn/react-compiler/installation).
- For production apps, consider migrating to TypeScript. See the [Vite React TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
