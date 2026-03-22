---
name: codexkit-docs-shipper
description: Update README, migration notes, changelogs, and operator-facing docs so shipped changes remain understandable after release.
version: 1.0.0
category: review
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

## Quality Criteria

- [ ] Feedback is specific and references exact locations in the reviewed material
- [ ] Each critique includes a concrete improvement suggestion
- [ ] Severity is categorized (critical / important / nice-to-have)
- [ ] Positive aspects are acknowledged alongside areas for improvement

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Is the feedback technically accurate and properly contextualized? |
| **Completeness** | Were all major sections of the reviewed material addressed? |
| **Context-fit** | Is the review granularity appropriate for the material's maturity level? |
| **Consequence** | If the author implemented all feedback literally, what could go wrong? |

## Edge Cases

- **Material is too early-stage for detailed review** — Provide structural feedback only. Note that content review is deferred until it matures.
- **Reviewer lacks domain expertise** — Focus on structure, clarity, and consistency. Flag domain-specific claims as 'Needs SME verification'.
- **Author is defensive or resistant to feedback** — Lead with what works well. Frame changes as questions rather than mandates.

## Changelog

- v1.0.0 — Initial release
