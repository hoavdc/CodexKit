# CodexKit

Open-source operating kit for people using OpenAI Codex and ChatGPT to think, write, analyze, decide, automate routine work, and ship better output with more consistency.

CodexKit is a fresh project rebuilt around the surfaces that matter in Codex today: local Skills, high-signal playbooks, automation recipes, operational templates, department starter workspaces, repo guardrails, and MCP onboarding guidance. The pack covers 90 skills across 15 work domains: engineering workflows, high-reasoning work, and low-reasoning office automation across project management, finance, legal, HR, operations, supply chain, strategy, analytics, marketing, data, customer success, sales, IT & admin, training & development, founder workflows, and cross-functional work. It follows the official Codex Skills layout with `SKILL.md`, optional `agents/openai.yaml`, and standard `.agents/skills` discovery paths.

## What is included

- `skills/`: 90 installable Codex Skills across 15 work domains — engineering, high-reasoning business work, and low-reasoning office automation.
- `playbooks/`: copy-ready prompts for clarify, execute, review, decision, delegation, and release work.
- `automations/`: 14 recurring task recipes for engineering plus weekly business, close, hiring, legal intake, operations, marketing, standups, meeting follow-ups, and OKR routines.
- `mcp/`: practical guidance for choosing and rolling out MCP servers without overloading the team.
- `templates/`: 18 reusable templates including department templates, personal productivity templates, the SKILL.md v2 template, and a deep research master prompt for skill authoring.
- `workspaces/`: 9 starter workspace kits for PM, finance, HR, legal, ops, marketing, onboarding, startup launch, and weekly team sync.
- `scripts/`: cross-platform skill installers, workspace quick-start scripts, and a pack validator.
- `web/`: a Next.js docs site for publishing the kit as a public open-source project.
- `skill-finder.md`: situation-based skill index — "I need to… → Use this skill".
- `HUONG-DAN-NHANH.md`: Vietnamese quick-start guide for non-technical office users.

## Who it is for

- Individual operators, analysts, managers, and developers who want Codex to behave more like a disciplined specialist.
- Teams using ChatGPT plus Codex-style workflows that need repeatable prompts, review standards, and operational templates across knowledge work.
- Office-heavy teams that want Codex to handle status assembly, follow-up drafting, intake routing, KPI packaging, and other repeatable workflow chores.
- Maintainers who want a publishable starter repo instead of a private pile of prompts.

## Quick start

### Fastest path for non-coders

If you do not want to use Git commands or remember terminal steps, use the GitHub release package:

1. Open the Releases page for this repository.
2. Download `codexkit-starter-pack-v0.11.0.zip`.
3. Unzip it anywhere on your computer.
4. On Windows, double-click `START-HERE-WINDOWS.cmd`.
   - If Codex is not installed, the script will show installation instructions.
5. Restart Codex.
6. In Codex, type `/skills` to confirm all 90 skills appear.
7. Open `skill-finder.md` to browse skills by situation.
7. Optional: double-click `CREATE-WORKSPACE-WINDOWS.cmd` to create a starter workspace.

For macOS or Linux, download the same release package, unzip it, then run:

```bash
bash ./START-HERE.sh
```

### 1. Install CodexKit skills

Windows PowerShell:

```powershell
.\scripts\install-skills.ps1
```

macOS / Linux:

```bash
bash ./scripts/install-skills.sh
```

By default, both scripts copy every folder from `skills/` into `$HOME/.agents/skills`, which matches the user-scope Codex Skills location documented by OpenAI.

Windows double-click install is also available:

- `START-HERE-WINDOWS.cmd`: installs the skills into `%USERPROFILE%\.agents\skills`
- `CREATE-WORKSPACE-WINDOWS.cmd`: asks for a workspace starter and destination folder

Shell shortcuts are also available for extracted release packages:

- `START-HERE.sh`
- `CREATE-WORKSPACE.sh`

For repository-scoped discovery, install the pack into `.agents/skills` inside the repo:

Windows PowerShell:

```powershell
.\scripts\install-skills.ps1 -Destination .\.agents\skills
```

macOS / Linux:

