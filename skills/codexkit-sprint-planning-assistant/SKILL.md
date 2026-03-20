---
name: codexkit-sprint-planning-assistant
description: Facilitate sprint planning by organizing backlog items, estimating effort, balancing capacity, identifying dependencies, and producing a sprint commitment summary. Use when teams need structured sprint planning output. Do not use for strategic roadmap planning, annual budgeting, or product vision work.
version: 1.0.0
---

# Sprint Planning Assistant

## Purpose

Turn a groomed backlog into a well-scoped sprint plan with clear commitments, dependencies, and capacity fit.

## When to use

- preparing for a sprint planning meeting
- organizing and estimating a batch of backlog items
- checking if proposed sprint scope fits team capacity
- documenting sprint goals and commitments for stakeholders

## When not to use

- strategic product planning or roadmapping
- items are not groomed (requirements unclear, no acceptance criteria)
- portfolio-level work intake or project governance

## Inputs

- backlog items (titles, descriptions, acceptance criteria)
- team capacity (available person-days, holidays, known absences)
- sprint duration (typically 1 or 2 weeks)
- velocity reference (last 3 sprints if available)
- known dependencies or blockers
- sprint goal or theme from product owner

## Procedure

1. Review backlog items and confirm each has clear acceptance criteria.
2. Flag items that are too large for one sprint and recommend splitting.
3. Estimate effort using story points or T-shirt sizing.
4. Map total estimated effort against team capacity and historical velocity.
5. Identify cross-team or technical dependencies.
6. Recommend a sprint commitment — items that fit capacity with 20% buffer.
7. Write the sprint goal as one sentence.
8. Produce a sprint summary table for stakeholders.

## Output

- sprint goal statement
- committed items table (item, estimate, owner, dependency)
- stretch items (if capacity allows)
- flagged risks or blockers
- capacity utilization summary

## Definition of done

- total committed effort is ≤ 80% of team capacity
- every committed item has an owner
- dependencies are explicitly called out
- sprint goal is one clear sentence tied to business value

## Examples

- "Plan Sprint 12 with these 15 backlog items for a 5-person team over 2 weeks."
- "Check if we can fit the payment feature plus 3 bug fixes into next sprint."
- "Write a sprint summary for stakeholders — what we're committing to and why."
