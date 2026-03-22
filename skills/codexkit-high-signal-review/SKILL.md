---
name: codexkit-high-signal-review
description: Review changes with a risk-first mindset that prioritizes bugs, regressions, missing tests, and operational gaps.
version: 1.0.0
category: verification
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
