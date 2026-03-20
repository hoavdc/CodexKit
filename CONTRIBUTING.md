# Contributing

CodexKit is meant to stay opinionated and useful. Contributions are welcome when they improve signal, not when they merely add surface area.

## Before opening a pull request

1. Run `node ./scripts/validate-pack.mjs`.
2. If you touched the docs app, run `npm --prefix web run lint`.
3. Explain the user problem your change solves.
4. Prefer small, composable additions over broad prompt dumps.

## Contribution guidelines

- Add new skills only when they cover a distinct workflow.
- Keep playbooks copy-ready and easy to adapt.
- Include guardrails for any automation recipe.
- Use examples grounded in real software delivery work.
- Update the docs site when the public surface changes.

## Good first contributions

- tighten an existing skill
- improve install scripts
- add validation checks
- clarify docs
- add narrowly scoped templates
