---
name: codexkit-execution-planner
description: Turn ambiguous requests into an executable implementation plan with assumptions, sequence, acceptance checks, and rollback thinking.
version: 1.0.0
category: scaffolding
---

# Execution Planner

Use this skill when the request is larger than a quick patch and needs a plan that can survive real implementation.

## Principles

- keep the plan close to the code that will change
- make assumptions explicit
- sequence work to reduce rework
- define how success will be checked

## Workflow

1. Restate the user goal in operational language.
2. List constraints, dependencies, and assumptions.
3. Break the work into thin, testable slices.
4. Define acceptance checks for each slice.
5. Note rollback or containment options for risky steps.

## Output structure

Use the template in `references/plan-template.md`.

## Avoid

- task lists with no verification strategy
- plans that front-load polish before foundations
- broad estimates with no dependency reasoning

## Quality Criteria

- [ ] All placeholder sections are filled with domain-specific content
- [ ] Structure follows the relevant industry standard or framework
- [ ] Language matches target audience (technical / executive / legal)
- [ ] Output is ready for review — not a rough draft requiring major rework

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the draft structure follow the stated framework or industry standard? |
| **Completeness** | Are all required sections present with substantive (not placeholder) content? |
| **Context-fit** | Does tone, detail level, and terminology match the intended audience? |
| **Consequence** | If sent to the intended recipient without further editing, what would fail? |

## Edge Cases

- **No existing template for this type** — Use the closest available template and document all customizations made.
- **Stakeholder requirements conflict** — Flag conflicts explicitly in the draft. Do not silently choose one requirement over another.
- **Output required in multiple formats** — Produce the canonical format first, then derive others. Note any formatting limitations.

## Changelog

- v1.0.0 — Initial release
