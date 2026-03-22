# Common Mistakes — Repo Onboarding

> Anti-patterns to watch for when using the Repo Onboarding skill.

## 1. Outdated setup instructions

**What goes wrong:** Guide says 'npm install' but repo uses pnpm — new dev stuck for hours

**How to fix it:** Test setup instructions on a clean machine quarterly. Or better: use a devcontainer.

## 2. Architecture by aspiration

**What goes wrong:** Describing the ideal architecture, not the current messy reality

**How to fix it:** Document what IS, including tech debt. Mark aspirational sections as 'planned'.

## 3. No suggested first task

**What goes wrong:** New dev finishes setup, then stares at 500 files wondering where to start

**How to fix it:** Include 2-3 'good first issues' with file paths and expected outcome.
