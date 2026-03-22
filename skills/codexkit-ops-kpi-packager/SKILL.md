---
name: codexkit-ops-kpi-packager
description: Format recurring KPI snapshots, exception flags, and owner follow-ups for weekly operations reviews. Use when the work is routine packaging of operational metrics and exceptions. Do not use for root cause analysis, process redesign, or full performance diagnosis.
version: 1.0.0
category: data
---

# Ops KPI Packager

## Purpose

Turn raw metrics and exception notes into a compact control view.

## When to use

- metrics are reported regularly but still need manual cleanup
- operations reviews need one concise input file
- teams are spending time formatting instead of acting

## When not to use

- the user needs deep analysis or improvement design
- there is no reliable source data for the KPI snapshot

## Inputs

- metrics and targets
- exceptions or service failures
- owner notes or corrective actions

## Procedure

1. Normalize the metrics into current, target, and trend.
2. Flag only the exceptions that materially need attention.
3. Pair each exception with owner and next action if known.
4. Separate observations from assumptions.
5. End with a short review-ready summary.

## Output

- KPI snapshot
- exception list
- owner follow-ups
- short summary for the next ops review

## Definition of done

- the review can focus on action, not formatting
- metric misses and owner actions are easy to scan
- noise is reduced without hiding material exceptions

## Examples

- "Package these warehouse KPIs into a weekly control view."
- "Turn this ops scorecard and issue log into one review-ready update."

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