```bash
CODEXKIT_DESTINATION=./.agents/skills bash ./scripts/install-skills.sh
```

Codex scans `.agents/skills` from the current working directory up to the repository root, then also checks `$HOME/.agents/skills`. If an update does not appear immediately, restart Codex.

Codex can use skills through explicit invocation or implicit description matching. In CLI and IDE workflows, use `/skills` or type `$` to mention a skill directly. CodexKit keeps `codexkit-cloud-delegation` and `codexkit-automation-designer` explicit-only to avoid accidental activation on sensitive workflows.

If the install completed but the skills do not appear:

1. Restart Codex.
2. Check that the skills were copied into `%USERPROFILE%\.agents\skills` on Windows or `$HOME/.agents/skills` on macOS/Linux.
3. In Codex, use `/skills` to verify discovery.

### ChatGPT Work and plugin exports

CodexKit also builds portable skill ZIPs and curated Work plugin packages from the same source skills. This export leaves the Codex install folders unchanged.

```bash
npm run work:build
npm run work:test
```

See [ChatGPT Work and Codex plugin guide](./docs/chatgpt-work.md) for single-skill upload, local marketplace setup, routing design, and manual activation checks. Product access and install options vary by plan, workspace settings, and client surface.

### 2. Validate the pack

```bash
node ./scripts/validate-pack.mjs
```

### 3. Run the documentation site

Use Node `20.9+` and npm `10+` for the docs app and local validation workflow.

```bash
npm --prefix web install
npm run dev
```

### 4. Update to the latest version

Git users:

```bash
bash ./scripts/update-codexkit.sh
```

Windows:

```powershell
.\scripts\update-codexkit.ps1
```

Or double-click `UPDATE-WINDOWS.cmd`.

For macOS / Linux, run:

```bash
bash ./UPDATE.sh
```

The update script auto-detects your install method:
- **Git clone**: Runs `git pull` + re-installs all skills with `--force`.
- **Zip download**: Fetches the latest release from GitHub, syncs local skills/templates/workspaces/playbooks/automations/MCP guides, and overwrites installed skills.

### 5. Start from a department workspace

Copy one folder from `workspaces/` into your own repo or operating folder, then adapt the files to your context. Each starter workspace is opinionated on cadence, core artifacts, and the mix of high-reasoning versus routine automation work.

You can also scaffold from the command line:

```powershell
.\scripts\quick-start.ps1 -List
.\scripts\quick-start.ps1 -Starter project-management-office -Destination .\acme-pmo
```

```bash
bash ./scripts/quick-start.sh --list
bash ./scripts/quick-start.sh --starter finance-performance-desk --destination ./acme-finance
```

For Windows users who prefer prompts instead of command arguments:

1. Double-click `CREATE-WORKSPACE-WINDOWS.cmd`.
2. Copy the starter name from the list.
3. Enter a destination folder such as `.\my-pmo` or `C:\Work\FinanceDesk`.

## Recommended adoption path

1. Install the skills into `$HOME/.agents/skills` or copy selected skills into repo-local `.agents/skills`.
2. Pick one starter workspace that matches your function and adapt its files to your real cadence.
3. Start with one high-reasoning skill and one low-reasoning automation skill that match your most common workflow.
4. Tailor the automation recipes to your repo and operating cadence.
5. Add the department templates you will actually reuse, not every template in the pack.
6. Publish the docs site after replacing any placeholder organization metadata.

## Folder map

