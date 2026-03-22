---
name: codexkit-repo-onboarding
description: Rapidly map a new codebase, identify the runtime model, risk zones, and first high-value next steps.
version: 1.0.0
category: runbook
---

# Repo Onboarding

Use this skill when entering an unfamiliar repository and you need a dependable first-pass map before making changes.

## Objectives

- identify the main runtime and package manager
- locate the actual app entrypoints instead of guessing
- surface tests, linting, build, and deployment hooks
- call out fragile areas, generated code, and secret-handling risk

## Workflow

1. Read the top-level manifest, README, and directory structure.
2. Find the real execution path from entrypoint to key modules.
3. Identify quality gates: lint, type-check, tests, e2e, build.
4. Summarize the codebase in a compact architecture note.
5. Propose the safest next step for the current task.

## Deliverable

Produce a short onboarding brief with:

- stack summary
- critical directories
- commands worth running
- likely risk zones
- open questions that truly block execution

## Avoid

- rewriting architecture docs before the repo is understood
- assuming the largest folder is the main app
- recommending broad refactors during onboarding

## Quality Criteria

- [ ] Steps are executable in sequence without external context
- [ ] Decision points have clear if/then branching
- [ ] Rollback or abort procedures are documented for risky steps
- [ ] Expected duration or time-per-step is estimated

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do the steps execute correctly in the order specified? |
| **Completeness** | Are decision points, error handling, and escalation paths all documented? |
| **Context-fit** | Could someone with the right access but no prior context complete this runbook? |
| **Consequence** | If Step N fails and the operator skips to Step N+1, what breaks? |

## Edge Cases

- **Steps require access the operator doesn't have** — Document exact access requirements upfront. Include escalation contact for emergency access.
- **Environment differs from documented state** — Add a pre-flight check as Step 0 to verify prerequisites before starting.
- **Runbook is triggered during off-hours** — Document who to contact and which steps can be safely deferred to business hours.

## Changelog

- v1.0.0 — Initial release
