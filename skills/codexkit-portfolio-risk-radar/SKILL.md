---
name: codexkit-portfolio-risk-radar
description: Build multi-project RAID and RAG views for portfolios, programs, or cross-functional workstreams. Use when PMOs, program managers, or leaders need a real status picture across milestones, dependencies, owners, and escalations. Do not use for a single standup note, one issue ticket, or generic meeting minutes.
version: 1.0.0
category: data
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

## Quality Criteria

- [ ] Data sources and assumptions are explicitly stated
- [ ] Calculations are reproducible from provided inputs
- [ ] Visualizations or tables have clear labels, units, and time ranges
- [ ] Caveats and confidence levels are documented for estimates

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are formulas, aggregations, and statistical methods applied correctly? |
| **Completeness** | Does the analysis cover all requested metrics and time ranges? |
| **Context-fit** | Are the chosen metrics relevant to the business question being answered? |
| **Consequence** | If this data were used for a decision today, what blind spots remain? |

## Edge Cases

- **Missing or incomplete data** — Document gaps and their potential impact on conclusions. Provide ranges instead of point estimates.
- **Outliers skewing results** — Report with and without outliers. Document the decision to include or exclude.
- **Changing data definitions mid-period** — Split analysis at the change boundary and note the schema difference.

## Changelog

- v1.0.0 — Initial release