```text
CodexKit/
|-- automations/
|-- mcp/
|-- playbooks/
|-- scripts/
|-- skills/
|-- templates/
|-- workspaces/
|-- web/
|-- skill-finder.md
|-- HUONG-DAN-NHANH.md
|-- START-HERE-WINDOWS.cmd / START-HERE.sh
|-- UPDATE-WINDOWS.cmd / UPDATE.sh
`-- CREATE-WORKSPACE-WINDOWS.cmd / CREATE-WORKSPACE.sh
```

## Design principles

- Codex-first, not assistant-agnostic.
- Small set of sharp assets over a giant pile of generic prompts.
- High-reasoning knowledge work deserves first-class skills, not just code prompts.
- Routine coordination work should be automated with low-noise, low-drama skills and templates.
- Review output must be risk-ranked and actionable.
- Automations must include guardrails, not just schedules.
- MCP adoption should be intentional, observable, and reversible.

## Skill architecture

CodexKit uses a **5-Layer Skill Framework** with a tiered structure:

### Layers

Every skill addresses five concerns: **Intent** (clear purpose), **Knowledge** (domain expertise), **Execution** (step-by-step procedure), **Verification** (4C quality gates — Correctness, Completeness, Context-fit, Consequence), and **Evolution** (versioned changelog).

### Tiers

| Tier | Structure | Current coverage |
|------|-----------|------------------|
| **1** | `SKILL.md` + `agents/openai.yaml` | All 90 skills |
| **2** | + `verification/` + `examples/` | 26 high-value skills |
| **3** | + `templates/` + `scripts/` | 5 technical skills |

### Categories

| Category | Skills |
|----------|--------|
| `knowledge` | 17 |
| `data` | 16 |
| `scaffolding` | 16 |
| `runbook` | 10 |
| `verification` | 9 |
| `automation` | 9 |
| `review` | 9 |
| `infra` | 4 |

### Authoring new skills

Use `templates/SKILL-TEMPLATE.md` as the starting point. Optionally, use `templates/deep-research-prompt.md` with an external AI research tool (ChatGPT Deep Research, Gemini, Perplexity Pro) to generate domain knowledge — the 6-section output maps directly into the SKILL.md sections. See `skills/codexkit-skill-template/` for a working reference implementation.

Full authoring guide: [CONTRIBUTING.md](./CONTRIBUTING.md).

## Contributing

CodexKit is open-source and community-driven. There are several ways to help:

- **Enrich existing skills**: 64 skills still need Tier 2 content (`verification/`, `examples/`). Pick a skill you know well, create domain-specific checklists and examples, and open a PR.
- **Add Tier 3 assets**: Technical skills benefit from `scripts/` and `templates/`. Build a reusable helper or output template.
- **Create new skills**: Use `templates/SKILL-TEMPLATE.md` + `templates/deep-research-prompt.md` to author a skill for a domain you are expert in.
- **Add gotchas**: If you encounter a real-world edge case while using a skill, document it using `templates/gotchas-template.md` and add it to the skill folder.
- **Improve docs or translations**: The docs site, playbooks, and the Vietnamese guide all benefit from review.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.

## Open-source quality bar

- MIT license
- contribution, security, and conduct docs included
- install scripts for multiple environments
- validation script for pack structure
- skill metadata via `agents/openai.yaml` for better Codex app presentation
- starter workspaces that help teams adopt CodexKit without designing their operating system from scratch
- CI workflow for pack validation and docs build
- release workflow with packaged skill-pack artifacts
- Dependabot updates for GitHub Actions and the docs app
- separate docs app ready to publish
- release packages that can be downloaded and installed by non-technical users

## Publish checklist

- Update repository URLs in docs and package metadata.
- Replace placeholder maintainer details where needed.
- Add screenshots or a short demo GIF to the docs site.
- Commit and push the release candidate branch or `main`.
- Tag `v0.11.0` after validating the pack, Work exports, and docs build.
- Push the tag to trigger the GitHub release workflow.

## Release process

1. Update `package.json`, `web/package.json`, `CHANGELOG.md`, and `RELEASE-v0.11.0.md`.
2. Run `npm run check` (including `npm run work:test`).
3. Merge the validated release candidate into `main`.
4. Create the tag from the release commit: `git tag v0.11.0`
5. Push the tag: `git push origin v0.11.0`
6. GitHub Actions validates the release and publishes:
   `codexkit-source-v0.11.0.zip`
   `codexkit-starter-pack-v0.11.0.zip`

## Related files

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [SECURITY.md](./SECURITY.md)
- [NOTICE.md](./NOTICE.md)
- [RELEASE-v0.11.0.md](./RELEASE-v0.11.0.md)
- [templates/project-brief.md](./templates/project-brief.md)
- [templates/release-checklist.md](./templates/release-checklist.md)
- [workspaces/README.md](./workspaces/README.md)
