# Contributing to React UI

Thanks for considering contributing! 🎉  
This project follows **Conventional Commits** and uses **semantic-release** for fully automated versioning.

---

## 🛠 How to contribute

1. **Fork & clone** the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Storybook for development:
   ```bash
   npm run storybook
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feat/new-component
   ```
5. Make your changes and commit using **Conventional Commits** (see below)
6. Push your branch and open a Pull Request 🎉

---

## 📝 Conventional Commits

We use **Conventional Commits** so semantic-release can automatically bump versions.

### ✅ Examples

- **feat:** adds a new feature → _minor version bump_

  ```
  feat: add new Badge component
  ```

- **fix:** bug fix → _patch version bump_

  ```
  fix: correct Button hover spacing
  ```

- **feat!:** or add `BREAKING CHANGE:` in the body → _major version bump_

  ```
  feat!: remove deprecated Avatar component

  BREAKING CHANGE: Avatar was removed in favor of UserCard
  ```

### ❌ Avoid

- Messages like `update stuff` or `fix bug`
- Commits without context

---

## 🔄 What happens after merge?

When you merge into **main**:

- semantic-release will analyze commits
- Decide the next version (patch/minor/major)
- Update `CHANGELOG.md` automatically
- Publish a new GitHub Release
- Publish a new npm version

No manual versioning or tagging is needed! 🎉

---

## ✅ Commit Types

| Type     | When to use                                                |
| -------- | ---------------------------------------------------------- |
| feat     | A new feature                                              |
| fix      | A bug fix                                                  |
| docs     | Documentation only changes                                 |
| style    | Code style changes (formatting, missing semi-colons, etc.) |
| refactor | Code change that neither fixes a bug nor adds a feature    |
| test     | Adding or fixing tests                                     |
| chore    | Maintenance tasks (build, tooling, CI, etc.)               |

---

## 📦 Releasing

Releases are fully automated via GitHub Actions + semantic-release.  
Just merge your PR, and everything else happens automatically.

---

Thanks for contributing! 🚀
