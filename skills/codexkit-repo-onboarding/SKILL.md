---
name: codexkit-repo-onboarding
description: Rapidly map a new codebase, identify the runtime model, risk zones, and first high-value next steps.
version: 1.0.0
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
