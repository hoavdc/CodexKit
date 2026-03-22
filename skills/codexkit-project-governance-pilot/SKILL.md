---
name: codexkit-project-governance-pilot
description: Stand up or reset project governance for new, complex, or troubled initiatives using PMBOK 8 value delivery, OKR alignment, and Scrum or SAFe cadence choices where relevant. Use when a project needs a charter, decision rights, stakeholder map, RAID logic, escalation path, or reporting rhythm. Do not use for simple task lists, isolated sprint notes, or code implementation planning.
version: 1.0.0
category: infra
---

# Project Governance Pilot

## Purpose

Build a practical governance pack that helps a project deliver value, make decisions fast, and surface risk early.

## When to use

- A new initiative needs a charter and operating model.
- A multi-team program has unclear ownership or cadence.
- A troubled project needs a governance reset before more execution.

## When not to use

- A team only needs a sprint backlog or daily standup summary.
- The request is just a status rewrite with no governance decision.

## Inputs

- project purpose, expected outcomes, and success measures
- timeline, milestones, budget, and constraints
- stakeholder list, sponsor, and delivery teams
- current delivery model or likely model: predictive, adaptive, hybrid
- known risks, dependencies, or escalation pain points

## Procedure

1. Frame the value case in business terms, not task terms.
2. Choose the working model: predictive, adaptive, hybrid, Scrum, or SAFe-heavy.
3. Define decision rights with a simple RACI and escalation path.
4. Map stakeholders by influence, dependency, and communication need.
5. Set the operating cadence: steering review, delivery review, RAID review, and executive update rhythm.
6. Define the core artifacts: charter, RAID structure, dependency view, scorecard, and status format.
7. Mark assumptions, missing inputs, and the first 30-day setup actions.

## Output

- project value statement and success definition
- governance model with roles and decision rights
- stakeholder and communication matrix
- cadence calendar and meeting purposes
- RAID and dependency structure
- first-action list with owners

## Definition of done

- A sponsor can see how decisions get made.
- Teams know which cadence and artifacts they must maintain.
- Risks, dependencies, and escalation triggers are explicit.
- Success is framed around value delivery, not just activity completion.

## Examples

- "Set up governance for a cross-functional transformation project with product, finance, and operations teams."
- "Our program is slipping because nobody owns decisions. Build a governance reset pack we can use this week."

## Quality Criteria

- [ ] All dependencies and prerequisites are documented
- [ ] Changes are reversible or include a rollback plan
- [ ] Security implications are assessed for each configuration change
- [ ] Monitoring and alerting are defined for post-deployment validation

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are all configurations, permissions, and dependencies accurate? |
| **Completeness** | Does the setup cover dev, staging, and prod environments as needed? |
| **Context-fit** | Is the solution proportional to the problem (not over/under-engineered)? |
| **Consequence** | If deployed as-is to production, what is the highest-risk failure mode? |

## Edge Cases

- **Target environment has pre-existing configuration** — Scan for conflicts before applying changes. Document what to preserve.
- **Permissions differ between environments** — Test in staging first. Document the minimum permissions required.
- **Third-party service is unavailable or deprecated** — Document fallback or alternative. Include health-check endpoints.

## Changelog

- v1.0.0 — Initial release
