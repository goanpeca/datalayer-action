# Contributing

Thanks for your interest in contributing to the Datalayer GitHub Actions suite!

## Development setup

This is an npm-workspaces monorepo. You need **Node 22+** (see `.nvmrc`).

```bash
nvm use          # or fnm use — installs the Node version from .nvmrc
npm ci           # install dependencies
```

## Quality gate

Every change must pass the same gate CI runs:

```bash
npm run type-check    # strict TypeScript
npm run lint          # type-aware ESLint
npm run format:check  # Prettier
npm test              # Vitest + coverage thresholds
npm run lint:md       # markdownlint
npm run lint:spell    # cspell
```

`npm run format` and `npm run lint:fix` auto-fix most issues. Husky runs
lint-staged on commit, so staged files are checked automatically.

## Commits

We use [Conventional Commits](https://www.conventionalcommits.org/) (enforced by
commitlint). Examples:

- `feat(create-runtime): provision a runtime`
- `fix(exec): mask the runtime token`
- `docs(readme): document the action matrix`

## Pull requests

- Keep each commit scoped to a single concern.
- Ensure the quality gate is green and coverage thresholds hold.
- See [docs/definition-of-done.md](./docs/definition-of-done.md) for the bar a PR must clear.

## Reporting security issues

Please follow [SECURITY.md](./SECURITY.md) — do not open public issues for vulnerabilities.
