# Changelog

All notable changes to CodexKit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.7.1] - 2026-03-20

### Fixed

- **Codex CLI detection**: Installer no longer falsely reports "Codex CLI was not detected" when Codex is installed via npm global but not in the CMD shell PATH. Both Windows and shell launchers now use 4-method fallback detection (PATH check, common npm global paths, npx resolution, npm root -g).
- **Version display**: Launcher scripts now read version dynamically from `package.json` instead of hardcoding — eliminates version drift between scripts and package metadata.
- **Release packaging**: Starter pack ZIP now includes `package.json`, `CHANGELOG.md`, `skill-finder.md`, `HUONG-DAN-NHANH.md`, `UPDATE-WINDOWS.cmd`, and `UPDATE.sh` — previously missing, which broke the update flow for ZIP users.

### Added

- `UPDATE.sh`: Update wrapper for macOS and Linux users (previously only `UPDATE-WINDOWS.cmd` existed).
- `/release` workflow: Automated pre-release checklist covering version sync, CHANGELOG entry, pack validation, build verification, and tagging.

## [0.7.0] - 2026-03-20

### Added

- **15 new skills** (Wave 3 — expanded domain coverage to 81 total skills):
  - **Data & Analytics (4)**: `codexkit-dashboard-kpi-designer` (SMART KPIs + visualization selection), `codexkit-data-quality-auditor` (DAMA six dimensions + remediation), `codexkit-survey-analyzer` (distributions + segmentation + theme extraction), `codexkit-sql-query-builder` (CTEs + window functions + performance docs).
  - **Engineering (3)**: `codexkit-architecture-decision-writer` (ADR format + options comparison), `codexkit-incident-postmortem` (SRE + 5 Whys + action items), `codexkit-api-design-reviewer` (REST/GraphQL naming + versioning + errors + pagination).
  - **IT & Admin (2, new domain)**: `codexkit-vendor-comparison-matrix` (weighted scoring + TCO), `codexkit-change-management-plan` (ADKAR + Kotter + adoption metrics).
  - **Training & Development (2, new domain)**: `codexkit-training-needs-analyzer` (ADDIE + Bloom's + Kirkpatrick), `codexkit-workshop-facilitator` (Design Thinking + Liberating Structures).
  - **Cross-Functional (4, new domain)**: `codexkit-decision-log` (RAPID framework + options analysis), `codexkit-crisis-communication` (holding statements + Q&A), `codexkit-business-case-writer` (NPV/ROI/Payback + risk assessment), `codexkit-policy-document-writer` (ISO document control + compliance monitoring).

### Changed

- Skill count increased from 66 to 81.
- Domain coverage expanded from 10 to 13 categories (added IT & Admin, Training & Development, Cross-Functional).
- `skill-finder.md` updated to include all 81 skills across 13 domains.

## [0.6.0] - 2026-03-20

### Added

- **15 new depth sub-skills** (Wave 2 — advanced professional skills):
  - **PM (3)**: `codexkit-safe-pi-planning` (SAFe PI Planning + ART sync), `codexkit-pmbok8-earned-value` (EVM + CPI/SPI forecasting), `codexkit-pmbok8-stakeholder-register` (stakeholder analysis + RACI).
  - **Finance (2)**: `codexkit-fpa-rolling-forecast` (12–18 mo rolling forecast + waterfall bridge), `codexkit-audit-readiness-checker` (assertion mapping + RAG scoring).
  - **Legal (1)**: `codexkit-legal-due-diligence` (9 workstreams + deal-breaker flags).
  - **HR (2)**: `codexkit-onboarding-plan-creator` (30-60-90 day plan + pre-boarding), `codexkit-interview-guide-builder` (STAR method + scoring rubrics).
  - **Supply Chain (2)**: `codexkit-supplier-evaluation` (weighted scorecard + tier classification), `codexkit-procurement-rfp-writer` (evaluation methodology + ISO 20400).
  - **Strategy (2)**: `codexkit-strategic-analysis-porter` (Five Forces + PESTEL + SWOT), `codexkit-competitor-intelligence` (CI cycle + battle cards + positioning map).
  - **Marketing (1)**: `codexkit-campaign-brief-writer` (SMART objectives + audience persona + KPIs).
  - **Data (1)**: `codexkit-a-b-test-planner` (hypothesis + sample sizing + MDE + guardrails).
  - **CX (1)**: `codexkit-churn-risk-analyzer` (health scoring + segmentation + intervention playbooks).

### Changed

- Skill count increased from 51 to 66.
- `skill-finder.md` updated to include all 66 skills across 10 categories (added Data & Analytics).
- README updated with new skill descriptions and v0.6.0 references.

## [0.5.0] - 2026-03-20

### Added

- **15 new deep sub-skills** (Wave 1 — high-impact professional skills):
  - **PM Domain (5)**: `codexkit-scrum-retrospective` (5 retro formats by maturity), `codexkit-backlog-refiner` (INVEST + Given/When/Then), `codexkit-okr-writer` (cascade + check-in), `codexkit-risk-register` (P×I scoring + ROAM), `codexkit-kanban-flow-analyzer` (Little's Law + Monte Carlo).
  - **Finance (2)**: `codexkit-fpa-scenario-modeling` (Base/Bull/Bear + sensitivity), `codexkit-financial-statement-analyzer` (ratio analysis + DuPont).
  - **Legal (2)**: `codexkit-contract-drafter` (clause library + risk calibration), `codexkit-legal-memo-writer` (IRAC framework).
  - **HR (2)**: `codexkit-job-description-writer` (SHRM + inclusive language), `codexkit-performance-review-writer` (SBI feedback + bias check).
  - **Marketing (1)**: `codexkit-go-to-market-planner` (TAM/SAM/SOM + positioning + launch timeline).
  - **Operations (2)**: `codexkit-process-mapper` (swimlane + 8 Lean Wastes), `codexkit-root-cause-analyzer` (5 Whys + Fishbone + Pareto + CAPA).
  - **CX (1)**: `codexkit-customer-journey-mapper` (7 stages + Moments of Truth + emotion curve).

### Changed

- Skill count increased from 36 to 51.
- `skill-finder.md` updated to include all 51 skills across 8 categories.
- README updated with new skill descriptions and v0.5.0 references.

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

[Unreleased]: https://github.com/hoavdc/CodexKit/compare/v0.7.1...HEAD
[0.7.1]: https://github.com/hoavdc/CodexKit/releases/tag/v0.7.1
[0.7.0]: https://github.com/hoavdc/CodexKit/releases/tag/v0.7.0
[0.6.0]: https://github.com/hoavdc/CodexKit/releases/tag/v0.6.0
[0.5.0]: https://github.com/hoavdc/CodexKit/releases/tag/v0.5.0
[0.4.0]: https://github.com/hoavdc/CodexKit/releases/tag/v0.4.0
[0.3.1]: https://github.com/hoavdc/CodexKit/releases/tag/v0.3.1
[0.3.0]: https://github.com/hoavdc/CodexKit/releases/tag/v0.3.0
[0.2.0]: https://github.com/hoavdc/CodexKit/releases/tag/v0.2.0
[0.1.0]: https://github.com/hoavdc/CodexKit/releases/tag/v0.1.0

