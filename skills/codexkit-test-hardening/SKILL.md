---
name: codexkit-test-hardening
description: Strengthen test coverage around changed behavior, edge cases, and regressions without writing noisy or brittle tests.
version: 1.0.0
category: verification
---

# Test Hardening

Use this skill when code changes are underway or just landed and you need tests that actually protect behavior.

## Focus areas

- changed execution paths
- high-risk conditionals
- error handling
- serialization or contract boundaries
- regressions that can silently return

## Workflow

1. Identify the behavior that must remain true.
2. Choose the narrowest test level that can protect it.
3. Cover happy path, failure path, and one realistic edge.
4. Verify tests fail before the fix when possible.
5. Keep fixtures readable and cheap to maintain.

## Avoid

- snapshot-heavy tests with weak intent
- restating implementation details instead of behavior
- adding e2e coverage when a unit or integration test is enough

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
