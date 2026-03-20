---
name: codexkit-competitor-intelligence
description: Build competitive intelligence briefs following the CI cycle — Plan, Collect, Analyze, Disseminate. Profile competitors, create feature comparison matrices, analyze pricing, build positioning maps, and identify win/loss patterns. Use when preparing for product launches, sales enablement, or strategic reviews.
---

# Competitive Intelligence Analyst

## When to Use

- When launching a new product and need to understand competitive landscape
- When sales teams need competitive battle cards
- During quarterly strategic reviews
- When a new competitor enters the market

## Procedure

### Step 1 — Define Intelligence Requirements

1. Which competitors to profile? (direct, indirect, emerging)
2. Which dimensions to analyze? (product, pricing, positioning, market share, funding)
3. What decisions will this intelligence inform?
4. Audience: sales, product, executive, board?

### Step 2 — Competitor Profiles

For each competitor, build a profile:
- Company overview (size, funding, geography)
- Product/service offering
- Target customer and ICP
- Pricing model and known price points
- Go-to-market strategy
- Key strengths and weaknesses
- Recent moves (launches, hires, partnerships, funding)

### Step 3 — Comparison Matrix

| Feature | Us | Competitor A | Competitor B | Competitor C |
|---------|-----|-------------|-------------|-------------|
| Feature 1 | ✅ | ✅ | ❌ | ✅ |
| Feature 2 | ✅ | ❌ | ✅ | ❌ |
| Pricing | $$$ | $$ | $$$$ | $ |

### Step 4 — Positioning Map

Plot competitors on a 2×2 perceptual map using two key dimensions:
- X-axis: e.g., Price (Low → High)
- Y-axis: e.g., Capability (Basic → Enterprise)

### Step 5 — Win/Loss Analysis

| Scenario | We Won | We Lost | Pattern |
|----------|--------|---------|---------|
| vs Competitor A | 60% | 40% | We win on features, lose on price |
| vs Competitor B | 45% | 55% | They win on brand, we win on support |

### Step 6 — Counter-Strategies

For each competitor, define:
- How to position against them
- Key talking points for sales
- Features/capabilities to highlight
- Objection handling for their strengths

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Competitor list | Yes | Names and categories |
| Dimensions to track | Yes | List of comparison areas |
| Internal product data | Yes | Features, pricing, positioning |
| Win/loss data | Recommended | Deal outcomes by competitor |

## Output

```markdown
## Competitive Intelligence Brief — [Market] — [Period]

### Competitor Profiles
[Summary per competitor]

### Feature Comparison Matrix
[Table with feature-by-feature comparison]

### Positioning Map

          Enterprise │         Competitor B
                     │    ★ US
                     │
          ───────────┼────────────────────
                     │    Competitor C
          Basic      │ Competitor A
                     └──Low Price──High Price──

### Win/Loss Summary
[Table with win rates and patterns]

### Battle Cards
[Per-competitor: positioning, talking points, counter-strategies]

### Early Warning Signals
1. Competitor A raised Series C — expect aggressive expansion
2. Competitor B hired ex-Google VP Product — product pivot likely
```

## Definition of Done

- [ ] All identified competitors profiled
- [ ] Feature comparison matrix complete
- [ ] Positioning map with clear dimensions
- [ ] Win/loss patterns analyzed (if data available)
- [ ] Counter-strategies defined per competitor
- [ ] Early warning signals identified

## Examples

### Prompt

```text
Build a competitive intelligence brief for our project management SaaS.
Direct competitors: Monday.com, Asana, ClickUp.
Indirect: Notion, Linear.
Compare on: features, pricing, target market, integrations.
Include battle cards for sales team.
```
