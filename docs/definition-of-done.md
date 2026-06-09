# Definition of Done

This charter defines the quality bar for the Datalayer GitHub Actions suite. It
has two parts: the **pre-code gate** (the engineering foundation that must exist
before action code is written) and the **per-PR Definition of Done** (the bar
every pull request clears).

## Pre-code gate (epic #93 / E14)

Action implementation (epics E1–E13) begins only once all of the following are
in place and enforced in CI:

- [x] Monorepo scaffold, Node/engine + dependency policy (#13, #106)
- [x] Strictest TypeScript (#94)
- [x] Type-aware ESLint (#95); Prettier + EditorConfig (#96)
- [x] Husky + lint-staged (#97); Conventional Commits (#98)
- [x] Vitest + coverage thresholds (#99, #101); documented testing strategy (#100)
- [x] TypeDoc (#103); markdownlint, cspell, TSDoc lint (#104)
- [x] Dependabot (#61); CodeQL (#74); Scorecard (#75); zizmor (#109)
- [x] Third-party actions pinned to SHA (#77); actionlint (#86)
- [x] Master CI quality-gate, required on `main` (#105)
- [x] LICENSE, SECURITY, CONTRIBUTING, CoC, CODEOWNERS (#16, #108); templates (#17)

## Per-PR Definition of Done

A pull request is done when:

- The change is focused and each commit follows Conventional Commits.
- The CI quality gate is green: `type-check`, `lint`, `format:check`, `test`
  (coverage thresholds hold), `lint:md`, and `lint:spell`.
- New or changed behavior is covered by tests.
- Public API carries TSDoc; user-facing changes update the relevant docs.
- No new CodeQL or zizmor findings; actions remain SHA-pinned.
- The description links the issues the PR closes.

## Thresholds and protection

- Coverage: ≥90% lines / statements / functions, ≥85% branches.
- Branch protection on `main` requires the **Quality gate**, **CodeQL**, and
  **zizmor** checks to pass before merge.
