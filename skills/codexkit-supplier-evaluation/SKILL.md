---
name: codexkit-supplier-evaluation
description: Evaluate and tier suppliers using a weighted scorecard per SCOR DS Supplier Management practices. Score Quality, Delivery, Cost, Responsiveness, and Sustainability. Classify suppliers as Strategic, Preferred, Approved, or Conditional. Use during vendor reviews or procurement decisions.
---

# Supplier Evaluation Scorecard

## When to Use

- During quarterly or annual supplier performance reviews
- When selecting vendors for new sourcing decisions
- When consolidating or rationalizing the supplier base
- When a supplier's performance triggers a review

## Procedure

### Step 1 — Define Evaluation Criteria

| Criterion | Weight | Measurement |
|-----------|--------|-------------|
| Quality | 30% | Defect rate, inspection pass rate, returns |
| Delivery | 25% | On-time delivery %, lead time variance |
| Cost | 20% | Price competitiveness, total cost of ownership |
| Responsiveness | 15% | Communication speed, issue resolution time |
| Sustainability | 10% | ESG compliance, certifications, carbon footprint |

Adjust weights based on industry and strategic priorities.

### Step 2 — Score Each Criterion

| Score | Level | Description |
|-------|-------|-------------|
| 5 | Excellent | Exceeds expectations consistently |
| 4 | Good | Meets expectations with occasional excellence |
| 3 | Acceptable | Meets minimum standards |
| 2 | Below Average | Frequent issues, requires monitoring |
| 1 | Unacceptable | Consistent failures, action required |

### Step 3 — Calculate Weighted Total

`Weighted Score = Σ (Score × Weight)`

### Step 4 — Tier Classification

| Weighted Score | Tier | Relationship Strategy |
|---------------|------|----------------------|
| 4.5–5.0 | Strategic | Long-term partnership, innovation collaboration |
| 3.5–4.4 | Preferred | Stable relationship, volume commitment |
| 2.5–3.4 | Approved | Transactional, competitive bidding |
| < 2.5 | Conditional | Improvement plan required, phase-out risk |

### Step 5 — Action Plan

For Conditional and low-Approved suppliers:
1. Issue corrective action request (CAR)
2. Define improvement targets with timeline
3. Schedule re-evaluation in 90 days
4. Identify backup supplier if no improvement

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Supplier name and category | Yes | Text |
| Performance data | Yes | Metrics per criterion |
| Contract/spend data | Recommended | Annual spend, contract terms |
| Previous evaluation | Recommended | Prior scorecard if available |

## Output

```markdown
## Supplier Evaluation — [Supplier Name] — [Period]

### Scorecard

| Criterion | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Quality | 30% | 4 | 1.20 |
| Delivery | 25% | 3 | 0.75 |
| Cost | 20% | 4 | 0.80 |
| Responsiveness | 15% | 5 | 0.75 |
| Sustainability | 10% | 3 | 0.30 |
| **Total** | **100%** | | **3.80** |

### Tier: PREFERRED (3.80 / 5.0)

### Improvement Areas
1. Delivery: OTD dropped to 88% (target: 95%) — root cause: warehouse capacity
2. Sustainability: No ISO 14001 certification yet — expected Q3

### Action Plan
| Action | Owner | Deadline |
|--------|-------|----------|
| Improve OTD to 95% | Supplier ops team | 90 days |
| Submit ISO 14001 timeline | Supplier quality | 60 days |
| Re-evaluate | Procurement | Q3 |
```

## Definition of Done

- [ ] All criteria scored with evidence
- [ ] Weighted total calculated
- [ ] Tier classification assigned
- [ ] Improvement areas identified for scores ≤ 3
- [ ] Action plan with owners and deadlines for Conditional/low-Approved

## Examples

### Prompt

```text
Evaluate our packaging supplier FastPack Ltd for Q1.
Quality: 96% pass rate (4/5), Delivery: 88% OTD (3/5), Cost: competitive (4/5),
Responsiveness: excellent (5/5), Sustainability: no ISO 14001 (3/5).
Generate the scorecard and improvement plan.
```
