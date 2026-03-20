---
name: codexkit-bug-hunt
description: Reproduce, isolate, patch, and verify defects with explicit expected-versus-observed behavior.
version: 1.0.0
---

# Bug Hunt

Use this skill when a report says something is broken and you need disciplined debugging rather than guesswork.

## Workflow

1. Capture exact observed behavior and expected behavior.
2. Reproduce with the cheapest reliable path.
3. Narrow the failure boundary before editing code.
4. Patch the smallest credible cause.
5. Verify the original failure and nearby regressions.

## Required outputs

- reproduction path
- root-cause hypothesis
- patch summary
- verification notes

## Avoid

- fixing symptoms without a reproduction
- stacking unrelated cleanup into the bug fix
- claiming a root cause without evidence
