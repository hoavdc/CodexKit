---
name: codexkit-a-b-test-planner
description: Design rigorous A/B test plans with hypothesis, sample size calculation, Minimum Detectable Effect (MDE), randomization strategy, and decision rules. Includes guardrail metrics and rollout playbook. Use when planning product experiments, conversion optimization, or data-driven feature decisions.
---

# A/B Test Planner

## When to Use

- Before running any product experiment or feature test
- When optimizing conversion funnels or UX flows
- When leadership requires statistical rigor for feature decisions
- When planning multi-variant tests or sequential experiments

## Procedure

### Step 1 — Hypothesis

Write a clear, falsifiable hypothesis:
- **If** [change we're making]
- **Then** [metric we expect to change]
- **Because** [reasoning / user insight]

### Step 2 — Metrics

| Type | Metric | Current Baseline |
|------|--------|-----------------|
| **Primary** | The metric that determines success | [value] |
| **Secondary** | Supporting metrics that provide context | [value] |
| **Guardrail** | Metrics that must NOT degrade | [value] |

### Step 3 — Sample Size & Duration

Calculate required sample size using:
- Baseline conversion rate (p₁)
- Minimum Detectable Effect (MDE) — smallest meaningful change
- Statistical significance level (α) — typically 0.05
- Statistical power (1−β) — typically 0.80

`n = f(p₁, MDE, α, β)` → use standard sample size calculator

Duration = n / (daily traffic × allocation %)

### Step 4 — Randomization Plan

1. Randomization unit: user, session, device, or account
2. Allocation: 50/50, or asymmetric with justification
3. Stratification: any segments to balance (geography, plan, device)
4. Exclusion: users to exclude (employees, bots, existing tests)

### Step 5 — Decision Rules

| Outcome | Criteria | Action |
|---------|----------|--------|
| **Winner** | Primary metric ↑ ≥ MDE, p < 0.05, guardrails stable | Ship to 100% |
| **Neutral** | No significant difference | Keep control, iterate hypothesis |
| **Loser** | Primary metric ↓ significantly | Revert, analyze why |
| **Guardrail breach** | Any guardrail metric degrades > threshold | Stop test immediately |

### Step 6 — Rollout Playbook

1. Ramp: 5% → 25% → 50% → 100% over [days]
2. Monitoring: check metrics daily during ramp
3. Rollback trigger: guardrail breach or unexpected anomaly

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Change description | Yes | What is being tested |
| Baseline metric | Yes | Current value |
| MDE target | Yes | Percentage or absolute |
| Daily traffic | Yes | Number of users/events |
| Test duration budget | Recommended | Max days willing to run |

## Output

```markdown
## A/B Test Plan — [Test Name]

### Hypothesis
If we simplify the checkout form from 5 fields to 3 fields,
then checkout completion rate will increase by ≥ 5%,
because user research shows 40% abandon at the address step.

### Metrics

| Type | Metric | Baseline | Target |
|------|--------|----------|--------|
| Primary | Checkout completion rate | 45% | ≥ 50% |
| Secondary | Average order value | $65 | Stable |
| Guardrail | Revenue per user | $12 | No decrease |
| Guardrail | Error rate | 0.5% | No increase |

### Sample Size

| Parameter | Value |
|-----------|-------|
| Baseline rate | 45% |
| MDE | 5% (absolute) |
| Significance (α) | 0.05 |
| Power (1−β) | 0.80 |
| Required n per variant | ~1,600 |
| Daily traffic | 800 users |
| Allocation | 50/50 |
| **Estimated duration** | **4 days** |

### Randomization
- Unit: User (cookie-based)
- Allocation: 50% control / 50% variant
- Exclusion: Internal users, users in other active tests

### Decision Rules
[As defined in procedure]

### Rollout Playbook
Day 1–2: 10% ramp → monitor → Day 3–4: 50% → Day 5: 100%
```

## Definition of Done

- [ ] Hypothesis is clear and falsifiable
- [ ] Primary, secondary, and guardrail metrics defined
- [ ] Sample size calculated with stated parameters
- [ ] Duration estimated based on traffic
- [ ] Randomization plan documented
- [ ] Decision rules and rollout playbook included

## Examples

### Prompt

```text
We want to test if a new onboarding flow increases activation rate.
Current activation: 32%. MDE: 3 percentage points. Daily new users: 500.
We have max 14 days for the test.
Design a complete A/B test plan with sample size and decision rules.
```
