# Changelog

All notable changes to CodexKit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.4.0] - 2026-03-20

### Added

- **Skill Finder**: `skill-finder.md` — situation-based index for all 36 skills, organized by 8 categories.
- **5 new office-productivity skills**: `codexkit-email-composer`, `codexkit-report-summarizer`, `codexkit-sprint-planning-assistant`, `codexkit-budget-variance-explainer`, `codexkit-presentation-outliner`.
- **Vietnamese quick-start guide**: `HUONG-DAN-NHANH.md` — localized onboarding for Vietnamese office users.

### Changed

- All 10 templates now include detailed field instructions, usage tips, and worked examples.
- All 9 playbooks now include concrete, real-world prompt examples.
- Skill count increased from 31 to 36.


## [0.3.1] - 2026-03-20

### Added

- Double-click and one-command launcher files so non-technical users can install CodexKit from a release package more easily.
- Interactive workspace creation wrappers for Windows and shell environments.

### Changed

- README and installation docs now include a detailed release-download path for non-coders.
- Install scripts now report counts and clearer next steps after completion.
- CI now validates installed skill counts dynamically and smoke-tests workspace scaffolding.
- Release packaging now ships a full starter pack with skills, templates, workspaces, playbooks, automations, MCP guides, scripts, and quick-start launchers.

## [0.3.0] - 2026-03-20

### Added

- Nine low-reasoning office automation skills for inbox triage, meeting action routing, follow-up drafting, status packaging, finance close coordination, hiring ops, contract intake, KPI packaging, and content calendar assembly.
- Department templates for PM, finance, HR, legal, operations, marketing, and repeatable cross-functional update work.
- Starter workspaces for PM, finance, HR, legal, operations, and marketing teams.
- Additional automation recipes for recurring business workflows.

### Changed

- CodexKit is now positioned as a work operating system for engineering, high-reasoning knowledge work, and routine office operations.
- Pack validation now checks starter workspace structure in addition to skills, playbooks, automations, MCP guides, and templates.

## [0.2.0] - 2026-03-20

### Added

- Thirteen new CodexKit skills for project governance, portfolio risk, executive briefs, finance variance analysis, contract review, compliance gap review, talent calibration, S&OP, strategy scorecards, data storytelling, brand positioning, DMAIC improvement, and CX QBR preparation.
- GitHub issue templates, pull request template, CI workflow, release workflow, and Dependabot configuration for public maintenance.

### Changed

- CodexKit is now positioned as a work operating kit for both engineering and high-reasoning office work, not just software delivery.
- Codex Skills installation and docs now follow `.agents/skills` discovery plus `agents/openai.yaml` metadata.
- Docs app dependency policy now targets patched Next.js 16.2.0 line.

## [0.1.0] - 2026-03-20

### Added

- Initial public CodexKit release.
- Nine Codex-first skills for onboarding, planning, review, debugging, testing, documentation, automation design, MCP setup, and cloud delegation.
- Six playbooks for ask, code, review, debugging, delegation, and release flows.
- Four automation recipes and three MCP integration guides.
- Cross-platform skill installation scripts and a validation script.
- New docs site positioned for OpenAI Codex and ChatGPT users.

[Unreleased]: https://example.com/codexkit/compare/v0.4.0...HEAD
[0.4.0]: https://example.com/codexkit/releases/tag/v0.4.0
[0.3.1]: https://example.com/codexkit/releases/tag/v0.3.1
[0.3.0]: https://example.com/codexkit/releases/tag/v0.3.0
[0.2.0]: https://example.com/codexkit/releases/tag/v0.2.0
[0.1.0]: https://example.com/codexkit/releases/tag/v0.1.0
