# React UI

![GitHub last commit](https://img.shields.io/github/last-commit/gasbrieo/react-ui)
![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/gasbrieo_react-ui?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Coverage](https://img.shields.io/sonar/coverage/gasbrieo_react-ui?server=https%3A%2F%2Fsonarcloud.io)
[![Storybook](https://img.shields.io/badge/Storybook-live-blue?logo=storybook)](https://react-ui-gasbrieo.netlify.app)

A modern and customizable React component library built with **Tailwind CSS v4+**, **Radix UI**, and **shadcn/ui**.  
Designed for **accessibility**, **developer experience**, and **runtime theming** (light/dark).

---

## ✨ Features

- ✅ **Accessible components** powered by Radix UI
- ✅ **Utility-first styling** with Tailwind CSS v4+
- ✅ **Runtime theming** with CSS variables (`light`/`dark` mode)
- ✅ **Tree-shakable ESM build**
- ✅ **Fully typed** with TypeScript
- ✅ **Live docs** with Storybook

---

## 🧱 Tech Stack

| Layer       | Stack                             |
| ----------- | --------------------------------- |
| Components  | React + Radix UI                  |
| Styling     | Tailwind CSS + shadcn/ui          |
| Tooling     | Vite + TypeScript                 |
| Docs        | Storybook                         |
| Testing     | Vitest + Testing Library          |
| Lint/Format | ESLint + Prettier                 |
| CI/CD       | GitHub Actions + semantic-release |

---

## 📦 Installation

```bash
npm install @gasbrieo/react-ui
```

> **Requires Tailwind CSS v4+ with `@theme inline`.**

---

## 🚀 Usage

Import the component and the design tokens:

```tsx
import { Button } from "@gasbrieo/react-ui";
import "@gasbrieo/react-ui/styles/tokens.css";

export const Example() {
  return <Button>Click me</Button>;
}
```

✅ `tokens.css` enables **light/dark theme** via CSS variables  
✅ To toggle dark mode dynamically:

```ts
document.documentElement.classList.add("dark"); // or remove("dark")
```

---

## 🧪 Local Development

```bash
npm install
npm run dev
```

To build and preview Storybook locally:

```bash
npm run storybook:build
npx serve storybook-static
```

---

## 🔄 Releases & Versioning

This project uses **[semantic-release](https://semantic-release.gitbook.io/semantic-release/)** for fully automated versioning:

- **feat:** → minor version bump (0.x.0 → 0.(x+1).0)
- **fix:** → patch version bump (0.0.x → 0.0.(x+1))
- **feat!: / BREAKING CHANGE:** → major version bump (x.0.0 → (x+1).0.0)

Every merge into `main` automatically:

- Updates `CHANGELOG.md`
- Creates a GitHub release
- Publishes a new version to npm

See all changes in the [CHANGELOG.md](./CHANGELOG.md).

---

## 🧱 Project Structure

```
src/
├── components/    # Component source files
├── utils/         # Utility functions, helpers
├── styles/        # Tokens (light/dark theme)
└── index.ts       # Library entrypoint
```

---

## 📘 Docs

Explore all components on [**Storybook Live**](https://react-ui-gasbrieo.netlify.app)

---

## 🪪 License

This project is licensed under the MIT License – see [LICENSE](LICENSE) for details.
