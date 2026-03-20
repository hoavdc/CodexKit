---
name: codexkit-portfolio-risk-radar
description: Build multi-project RAID and RAG views for portfolios, programs, or cross-functional workstreams. Use when PMOs, program managers, or leaders need a real status picture across milestones, dependencies, owners, and escalations. Do not use for a single standup note, one issue ticket, or generic meeting minutes.
version: 1.0.0
---

# Portfolio Risk Radar

## Purpose

Turn scattered project updates into a portfolio-level health view that supports escalation and prioritization.

## When to use

- Leadership needs a single portfolio health readout.
- A PMO needs RAID, dependency, and milestone logic across many workstreams.
- A program has conflicting status narratives and needs one truth model.

## When not to use

- Only one task or one sprint is in scope.
- The request is only to reformat existing notes without analysis.

## Inputs

- list of workstreams or projects
- current milestones, deadlines, and owners
- open risks, assumptions, issues, and dependencies
- status evidence, blockers, and escalation history
- material budget, scope, or capacity constraints

## Procedure

1. Normalize the inventory of workstreams, owners, and milestone dates.
2. Separate risks, issues, assumptions, and dependencies instead of mixing them.
3. Score health by schedule, scope, resourcing, dependency risk, and decision latency.
4. Build a simple RAG model with explicit reasons for each rating.
5. Highlight cross-project dependencies and shared bottlenecks.
6. Recommend the few escalations or leadership decisions that change trajectory fastest.
7. State what evidence is weak or stale.

## Output

- portfolio summary with top risks and overall health
- workstream table with RAG, owner, next milestone, and escalation need
- dependency heatmap or narrative
- top decision asks and recommended owners
- next reporting rhythm

## Definition of done

- Leaders can tell which workstreams are truly off-track and why.
- Escalations are prioritized, not buried in raw status text.
- Dependency risk is visible across the portfolio.

## Examples

- "Turn these seven project updates into a PMO-level portfolio risk report for Monday steering."
- "We have conflicting status updates across three programs. Build a single RAID and RAG view."
