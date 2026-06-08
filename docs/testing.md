# Testing strategy

This repository is a monorepo of composable GitHub Actions built on the
`@datalayer/core` TypeScript SDK. Tests are organized as a pyramid so that fast,
deterministic checks run on every change and slower, integrated checks run
deliberately.

## Layers

| Layer            | Location                         | Runs in CI      | Network | Purpose                                                                |
| ---------------- | -------------------------------- | --------------- | ------- | ---------------------------------------------------------------------- |
| **Unit**         | `*/src/**/*.test.ts`             | every push / PR | none    | Pure logic in `packages/core` and per-action helpers.                  |
| **Integration**  | `*/src/**/*.integration.test.ts` | every push / PR | mocked  | Action behavior against a **mocked** Datalayer API (MSW).              |
| **Contract**     | `*/src/**/*.contract.test.ts`    | every push / PR | mocked  | Request/response shapes validated against the SDK / `zod` types.       |
| **Action (e2e)** | `__e2e__/**`                     | gated workflow  | live\*  | The built `dist/` bundles run via `@github/local-action` (issue #102). |

\* Action-level tests run the bundled action; "live" calls are still mocked
unless the gated integration workflow injects a real `DATALAYER_API_KEY`.

## Conventions

- **Co-locate** unit tests next to source as `<name>.test.ts`.
- **One behavior per `it`**; name tests by the behavior, not the method.
- **No real network** in unit/integration/contract layers — HTTP is mocked with
  [MSW](https://mswjs.io). Fixtures live in `packages/core/src/test/`.
- **Deterministic env** — manipulate environment variables with `vi.stubEnv` /
  `vi.unstubAllEnvs`, never by mutating `process.env` directly.

## Coverage

Coverage is measured with the V8 provider and enforced in CI
(`npm run test:coverage`). Thresholds (see `vitest.config.ts`):

- Lines / statements / functions: **≥ 90%**
- Branches: **≥ 85%**

Generated files, type declarations, and test files themselves are excluded.

## Commands

```bash
npm test            # run the suite once
npm run test:watch  # watch mode
npm run test:coverage  # run with coverage + thresholds
```
