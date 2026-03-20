---
name: codexkit-backlog-refiner
description: Refine Product Backlog Items to meet INVEST criteria. Write User Stories with Acceptance Criteria in Given/When/Then format, estimate with Story Points, and flag dependencies. Use before sprint planning when backlog items need grooming. Do not use to prioritize the backlog — that is the Product Owner's decision.
version: 1.0.0
---

# Backlog Refiner

## Purpose

Transform raw backlog items into sprint-ready User Stories that meet INVEST criteria, with clear Acceptance Criteria and reliable estimates.

## When to use

- mid-sprint refinement sessions (preparing items for the next sprint)
- when backlog items are vague, oversized, or lack acceptance criteria
- when the team needs help decomposing epics into estimable stories
- when onboarding a new Product Owner who needs story-writing structure

## When not to use

- prioritizing backlog order (Product Owner responsibility)
- strategic roadmap discussions or feature discovery
- items already refined and ready for sprint planning

## Inputs

- raw backlog items (titles, rough descriptions, business context)
- product goal or current product increment theme
- team's story point calibration reference (what does 1 point mean?)
- known technical constraints or dependencies
- Definition of Done for the product

## Procedure

1. **Review each item** against INVEST checklist:
   - I — Independent: not blocked by other stories
   - N — Negotiable: details can be discussed with PO
   - V — Valuable: delivers clear value to user or business
   - E — Estimable: team can estimate the effort
   - S — Small: completable within one sprint
   - T — Testable: has verifiable acceptance criteria
2. **Write User Story** using 3C template:
   - Card: "As a [persona], I want [action] so that [benefit]"
   - Conversation: context, questions for clarification
   - Confirmation: Acceptance Criteria in Given/When/Then
3. **Estimate effort** using Planning Poker reference scale:
   - 1 pt ≈ 4h | 2 pt ≈ 1 day | 3 pt ≈ 1.5 days | 5 pt ≈ 3 days
   - 8 pt = needs breakdown | 13+ pt = Epic, must split
4. **Flag items** that are too large — recommend split strategies.
5. **Identify dependencies** on other teams, services, or external parties.
6. **Document risks** or unknowns that could block the story.

## Output

- refined User Stories with INVEST checklist scores
- Acceptance Criteria (3–5 per story, Given/When/Then format)
- Story Point estimates with rationale
- split recommendations for oversized items
- dependency and risk flags

## Definition of done

- every story passes all 6 INVEST criteria
- every story has at least 3 Acceptance Criteria in Given/When/Then
- no story exceeds 8 story points without a split recommendation
- dependencies are explicitly documented

## Examples

- "Refine these 8 raw feature requests into sprint-ready user stories."
- "This epic 'User Authentication' is too big — help me split it into stories."
- "Write acceptance criteria for the 'Password Reset' story."
