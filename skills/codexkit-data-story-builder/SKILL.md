---
name: codexkit-data-story-builder
description: Turn business data, KPI movement, or experiment results into a clear narrative using the what-so what-now what structure, audience calibration, and action-oriented insight. Use when leaders need a data-backed brief, dashboard storyline, or metric interpretation. Do not use for raw statistical modeling with no communication deliverable.
version: 1.0.0
category: knowledge
---

# Data Story Builder

## Purpose

Make analytics usable by giving the numbers a decision-oriented narrative.

## When to use

- A dashboard or KPI movement needs interpretation.
- Experiment results or trend shifts must be explained to leadership.
- A team needs a data-backed narrative, not a raw chart dump.

## When not to use

- The task is purely technical modeling with no stakeholder communication output.
- The available data is too weak to support any claims and the user refuses caveats.

## Inputs

- business question and target audience
- data points, charts, or KPI movement
- baseline, target, or expected benchmark
- context events that may explain the movement

## Procedure

1. Start from the business question, not the chart.
2. Separate signal, uncertainty, and noise.
3. Structure the story as what happened, why it matters, and what to do next.
4. Translate numbers into plain-language implications for the chosen audience.
5. Recommend the next decision, experiment, or investigation.
6. State confidence limits and missing data.

## Output

- headline insight
- what changed
- why it matters
- likely drivers or interpretations
- recommended next actions
- caveats and confidence notes

## Definition of done

- The audience can act on the analysis.
- The narrative separates evidence from interpretation.
- Caveats are present where the data is weak.

## Examples

- "Turn this KPI dashboard into a narrative for the monthly business review."
- "Explain these A/B test results for a non-technical leadership team."

## Quality Criteria

- [ ] The story starts from a business question, not from chart narration.
- [ ] Evidence, interpretation, and recommendation are clearly separated.
- [ ] Every claim is supported by a data point, comparison, or stated assumption.
- [ ] The "so what" explains business consequence, not just metric movement.
- [ ] Caveats and confidence limits are included when data is incomplete or noisy.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do the numbers, comparisons, and causal language match the underlying data? |
| **Completeness** | Does the story include what changed, why it matters, likely drivers, actions, and caveats? |
| **Context-fit** | Is the narrative useful for the audience's actual decision or operating review? |
| **Consequence** | What wrong action might a stakeholder take if the story overstates certainty? |

## Edge Cases

- **Correlation mistaken for causation** — Use causal language only when the design supports it; otherwise state "may be associated with."
- **Metric definition changed** — Split the story before and after the definition change.
- **Executive audience with little time** — Lead with the decision implication, then supporting evidence.
- **Weak or missing baseline** — Mark confidence as low and recommend the next analysis step.

## Changelog

- v1.1.0 — Added data-story-specific quality gates and consequence checks.
- v1.0.0 — Initial release
