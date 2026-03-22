# Good Output Example — A/B Test Planner

> This example demonstrates what well-executed a/b test planner output looks like.

## Scenario

A/B test for a simplified checkout flow on an e-commerce site

## Why It Works

1. Hypothesis: 'Reducing checkout steps from 4 to 2 will increase completion rate by ≥3pp'
2. Power: 'Baseline: 28% completion. MDE: 3pp. α=0.05, β=0.20 → n=3,400/variant → 14 days at current traffic'
3. Guardrails: 'Average order value must not drop >2%. Support ticket rate must not increase >10%.'
4. Decision: 'Ship if primary metric is significant AND no guardrail violated. Hold if borderline for 7 more days.'

## Key Patterns to Replicate

- Hypothesis is falsifiable and specific
- Duration is calculated, not arbitrary ('let's run it for 2 weeks')
- Success criteria include both 'what we want' and 'what we can't afford to break'
