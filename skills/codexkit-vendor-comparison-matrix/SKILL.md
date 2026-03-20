---
name: codexkit-vendor-comparison-matrix
description: Build structured vendor/tool evaluation matrices with weighted scoring, TCO analysis, and recommendation memos. Covers criteria definition, deal-breaker identification, and negotiation points. Use when selecting SaaS tools, evaluating technology vendors, or making build-vs-buy decisions.
---

# Vendor Comparison Matrix

## When to Use

- When evaluating 2+ vendors or tools for a purchase decision
- When building a business case for tool selection
- When leadership requires a structured evaluation for procurement
- When comparing build-vs-buy options

## Procedure

### Step 1 — Requirements Gathering

Categorize requirements:

| Category | Requirement | Priority (Must/Should/Nice) |
|----------|------------|---------------------------|
| Functional | [What it must do] | Must |
| Integration | [What it connects to] | Should |
| Security | [Compliance needs] | Must |
| Performance | [Speed, scale] | Should |
| Support | [SLA, response time] | Nice |

Identify **deal-breakers** — any Must requirement not met eliminates the vendor.

### Step 2 — Weight Criteria

Assign weights that sum to 100:

| Category | Weight | Justification |
|----------|--------|---------------|
| Functionality | 30 | Core use case |
| Integration | 20 | Must connect to existing stack |
| Security & Compliance | 20 | Regulated industry |
| Pricing / TCO | 15 | Budget constrained |
| Vendor viability | 10 | Long-term relationship |
| UX / Adoption | 5 | Ease of rollout |

### Step 3 — Score Vendors

Score each vendor 1–5 per criterion:

| Criterion (Weight) | Vendor A | Vendor B | Vendor C |
|--------------------|----------|----------|----------|
| Feature set (30) | 4 → 120 | 5 → 150 | 3 → 90 |
| Integration (20) | 5 → 100 | 3 → 60 | 4 → 80 |
| Security (20) | 4 → 80 | 4 → 80 | 5 → 100 |
| Pricing (15) | 3 → 45 | 2 → 30 | 5 → 75 |
| Viability (10) | 5 → 50 | 4 → 40 | 2 → 20 |
| UX (5) | 4 → 20 | 5 → 25 | 3 → 15 |
| **Weighted Total** | **415** | **385** | **380** |

### Step 4 — TCO Analysis

Calculate Total Cost of Ownership over 3 years:

| Cost Component | Vendor A | Vendor B | Vendor C |
|---------------|----------|----------|----------|
| License / subscription | $X | $Y | $Z |
| Implementation / migration | ... | ... | ... |
| Training & change management | ... | ... | ... |
| Ongoing support / maintenance | ... | ... | ... |
| Integration development | ... | ... | ... |
| Opportunity cost of downtime | ... | ... | ... |
| **3-Year TCO** | **$XX** | **$YY** | **$ZZ** |

### Step 5 — Risk Assessment

| Vendor | Risk | Likelihood | Impact | Mitigation |
|--------|------|-----------|--------|------------|
| A | Vendor acquisition | Low | High | Contractual exit clause |
| B | Poor integration | Medium | Medium | POC before commit |

### Step 6 — Recommendation Memo

Write a concise memo:
1. **Recommendation:** Vendor A
2. **Rationale:** Highest weighted score, best integration, acceptable TCO
3. **Trade-offs accepted:** Higher price than C, less feature-rich than B
4. **Next steps:** Negotiate contract, run POC, plan migration

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Vendors to evaluate | Yes | List of options |
| Requirements | Yes | Functional and non-functional |
| Budget | Recommended | Annual or 3-year |
| Evaluation team | Recommended | Who scores and decides |

## Output

```markdown
## Vendor Evaluation — [Category]

### Recommendation: Vendor A (Score: 415/500)

### Weighted Comparison
[Scoring matrix table]

### TCO (3-Year)
[Cost breakdown table]

### Risk Assessment
[Risk table per vendor]

### Negotiation Points
- Request 15% volume discount based on 3-year commitment
- Include SLA with penalties for >99.9% uptime
- Require data portability clause
```

## Definition of Done

- [ ] Requirements categorized with priorities
- [ ] Weights assigned and justified
- [ ] All vendors scored consistently
- [ ] TCO calculated over 3+ years
- [ ] Risks identified with mitigations
- [ ] Clear recommendation with rationale
