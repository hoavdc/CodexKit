---
name: codexkit-fpa-rolling-forecast
description: Build and maintain a rolling financial forecast using a 12–18 month horizon. Lock actuals, reforecast remaining periods, extend the planning window, and generate a waterfall bridge showing prior-to-new variance. Use monthly or quarterly when the organization follows a continuous planning cadence instead of annual budgets.
---

# Rolling Forecast Builder

## When to Use

- Monthly or quarterly when updating financial projections
- When replacing static annual budgets with continuous planning
- When management needs a forward-looking 12–18 month view at all times
- When actuals deviate significantly and re-forecasting is required

## Procedure

### Step 1 — Lock Actuals

1. Import actuals for completed periods from the ERP or accounting system
2. Freeze these periods — no further edits allowed
3. Calculate YTD variance vs prior forecast for each line item

### Step 2 — Reforecast Remaining Periods

1. For each P&L line, update the driver assumptions:
   - Revenue: units × price, or pipeline × conversion rate
   - COGS: volume × unit cost, or % of revenue
   - OpEx: headcount × avg cost, or run-rate with known changes
2. Apply known one-time items (restructuring, capex, etc.)
3. Document every assumption change vs prior forecast

### Step 3 — Extend Horizon

1. Add new periods to maintain the 12–18 month rolling window
2. Use trailing actuals + seasonality patterns to seed new periods
3. Flag any new periods with lower confidence level

### Step 4 — Sensitize Scenarios

1. Apply Base / Bull / Bear assumptions to key drivers
2. Show range around the forecast (not a single number)

### Step 5 — Generate Waterfall Bridge

1. Start with Prior Forecast for the full period
2. Add variance buckets: Volume | Price/Mix | Timing | Cost | FX | One-offs
3. Arrive at New Forecast
4. Summarize the top 5 variance drivers in narrative form

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Actuals YTD | Yes | P&L by month |
| Prior forecast | Yes | P&L by month for forecast period |
| Driver assumptions updates | Yes | Line-by-line changes with rationale |
| Seasonality pattern | Recommended | Historical % distribution by month |

## Output

```markdown
## Rolling Forecast — [Period] Update

### P&L Summary (in $000s)

| Line | YTD Actual | Remaining Forecast | Full Year | vs Prior | Δ% |
|------|-----------|-------------------|-----------|---------|-----|
| Revenue | 12,400 | 19,200 | 31,600 | +1,600 | +5.3% |
| COGS | (5,200) | (8,100) | (13,300) | (400) | +3.1% |
| Gross Profit | 7,200 | 11,100 | 18,300 | +1,200 | +7.0% |
| OpEx | (4,800) | (7,600) | (12,400) | (200) | +1.6% |
| EBITDA | 2,400 | 3,500 | 5,900 | +1,000 | +20.4% |

### Waterfall Bridge (Revenue)

Prior Forecast: $30,000
  + Volume: +$800 (higher unit sales in Q3)
  + Price/Mix: +$500 (premium tier adoption)
  + Timing: +$300 (deal pulled forward)
  = New Forecast: $31,600

### Assumption Log

| Driver | Prior | New | Rationale |
|--------|-------|-----|-----------|
| Q3 unit sales | 1,200 | 1,350 | Pipeline confirmed |
| Premium mix | 15% | 18% | Q2 trend extrapolated |
| Headcount | 45 | 47 | 2 new hires approved |

### Confidence Level: HIGH (months 1–6) / MEDIUM (months 7–12) / LOW (months 13–18)
```

## Definition of Done

- [ ] Actuals locked and frozen for completed periods
- [ ] Remaining periods reforecast with updated assumptions
- [ ] Horizon extended to maintain 12–18 month window
- [ ] Waterfall bridge shows prior → new with variance buckets
- [ ] Assumption log documents every change with rationale
- [ ] Confidence level assigned by time horizon

## Examples

### Prompt

```text
We are in Month 6 of FY2026. Here are our YTD actuals: [paste P&L]
Prior forecast for the full year was: [paste prior forecast]
Key changes: Q3 pipeline is 15% stronger, we approved 2 new hires, raw material cost increased 3%.
Generate a rolling forecast update with waterfall bridge.
```
