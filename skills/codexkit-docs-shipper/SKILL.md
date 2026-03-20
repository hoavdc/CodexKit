---
name: codexkit-docs-shipper
description: Update README, migration notes, changelogs, and operator-facing docs so shipped changes remain understandable after release.
version: 1.0.0
---

# Docs Shipper

Use this skill when product or engineering changes alter how a repo is used, run, configured, or released.

## Workflow

1. Identify which audience is affected: contributor, operator, end user, or reviewer.
2. Update the smallest docs surface that prevents confusion.
3. Prefer runnable examples and concrete file paths.
4. Add change notes when the public surface changed.
5. Flag unresolved docs debt instead of pretending the docs are complete.

## Outputs

- changed docs list
- short explanation of what was updated
- follow-up docs gaps if any remain
