# Monorepo starter

## Features

- Fully typed with TypeScript. Use [project references](https://typescriptlang.org/docs/handbook/project-references.html) to share types across packages and maximize speed.
- ESLint for linting.
- Prettier for formatting.
- Renovate for dependency management.
- Automatically fix linting and formatting errors with Autofix CI in your pull requests.
- Use [Turborepo](https://turbo.build/) for building and running the project.

## Usage

1. Run `npx degit ocavue/starter-monorepo YOUR_MONOREPO_NAME` to create a new repository.
2. Replace `starter-monorepo` with your monorepo name in the codebase.
3. Push your repository to GitHub.
4. Go to https://github.com/apps/renovate to install the Renovate app.
5. Go to https://github.com/apps/autofix-ci to install the Autofix CI app.

## Scripts

- `pnpm run dev` - start the development server for all apps
- `pnpm run build` - build all packages and apps
- `pnpm run fix` - fix linting and formatting
- `pnpm run typecheck` - typecheck the project using TypeScript
- `pnpm run lint` - lint the project using ESLint

## Project structure

- `packages/utils` - A package that can be used in other projects. You can think of it as `lodash` for your monorepo.
- `packages/api` - All the server side code for your tRPC API.
- `apps/astro-app` - An Astro app. It serves both client and server side code. It uses `packages/api` to serve the API.
- `apps/docs` - A beautiful documentation app built with [Starlight](https://starlight.astro.build/) and [Nova theme](https://github.com/ocavue/starlight-theme-nova).

## Deploy to Vercel

To deploy to Vercel, please check Vercel's [documentation](https://vercel.com/docs/monorepos). Note that you can deploy multiple apps from the same monorepo to Vercel.
