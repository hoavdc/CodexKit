---
name: codexkit-bug-hunt
description: Reproduce, isolate, patch, and verify defects with explicit expected-versus-observed behavior.
version: 1.0.0
category: verification
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

## Quality Criteria

- [ ] Every finding is tied to a specific evidence source (log, test, metric)
- [ ] Pass/fail criteria are binary and measurable — no subjective judgments
- [ ] Severity levels are assigned with clear thresholds
- [ ] Remediation steps are provided for all critical and high findings

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are all pass/fail criteria applied against the correct standard or rule? |
| **Completeness** | Were all required dimensions or checklist items evaluated? |
| **Context-fit** | Does the verification scope match the actual risk level of the deliverable? |
| **Consequence** | If this passed verification but had a hidden flaw, what is the worst-case impact? |

## Edge Cases

- **Incomplete data for full assessment** — Document which checks were limited and flag for re-verification when data becomes available.
- **Ambiguous pass/fail criteria** — Request clarification from the standard owner before scoring. Mark as 'Needs Review'.
- **Multiple overlapping standards** — Identify the governing standard and note where others diverge.

## Changelog

- v1.0.0 — Initial release
