# Monorepo starter

## Features

- Fully typed with TypeScript. Use [project references](https://typescriptlang.org/docs/handbook/project-references.html) to share types across packages and maximize speed.
- ESLint for linting.
- Prettier for formatting.
- Renovate for dependency management.
- Automatically fix linting and formatting errors with Autofix CI in your pull requests.

## Usage

1. Run `npx degit ocavue/starter-monorepo YOUR_MONOREPO_NAME` to create a new repository.
2. Replace `starter-monorepo` with your monorepo name in the codebase.
3. Push your repository to GitHub.
4. Go to https://github.com/apps/renovate to install the Renovate app.
5. Go to https://github.com/apps/autofix-ci to install the Autofix CI app.

## Scripts

- `pnpm run fix` - fix linting and formatting
- `pnpm run typecheck` - typecheck the project using TypeScript
- `pnpm run lint` - lint the project using ESLint
