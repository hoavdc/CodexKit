---
name: codexkit-business-case-writer
description: Write structured business cases with problem framing, options analysis, financial modeling (NPV/ROI/Payback), risk assessment, and implementation roadmap. Follows HBR business case structure. Use when seeking budget approval, proposing new initiatives, or justifying investment decisions.
---

# Business Case Writer

## When to Use

- When proposing a new project or initiative that needs funding
- When leadership requires financial justification for an investment
- When comparing build vs buy vs partner options
- When preparing for a governance or investment board review

## Procedure

### Step 1 — Executive Summary

Write a 1-paragraph summary that covers:
- The problem / opportunity (1 sentence)
- The recommended solution (1 sentence)
- The expected value (1 sentence with key numbers)
- The ask (1 sentence — what you need approval for)

### Step 2 — Problem Statement

Frame the problem with data:
- What is happening today? (current state with metrics)
- What is the impact? (revenue, cost, risk, customer satisfaction)
- Why now? (trigger event, competitive pressure, window of opportunity)
- What happens if we do nothing? (cost of inaction)

### Step 3 — Options Analysis

| Criterion | Option A: Build | Option B: Buy | Option C: Do Nothing |
|-----------|----------------|---------------|---------------------|
| Time to value | 6 months | 2 months | — |
| Upfront cost | $200K | $80K | $0 |
| Annual cost | $50K | $120K/yr | $300K (cost of problem) |
| Control | Full | Limited | — |
| Risk | Medium (execution) | Low (vendor) | High (growing problem) |
| Strategic fit | High | Medium | Low |

### Step 4 — Financial Analysis

| Metric | Year 1 | Year 2 | Year 3 | Total |
|--------|--------|--------|--------|-------|
| Revenue impact | $100K | $250K | $400K | $750K |
| Cost savings | $50K | $80K | $80K | $210K |
| **Total benefit** | **$150K** | **$330K** | **$480K** | **$960K** |
| Investment | ($200K) | ($50K) | ($50K) | ($300K) |
| **Net value** | **($50K)** | **$280K** | **$430K** | **$660K** |

Summary metrics:
- **ROI:** 220% over 3 years
- **Payback period:** 14 months
- **NPV (8% discount):** $540K

### Step 5 — Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-----------|--------|------------|
| Execution delay | Medium | Medium | Phased rollout, dedicated team |
| Adoption failure | Low | High | Change management plan |
| Technology risk | Low | Medium | POC before full commit |

### Step 6 — Implementation Roadmap

| Phase | Duration | Deliverables | Investment |
|-------|----------|-------------|------------|
| Phase 1: Discovery | 4 weeks | Requirements, vendor shortlist | $20K |
| Phase 2: Build/Buy | 12 weeks | Working solution | $150K |
| Phase 3: Rollout | 4 weeks | Training, go-live | $30K |

### Step 7 — The Ask

Clearly state:
- What approval is needed (budget, headcount, executive sponsor)
- What the decision deadline is
- What happens if delayed

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Problem description | Yes | Current situation and impact |
| Proposed solution | Yes | What you want to do |
| Financial data | Yes | Costs, expected benefits |
| Alternatives | Recommended | Other options considered |
| Timeline | Recommended | When you need a decision |

## Output

```markdown
## Business Case — [Initiative Name]

### Executive Summary
Our customer support team handles 5,000 tickets/month manually, costing
$400K/year in labor. Implementing an AI-powered triage system will reduce
manual handling by 40%, saving $160K/year with a 10-month payback.
We request $120K in funding for Q2 implementation.

### Problem Statement
[Data-driven problem framing]

### Options
[Comparison matrix]

### Financial Analysis
[3-year projection with ROI, payback, NPV]

### Risk Assessment
[Risk table with mitigations]

### Implementation Roadmap
[Phased plan with milestones]

### Decision Requested
Approve $120K Q2 budget + 2 FTE allocation by March 30.
```

## Definition of Done

- [ ] Executive summary fits in one paragraph
- [ ] Problem quantified with cost of inaction
- [ ] At least 3 options compared (including do nothing)
- [ ] Financial analysis includes ROI, payback, NPV
- [ ] Risks identified with mitigations
- [ ] Clear ask with decision deadline
