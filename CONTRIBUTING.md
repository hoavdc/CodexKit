# Contributing

CodexKit is meant to stay opinionated and useful. Contributions are welcome when they improve signal, not when they merely add surface area.

## Before opening a pull request

1. Run `node ./scripts/validate-pack.mjs`.
2. If you touched the docs app, run `npm --prefix web run lint` and `npm --prefix web run build`.
3. Explain the user problem your change solves.
4. Prefer small, composable additions over broad prompt dumps.
5. Use the issue and pull request templates so context is structured from the start.

## Contribution guidelines

- Add new skills only when they cover a distinct workflow.
- Keep playbooks copy-ready and easy to adapt.
- Include guardrails for any automation recipe.
- Use examples grounded in real engineering or day-to-day business work.
- Keep starter workspaces opinionated enough to be useful without turning them into bloated internal wikis.
- Update the docs site when the public surface changes.

## Good first contributions

- tighten an existing skill
- improve install scripts
- add validation checks
- clarify docs
- add narrowly scoped templates

## Pull request expectations

- Link the issue or explain why no issue was needed.
- Call out the user-facing behavior that changed.
- List the validation commands you actually ran.
- Update `CHANGELOG.md` when the public surface changed.
