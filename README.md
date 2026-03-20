# CodexKit

Open-source operating kit for people using OpenAI Codex and ChatGPT to think, write, analyze, decide, automate routine work, and ship better output with more consistency.

CodexKit is a fresh project rebuilt around the surfaces that matter in Codex today: local Skills, high-signal playbooks, automation recipes, operational templates, department starter workspaces, repo guardrails, and MCP onboarding guidance. The pack now covers engineering workflows, high-reasoning work, and low-reasoning office automation across project management, finance, legal, HR, operations, strategy, analytics, marketing, and customer success. It follows the official Codex Skills layout with `SKILL.md`, optional `agents/openai.yaml`, and standard `.agents/skills` discovery paths.

## What is included

- `skills/`: installable Codex Skills across engineering, high-reasoning business work, and low-reasoning office automation.
- `playbooks/`: copy-ready prompts for clarify, execute, review, decision, delegation, and release work.
- `automations/`: recurring task recipes for engineering plus weekly business, close, hiring, legal intake, operations, and marketing routines.
- `mcp/`: practical guidance for choosing and rolling out MCP servers without overloading the team.
- `templates/`: reusable department templates for PM, finance, HR, legal, operations, marketing, and cross-functional work.
- `workspaces/`: starter workspace kits for PM, finance, HR, legal, ops, and marketing teams.
- `scripts/`: cross-platform skill installers, workspace quick-start scripts, and a pack validator.
- `web/`: a Next.js docs site for publishing the kit as a public open-source project.

## Who it is for

- Individual operators, analysts, managers, and developers who want Codex to behave more like a disciplined specialist.
- Teams using ChatGPT plus Codex-style workflows that need repeatable prompts, review standards, and operational templates across knowledge work.
- Office-heavy teams that want Codex to handle status assembly, follow-up drafting, intake routing, KPI packaging, and other repeatable workflow chores.
- Maintainers who want a publishable starter repo instead of a private pile of prompts.

## Quick start

### Fastest path for non-coders

If you do not want to use Git commands or remember terminal steps, use the GitHub release package:

1. Open the Releases page for this repository.
2. Download `codexkit-starter-pack-v0.3.1.zip`.
3. Unzip it anywhere on your computer.
4. On Windows, double-click `START-HERE-WINDOWS.cmd`.
5. Restart Codex.
6. In Codex, type `/skills` to confirm the pack appears.
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

### 4. Start from a department workspace

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
`-- web/
```

## Design principles

- Codex-first, not assistant-agnostic.
- Small set of sharp assets over a giant pile of generic prompts.
- High-reasoning knowledge work deserves first-class skills, not just code prompts.
- Routine coordination work should be automated with low-noise, low-drama skills and templates.
- Review output must be risk-ranked and actionable.
- Automations must include guardrails, not just schedules.
- MCP adoption should be intentional, observable, and reversible.

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
- Tag `v0.3.1` after validating the pack and docs build.
- Push the tag to trigger the GitHub release workflow.

## Release process

1. Update `package.json`, `web/package.json`, and `CHANGELOG.md`.
2. Run `npm run check`.
3. Commit and push the release commit.
4. Create the tag: `git tag v0.3.1`
5. Push the tag: `git push origin v0.3.1`
6. GitHub Actions publishes:
   `codexkit-source-v0.3.1.zip`
   `codexkit-starter-pack-v0.3.1.zip`

## Related files

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [SECURITY.md](./SECURITY.md)
- [NOTICE.md](./NOTICE.md)
- [templates/project-brief.md](./templates/project-brief.md)
- [templates/release-checklist.md](./templates/release-checklist.md)
- [workspaces/README.md](./workspaces/README.md)
