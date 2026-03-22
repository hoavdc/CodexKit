# Contributing

CodexKit is meant to stay opinionated and useful. Contributions are welcome when they improve signal, not when they merely add surface area.

## Before opening a pull request

1. Run `node ./scripts/validate-pack.mjs`.
2. If you touched the docs app, run `npm --prefix web run lint` and `npm --prefix web run build`.
3. Explain the user problem your change solves.
4. Prefer small, composable additions over broad prompt dumps.
5. Use the issue and pull request templates so context is structured from the start.

## Authoring a new skill

1. **Start from the template.** Copy [`templates/SKILL-TEMPLATE.md`](templates/SKILL-TEMPLATE.md) into `skills/codexkit-{your-skill}/SKILL.md`.
2. **Fill all 10 sections.** Purpose, When to Use, Procedure, Inputs, Output, Quality Criteria, Verification (4C), Edge Cases, Examples, Changelog.
3. **Assign a category** in frontmatter — one of: `knowledge`, `verification`, `data`, `automation`, `scaffolding`, `review`, `runbook`, `infra`.
4. **Set version** to `1.0.0` in frontmatter.
5. **Use Deep Research** (optional but recommended). Copy [`templates/deep-research-prompt.md`](templates/deep-research-prompt.md), fill in your skill's domain, and paste into ChatGPT Deep Research / Gemini / Perplexity Pro. Map the 6 output sections back into your SKILL.md.
6. **Add `agents/openai.yaml`** with the interface block.
7. **Run validation:** `node ./scripts/validate-pack.mjs`

### Skill folder structure

Minimum (all skills): `SKILL.md` + `agents/openai.yaml`

For high-value skills, consider adding:
- `verification/checklist.md` — domain-specific 4C checklist
- `examples/good-output.md` and `examples/common-mistakes.md`
- `templates/` — output templates or starter files
- `CHANGELOG.md` — version history

See [`templates/SKILL-TEMPLATE.md`](templates/SKILL-TEMPLATE.md) for the full tier guide.

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

## Community enrichment — where help is most needed

### Tier 2 enrichment (61 skills need this)

21 of 82 skills already have `verification/` and `examples/` folders. The other 61 do not. To enrich a skill:

1. Pick a skill you have domain expertise in.
2. Create `verification/checklist.md` — answer four domain-specific questions for each of the 4C gates (Correctness, Completeness, Context-fit, Consequence).
3. Create `examples/good-output.md` — provide a realistic, annotated example of what a well-executed output looks like.
4. Create `examples/common-mistakes.md` — document 3 anti-patterns with explanations and fixes.
5. Reference `skills/codexkit-skill-template/` for the expected format.

### Tier 3 enrichment (technical skills)

5 skills have `scripts/` or `templates/` folders. Other technical skills would benefit from:
- Reusable helpers in `scripts/` (linters, validators, analyzers)
- Starter templates in `templates/` (output formats, spec documents)

### Gotchas

If you discover an edge case or workaround while using a skill:
1. Copy `templates/gotchas-template.md` into the skill folder as `gotchas.md`.
2. Add a `GOTCHA-001` entry with discovery date, symptom, root cause, workaround, and status.
3. Use the `/evolve-skill` workflow to handle versioning.

## Pull request expectations

- Link the issue or explain why no issue was needed.
- Call out the user-facing behavior that changed.
- List the validation commands you actually ran.
- Update `CHANGELOG.md` when the public surface changed.
