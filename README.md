# CodexKit

Open-source operating kit for teams using OpenAI Codex and ChatGPT to ship software with more consistency.

CodexKit is a fresh project rebuilt around the surfaces that matter in Codex today: local Skills, high-signal playbooks, automation recipes, repo guardrails, and MCP onboarding guidance.

## What is included

- `skills/`: installable Codex Skills for onboarding, planning, review, debugging, testing, documentation, automation design, MCP setup, and cloud delegation.
- `playbooks/`: copy-ready prompts for Ask, Code, Review, Debug, Delegate, and Release flows.
- `automations/`: recurring task recipes for triage, release readiness, dependency watch, and docs drift.
- `mcp/`: practical guidance for choosing and rolling out MCP servers without overloading the team.
- `templates/`: reusable project brief and release checklist starters.
- `scripts/`: cross-platform skill installers plus a pack validator.
- `web/`: a Next.js docs site for publishing the kit as a public open-source project.

## Who it is for

- Individual developers who want Codex to behave more like a disciplined staff engineer.
- Teams using ChatGPT plus Codex-style workflows that need repeatable prompts, review standards, and operational templates.
- Maintainers who want a publishable starter repo instead of a private pile of prompts.

## Quick start

### 1. Install CodexKit skills

Windows PowerShell:

```powershell
pwsh ./scripts/install-skills.ps1
```

macOS / Linux:

```bash
bash ./scripts/install-skills.sh
```

By default, both scripts copy every folder from `skills/` into `~/.codex/skills`.

### 2. Validate the pack

```bash
node ./scripts/validate-pack.mjs
```

### 3. Run the documentation site

```bash
npm --prefix web install
npm run dev
```

## Recommended adoption path

1. Install the skills into your local Codex environment.
2. Pick two or three playbooks that match your most common workflow.
3. Tailor the automation recipes to your repo and operating cadence.
4. Add the project brief and release checklist templates to your delivery process.
5. Publish the docs site after replacing any placeholder organization metadata.

## Folder map

```text
CodexKit/
├── automations/
├── mcp/
├── playbooks/
├── scripts/
├── skills/
├── templates/
└── web/
```

## Design principles

- Codex-first, not assistant-agnostic.
- Small set of sharp assets over a giant pile of generic prompts.
- Review output must be risk-ranked and actionable.
- Automations must include guardrails, not just schedules.
- MCP adoption should be intentional, observable, and reversible.

## Open-source quality bar

- MIT license
- contribution, security, and conduct docs included
- install scripts for multiple environments
- validation script for pack structure
- separate docs app ready to publish

## Publish checklist

- Update repository URLs in docs and package metadata.
- Replace placeholder maintainer details where needed.
- Add screenshots or a short demo GIF to the docs site.
- Tag `v0.1.0` after validating the pack and docs build.

## Related files

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [SECURITY.md](./SECURITY.md)
- [NOTICE.md](./NOTICE.md)
- [templates/project-brief.md](./templates/project-brief.md)
- [templates/release-checklist.md](./templates/release-checklist.md)
