---
name: codexkit-decision-log
description: Record and track organizational decisions using the RAPID framework. Captures decision context, options analysis, RAPID roles, risk assessment, and communication plan. Use when making cross-functional decisions, documenting governance choices, or building an auditable decision trail.
---

# Decision Log

## When to Use

- When a decision affects multiple teams or has lasting consequences
- When leadership needs an auditable trail of why choices were made
- When recurring decisions need a consistent framework
- When decisions stall due to unclear ownership or roles

## Procedure

### Step 1 — Frame the Decision

| Element | Description |
|---------|-------------|
| **Decision ID** | DEC-YYYY-NNN |
| **Title** | One-line description |
| **Category** | Strategic / Tactical / Operational |
| **Urgency** | Critical (24h) / High (1 week) / Normal (2 weeks) / Low |
| **Reversibility** | Easy / Moderate / Difficult / Irreversible |
| **Scope** | Who and what is affected |

### Step 2 — RAPID Roles

Assign clear decision roles:

| Role | Person | Responsibility |
|------|--------|---------------|
| **R** — Recommend | [Name] | Researches, proposes recommendation |
| **A** — Agree | [Names] | Must agree before approval (has veto) |
| **P** — Perform | [Names] | Implements the decision |
| **I** — Input | [Names] | Provides data/perspective (no veto) |
| **D** — Decide | [Name] | Makes the final call (ONE person) |

Rule: Exactly one **D**. Multiple A/P/I are fine.

### Step 3 — Options Analysis

| Criterion | Option A | Option B | Option C (Status Quo) |
|-----------|----------|----------|----------------------|
| Cost | $50K | $30K | $0 |
| Time to implement | 3 months | 6 months | — |
| Risk | Low | Medium | High (doing nothing) |
| Alignment with strategy | High | Medium | Low |

### Step 4 — Risk Assessment

| Option | Risk | Probability | Impact | Mitigation |
|--------|------|------------|--------|------------|
| A | Vendor lock-in | Medium | High | Contractual exit clause |
| B | Team capacity | High | Medium | Phase rollout |

### Step 5 — Decision Record

```
Decision: We will proceed with Option A
Rationale: Best alignment with strategy, acceptable cost, low risk
Trade-offs accepted: Higher cost than Option B
Conditions: Must complete vendor contract review by [date]
Review date: [6 months from now]
```

### Step 6 — Communication Plan

| Audience | Channel | Timing | Message |
|----------|---------|--------|---------|
| Leadership | Email summary | Day 1 | Decision + rationale |
| Affected teams | Team meeting | Day 2 | Impact + timeline |
| Broader org | Slack / Newsletter | Day 5 | High-level announcement |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Decision topic | Yes | What is being decided |
| Options | Yes | At least 2 including status quo |
| Stakeholders | Yes | Who is affected / involved |
| Constraints | Recommended | Timeline, budget, dependencies |

## Output

```markdown
## Decision Record — DEC-2024-012

### Migrate Primary Database to PostgreSQL
**Status:** Accepted | **Date:** 2024-03-15
**Decided by:** CTO | **Recommended by:** Platform Lead

### RAPID
[Roles table]

### Options Considered
[Comparison matrix]

### Decision
We will migrate to PostgreSQL 16 managed on AWS RDS.

### Rationale
- Team expertise (8/10 engineers proficient)
- 40% cost reduction vs current Oracle license
- Acceptable migration risk with phased approach

### Communication Plan
[Audience → Channel → Timing table]
```

## Definition of Done

- [ ] Decision clearly framed with category and urgency
- [ ] RAPID roles assigned (exactly one D)
- [ ] Options compared including status quo
- [ ] Risks identified per option
- [ ] Decision recorded with rationale
- [ ] Communication plan defined
