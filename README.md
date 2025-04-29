# Modern Monorepo Starter

A complete, ready-to-use starter template for building modern web applications in a monorepo structure. This template helps you build full-stack TypeScript applications with shared code between packages.

## What's Included

This starter comes with everything you need to build professional web applications:

- **React & Astro** - Build interactive UIs with React components in Astro
- **tRPC** - End-to-end type-safe APIs without schemas or code generation
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **TypeScript** - Full type safety across all packages
- **Turborepo** - High-performance build system for JavaScript/TypeScript monorepos
- **PNPM Workspaces** - Fast, disk-efficient package management
- **ESLint & Prettier** - Code quality tools configured and ready to use
- **Renovate** - Automated dependency updates
- **Documentation** - Clean documentation site using Starlight

## Quick Start

```bash
# Create a new project
npx degit ocavue/starter-monorepo my-project

# Navigate to the project
cd my-project

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

After running these commands:

- Astro app: http://localhost:3001
- Documentation: http://localhost:3002

## Project Structure

```graphql
starter-monorepo/
├── apps/                  # Application packages
│   ├── astro-app/         # Main Astro application with React & tRPC
│   └── docs/              # Documentation site built with Starlight
│
├── packages/              # Shared packages
│   ├── api/               # tRPC API definitions and server code
│   └── utils/             # Shared utility functions
└── pnpm-workspace.yaml    # Workspace configuration
```

## Available Commands

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `pnpm dev`       | Start all development servers       |
| `pnpm build`     | Build all packages and applications |
| `pnpm typecheck` | Run TypeScript type checking        |
| `pnpm lint`      | Run ESLint on all files             |
| `pnpm fix`       | Fix linting and formatting issues   |

## Setting Up GitHub Integration

1. Push your repository to GitHub
2. Install the [Renovate](https://github.com/apps/renovate) app for automated dependency updates
3. Install the [Autofix CI](https://github.com/apps/autofix-ci) app to automatically fix linting/formatting in PRs

## Deployment

This monorepo is ready to deploy to platforms like Vercel. Each application can be deployed separately:

1. Connect your GitHub repository to Vercel
2. Set the root directory for each application (e.g., `apps/astro-app`)
3. Configure build settings according to the application

For detailed deployment instructions, see [Vercel's monorepo documentation](https://vercel.com/docs/monorepos).
