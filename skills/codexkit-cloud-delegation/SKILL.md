---
name: codexkit-cloud-delegation
description: Break complex work into bounded Codex delegation tasks with clear ownership, expected outputs, and integration checkpoints.
version: 1.0.0
---

# Cloud Delegation

Use this skill when the task is large enough to benefit from multiple Codex runs, worktrees, or specialized passes.

## Workflow

1. Separate blocking work from parallel sidecar work.
2. Assign each delegated task a narrow objective and write scope.
3. Require the delegated worker to report changed files and validation run.
4. Integrate results quickly instead of waiting on every branch.
5. Keep final synthesis centralized.

## Good delegated tasks

- isolated test authoring
- docs updates after implementation
- codebase reconnaissance on a bounded topic
- verification passes that can run while implementation continues

## Avoid

- delegating the immediate critical path
- overlapping write scopes
- vague asks like "analyze everything"
