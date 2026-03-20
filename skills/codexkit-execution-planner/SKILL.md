---
name: codexkit-execution-planner
description: Turn ambiguous requests into an executable implementation plan with assumptions, sequence, acceptance checks, and rollback thinking.
version: 1.0.0
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
