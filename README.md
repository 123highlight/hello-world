# Calendar Monorepo

This repository hosts a pnpm-powered monorepo for the upcoming calendar experience. It currently contains a Next.js web application and a shared TypeScript package that will host core calendar logic.

## Prerequisites

- [Node.js](https://nodejs.org/) LTS (see `.nvmrc`)
- [pnpm](https://pnpm.io/) 8.x

## Getting started

```bash
pnpm install
pnpm dev
```

The development server runs the `apps/web` application. Open http://localhost:3000 in your browser to view the month or day placeholder experiences.

## Available scripts

- `pnpm dev` – Starts the web application in development mode via Turborepo.
- `pnpm build` – Runs builds for all workspaces.
- `pnpm lint` – Executes ESLint across the monorepo.
- `pnpm test` – Placeholder test script (to be filled in by future work).

## Repository layout

```
apps/
  web/             # Next.js 14 App Router project with Tailwind CSS, next-intl and PWA skeleton
packages/
  core-calendar/   # Shared TypeScript package scaffold for calendar logic
```

Shared configuration (TypeScript, ESLint, Prettier, Turborepo, etc.) lives at the repository root.

## Tooling

- **Monorepo** – pnpm workspaces + Turborepo pipelines
- **Quality** – ESLint, Prettier, commitlint and Husky hooks
- **Editor** – `.editorconfig` to enforce consistent formatting

Future packages, services or tooling can be added under the existing `apps/` and `packages/` directories.
