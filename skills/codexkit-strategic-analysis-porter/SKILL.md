---
name: codexkit-strategic-analysis-porter
description: Conduct strategic analysis using Porter's Five Forces, PESTEL, and SWOT frameworks. Assess competitive dynamics, macro environment, and internal capabilities. Synthesize into strategic implications with ranked options. Use when entering new markets, evaluating competitive position, or strategic planning.
---

# Strategic Analysis (Porter + PESTEL + SWOT)

## When to Use

- During annual strategic planning cycles
- When evaluating entry into a new market or segment
- When competitive dynamics shift significantly
- When preparing strategic recommendations for the board

## Procedure

### Step 1 — Porter's Five Forces

Rate each force (1 = Low, 5 = High):

| Force | Guiding Questions |
|-------|------------------|
| **Threat of New Entrants** | Barriers to entry? Capital requirements? Regulatory hurdles? |
| **Bargaining Power of Suppliers** | Supplier concentration? Switching costs? Unique inputs? |
| **Bargaining Power of Buyers** | Buyer concentration? Price sensitivity? Switching costs? |
| **Threat of Substitutes** | Alternative solutions? Performance ratio? Switching ease? |
| **Competitive Rivalry** | Number of competitors? Industry growth? Exit barriers? |

Overall industry attractiveness: Average of 5 forces (inverted — lower score = more attractive).

### Step 2 — PESTEL Scan

| Factor | Key Trends | Impact (H/M/L) | Timeframe |
|--------|-----------|-----------------|-----------|
| **P**olitical | Regulation, trade policy, political stability | | |
| **E**conomic | GDP growth, inflation, exchange rates, interest rates | | |
| **S**ocial | Demographics, consumer behavior, workforce trends | | |
| **T**echnological | Innovation pace, automation, digital disruption | | |
| **E**nvironmental | Sustainability pressure, resource scarcity, climate | | |
| **L**egal | Compliance requirements, IP law, labor law | | |

### Step 3 — SWOT Synthesis

Combine Five Forces (external) + PESTEL (macro) + internal assessment:

| | **Helpful** | **Harmful** |
|---|---|---|
| **Internal** | Strengths | Weaknesses |
| **External** | Opportunities | Threats |

### Step 4 — Strategic Options

Generate strategic options by crossing:
- Strengths × Opportunities → Offensive strategies
- Strengths × Threats → Defensive strategies
- Weaknesses × Opportunities → Reorientation strategies
- Weaknesses × Threats → Survival strategies

Rank options by: Feasibility × Impact × Alignment with vision.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Industry/market context | Yes | Description or brief |
| Company position | Yes | Products, market share, capabilities |
| Competitor list | Recommended | Key competitors with known strengths |

## Output

```markdown
## Strategic Analysis — [Company/Market]

### Five Forces Assessment

| Force | Rating | Rationale |
|-------|--------|-----------|
| New Entrants | 2/5 | High capital requirements, regulatory barriers |
| Supplier Power | 3/5 | Moderate concentration, some switching costs |
| Buyer Power | 4/5 | Price-sensitive market, low switching costs |
| Substitutes | 3/5 | Digital alternatives emerging |
| Rivalry | 4/5 | 5 major competitors, slow growth |
| **Industry Attractiveness** | **Moderate** (avg 3.2/5) | |

### PESTEL Summary
[Top 3–5 macro trends with impact assessment]

### SWOT Matrix
| Strengths | Weaknesses |
|-----------|------------|
| Strong brand | Limited digital capability |
| | |
| **Opportunities** | **Threats** |
| Emerging market expansion | New digital entrant |

### Strategic Options (Ranked)

| # | Strategy | Type | Feasibility | Impact | Rank |
|---|----------|------|-------------|--------|------|
| 1 | Digital transformation | Reorientation | High | High | ⭐ 1 |
| 2 | Market expansion APAC | Offensive | Medium | High | 2 |
| 3 | Cost leadership program | Defensive | High | Medium | 3 |

### Recommendation
[2–3 sentence strategic recommendation with rationale]
```

## Definition of Done

- [ ] Five Forces rated with rationale
- [ ] PESTEL scan with top trends identified
- [ ] SWOT matrix completed
- [ ] Strategic options generated from SWOT cross-analysis
- [ ] Options ranked by feasibility × impact
- [ ] Clear recommendation provided

## Examples

### Prompt

```text
Analyze the competitive landscape for our B2B SaaS company in the HR tech market.
We have 5% market share, strong product but weak sales team.
Key competitors: Workday, BambooHR, Deel.
Use Porter's Five Forces + PESTEL + SWOT and recommend strategic options.
```
