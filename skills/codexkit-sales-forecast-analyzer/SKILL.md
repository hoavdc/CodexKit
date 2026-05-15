---
name: codexkit-sales-forecast-analyzer
description: Analyze sales pipeline, historical revenue, conversion rates, and assumptions to produce forecast scenarios. Use for sales reviews, RevOps planning, and founder revenue forecasting.
version: 1.0.0
category: data
---

# Sales Forecast Analyzer

## When to Use

- Forecasting revenue from historical sales or active pipeline.
- Preparing weekly, monthly, or quarterly sales reviews.
- Comparing committed, best-case, and upside scenarios.
- Explaining forecast movement to founders, finance, RevOps, or sales leadership.

## Procedure

### Step 1 - Normalize Inputs

Separate actuals, pipeline, assumptions, and qualitative signals. Do not mix closed revenue with open pipeline.

### Step 2 - Segment The Pipeline

Group opportunities by stage, close date, owner, segment, product, and confidence where available.

### Step 3 - Apply Forecast Logic

Choose the simplest defensible method:
- historical trend for stable recurring sales
- stage-weighted pipeline for active opportunities
- rep commit for manager-reviewed forecast
- scenario range when inputs are uncertain

### Step 4 - Explain Drivers

Identify the movement drivers:
- new pipeline
- slipped deals
- closed-won / closed-lost
- expansion / contraction
- conversion rate change
- average deal size change

### Step 5 - Produce Scenarios

Provide Base, Upside, and Downside scenarios with assumptions and confidence. Flag data quality gaps.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Historical sales | Recommended | Period, revenue, bookings, units |
| Pipeline | Recommended | Deal, amount, stage, probability, close date |
| Sales cycle assumptions | Optional | Win rate, stage duration, seasonality |
| Forecast horizon | Yes | Month, quarter, year |
| Business context | Optional | Promotions, market changes, hiring, capacity |

## Output

```markdown
## Sales Forecast - [Period]

### Executive Summary
[Forecast number, confidence, main movement drivers]

### Scenario Forecast
| Scenario | Forecast | Assumptions | Confidence |
|----------|----------|-------------|------------|

### Pipeline Movement
| Driver | Impact | Notes |
|--------|--------|-------|

### Risks And Watch Items
- [Risk] - [mitigation]

### Data Quality Notes
- [Missing fields, stale opportunities, probability caveats]
```

## Quality Criteria

- [ ] Forecast method is stated and fits the available data.
- [ ] Actuals, pipeline, and assumptions are clearly separated.
- [ ] Scenario assumptions are visible and testable.
- [ ] Data quality gaps are not hidden.
- [ ] Recommendations are operational, not just numerical.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are formulas, stage weights, win rates, dates, and totals calculated consistently? |
| **Completeness** | Are actuals, open pipeline, assumptions, scenarios, and risks all covered? |
| **Context-fit** | Does the method match the sales motion, cycle length, and data maturity? |
| **Consequence** | What decision could be distorted if this forecast is overconfident? |

## Edge Cases

- **Sparse history** - Use scenario ranges and clearly mark confidence as low.
- **Stale pipeline** - Flag opportunities with old next steps or close dates before including them.
- **Enterprise deal concentration** - Show forecast with and without the largest deals.
- **Seasonal business** - Avoid straight-line forecasts unless seasonality is explicitly addressed.

## Examples

> **Prompt:** "Use this opportunity export to forecast Q3 bookings. Show commit, base, and upside scenarios and explain slipped-deal risk."

> **Good pattern:** "Base forecast is $1.2M because 64% of weighted pipeline is in late-stage deals with close dates before quarter end. Confidence is medium because 3 of 8 largest deals have stale next steps."

## Definition of Done

- [ ] Forecast number and range are defensible from inputs.
- [ ] Assumptions are explicit.
- [ ] Risks and confidence are visible.
- [ ] A sales leader can act on next steps.

## Changelog

- v1.0.0 - Initial release
