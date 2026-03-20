---
name: codexkit-high-signal-review
description: Review changes with a risk-first mindset that prioritizes bugs, regressions, missing tests, and operational gaps.
version: 1.0.0
---

# High Signal Review

Use this skill when reviewing a diff, branch, or generated patch and the goal is to find meaningful issues quickly.

## Review posture

- findings first
- severity ordered
- evidence over speculation
- missing tests are real risks, not optional notes

## Workflow

1. Understand the user-visible behavior change.
2. Inspect the touched code and nearby boundaries.
3. Look for correctness, data, security, and rollout risks.
4. Check whether tests actually cover the changed behavior.
5. Report only issues that materially matter.

## Output

- list findings first
- each finding should name the risk and affected area
- keep summary short and secondary

Use `references/severity-rubric.md` to rank issues consistently.
