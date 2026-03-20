---
name: codexkit-survey-analyzer
description: Analyze survey and feedback data with statistical distributions, cross-tabulations, significance testing, and open-ended theme extraction. Produces executive-ready survey reports with segment comparisons and action recommendations. Use when processing NPS, CSAT, employee engagement, or market research surveys.
---

# Survey Analyzer

## When to Use

- After collecting NPS, CSAT, or employee engagement survey responses
- When analyzing market research or customer feedback data
- When leadership needs actionable insights from survey results
- When comparing satisfaction across segments (regions, teams, products)

## Procedure

### Step 1 — Data Overview

Summarize the survey:
- Total responses vs invitations sent → **response rate**
- Collection period
- Question types: Likert scale, multiple choice, ranking, open-ended
- Known biases: self-selection, non-response, recency

### Step 2 — Quantitative Analysis

For each closed-ended question:

| Question | N | Mean | Median | Std Dev | Distribution Shape |
|----------|---|------|--------|---------|-------------------|
| [Q1 text] | [n] | [mean] | [median] | [sd] | Normal / Skewed L / Skewed R / Bimodal |

Calculate key indices:
- **NPS:** % Promoters (9–10) − % Detractors (0–6)
- **CSAT:** % Satisfied (4–5 on 5-point scale)
- **Engagement:** Overall index from engagement battery

### Step 3 — Segment Comparison

Cross-tabulate by key segments:

| Segment | N | Score | vs Overall | Significant? |
|---------|---|-------|-----------|-------------|
| Region A | 120 | 72 | +4 | Yes (p<0.05) |
| Region B | 95 | 65 | −3 | No (p=0.12) |

Test significance:
- Chi-square for categorical × categorical
- t-test or ANOVA for continuous × categorical
- Flag small samples (<30) as unreliable

### Step 4 — Open-Ended Theme Extraction

For free-text responses:
1. Code responses into themes (max 8–10 themes)
2. Count frequency of each theme
3. Identify sentiment per theme (positive / neutral / negative)

| Theme | Frequency | % of Responses | Sentiment | Example Quote |
|-------|-----------|---------------|-----------|---------------|
| Onboarding speed | 45 | 18% | Negative | "Took 3 weeks to get access" |

### Step 5 — Insight Synthesis

Structure insights as:
- **What:** the finding (data-driven)
- **So What:** why it matters (impact)
- **Now What:** recommended action

### Step 6 — Action Recommendations

| Priority | Insight | Action | Owner | Timeline |
|----------|---------|--------|-------|----------|
| 1 | NPS dropped 8 pts in segment X | Investigate root cause | CX Lead | 2 weeks |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Survey responses | Yes | CSV, spreadsheet, or summary tables |
| Question list | Yes | Questions with response types |
| Segments | Recommended | How to slice the data |
| Previous results | Recommended | For trend comparison |

## Output

```markdown
## Survey Analysis — [Survey Name]

### Overview
- **Period:** Q1 2024 | **Responses:** 532 / 1,200 (44% response rate)
- **NPS:** +32 (↓4 from Q4) | **CSAT:** 78% (stable)

### Key Findings
1. **Onboarding satisfaction dropped 12 points** — driven by Region B
   - Root cause: New system rollout created delays
   - Action: Expedite training for Region B ops team

2. **Support quality is the #1 driver of promoter scores**
   - Correlation: 0.72 between support rating and NPS
   - Action: Protect support team headcount in budget cycle

### Segment Comparison
[Cross-tabulation table]

### Open-Ended Themes
[Theme frequency table with example quotes]

### Recommended Actions
[Prioritized action table with owners]
```

## Definition of Done

- [ ] Response rate calculated and bias noted
- [ ] All quantitative questions summarized with distributions
- [ ] Segment comparisons with significance testing
- [ ] Open-ended themes extracted and quantified
- [ ] What / So What / Now What insights provided
- [ ] Action recommendations prioritized with owners
