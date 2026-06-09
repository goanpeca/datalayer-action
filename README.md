# Datalayer GitHub Actions

> Composable GitHub Actions that expose the Datalayer [`@datalayer/core`](https://github.com/datalayer/core)
> TypeScript SDK for CI/CD — provision runtimes, execute notebooks/code, and manage
> snapshots, secrets, datasources and spaces.

🚧 **Status:** pre-1.0, under active construction. See the
[`0.1.0` milestone](https://github.com/goanpeca/datalayer-action/milestone/1) and the
[open issues](https://github.com/goanpeca/datalayer-action/issues) for the roadmap.

## Repository layout

```text
datalayer-action/                 # npm-workspaces monorepo
├── packages/
│   └── core/                     # @datalayer/action-core — shared client factory, IO, masking, retry, summaries
├── actions/
│   └── <verb>/                   # one workspace per verb-action: action.yml + src + bundled dist
├── .github/workflows/            # CI quality gates + security scanning
└── package.json                  # root (private) workspace config + shared tooling
```

Each action is consumed by sub-path, e.g.:

```yaml
- uses: goanpeca/datalayer-action/actions/create-runtime@v1
  with:
    token: ${{ secrets.DATALAYER_API_KEY }}
    environment: python-cpu-env
```

## Security

See [SECURITY.md](./SECURITY.md) for our vulnerability disclosure policy.

## License

[BSD-3-Clause](./LICENSE) © Datalayer
