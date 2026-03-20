---
name: codexkit-pmbok8-earned-value
description: Calculate and interpret Earned Value Management (EVM) metrics per PMBOK 8 Measurement Performance Domain. Compute SPI, CPI, EAC, ETC, TCPI, and generate variance narratives with corrective action recommendations. Use during project execution to assess schedule and cost performance.
---

# Earned Value Management Analyst

## When to Use

- During project execution when tracking schedule and cost performance
- At monthly or sprint-end status reporting cycles
- When stakeholders need objective performance data beyond percentage-complete guesses
- When forecasting final project cost (EAC) using multiple methods

## Procedure

### Step 1 — Collect Baseline Data

1. Confirm Budget at Completion (BAC)
2. Record Planned Value (PV) at the reporting date
3. Record Earned Value (EV) — value of work actually completed
4. Record Actual Cost (AC) — money spent to date

### Step 2 — Calculate Core Metrics

| Metric | Formula | Interpretation |
|--------|---------|----------------|
| **SV** | EV − PV | < 0 = behind schedule |
| **CV** | EV − AC | < 0 = over budget |
| **SPI** | EV / PV | < 1.0 = behind schedule |
| **CPI** | EV / AC | < 1.0 = over budget |

### Step 3 — Forecast Completion

| Method | Formula | When to Use |
|--------|---------|-------------|
| **EAC (typical)** | BAC / CPI | Current CPI trend continues |
| **EAC (atypical)** | AC + (BAC − EV) | Variance was one-time |
| **EAC (SPI×CPI)** | AC + (BAC − EV) / (CPI × SPI) | Both schedule and cost pressure |
| **ETC** | EAC − AC | Remaining spend |
| **TCPI (BAC)** | (BAC − EV) / (BAC − AC) | Efficiency needed to hit BAC |
| **TCPI (EAC)** | (BAC − EV) / (EAC − AC) | Efficiency needed to hit new EAC |
| **VAC** | BAC − EAC | Forecast variance at completion |

### Step 4 — Generate Narrative

1. Summarize performance in plain language (ahead/behind, over/under)
2. Apply traffic-light rating: SPI/CPI ≥ 0.95 = 🟢, 0.8–0.94 = 🟡, < 0.8 = 🔴
3. Recommend corrective actions for any metric in 🟡 or 🔴 zone
4. Note trends by comparing with previous period metrics

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| BAC (total budget) | Yes | Currency amount |
| PV (planned value to date) | Yes | Currency amount |
| EV (earned value to date) | Yes | Currency amount |
| AC (actual cost to date) | Yes | Currency amount |
| Prior period SPI/CPI | Recommended | Decimal (for trend) |

## Output

```markdown
## EVM Status Report — [Project Name] — Period [X]

### Performance Summary

| Metric | Value | Status |
|--------|-------|--------|
| BAC | $500,000 | — |
| PV | $200,000 | — |
| EV | $180,000 | — |
| AC | $210,000 | — |
| SV | -$20,000 | 🟡 Behind schedule |
| CV | -$30,000 | 🔴 Over budget |
| SPI | 0.90 | 🟡 |
| CPI | 0.86 | 🔴 |

### Forecast

| Method | EAC | VAC |
|--------|-----|-----|
| Typical (CPI trend) | $581,395 | -$81,395 |
| Atypical (one-time) | $530,000 | -$30,000 |
| SPI×CPI compound | $612,745 | -$112,745 |

### TCPI
- To hit BAC: **1.10** (achievable with corrective action)
- To hit EAC: **0.86** (current pace)

### Corrective Actions
1. CPI 🔴: Review scope for non-essential deliverables to reduce remaining cost
2. SPI 🟡: Fast-track critical path activities in next 2 sprints
3. Escalate to sponsor if CPI does not improve to 0.95 by Period X+2
```

## Definition of Done

- [ ] All 7 EVM metrics calculated correctly
- [ ] At least 2 EAC methods presented
- [ ] Traffic-light status applied to SPI and CPI
- [ ] Corrective actions provided for any metric in 🟡 or 🔴
- [ ] Narrative is in plain language (not just formulas)

## Examples

### Prompt

```text
My project has BAC = $500,000. As of end of Month 4:
PV = $200,000, EV = $180,000, AC = $210,000.
Last month SPI was 0.93, CPI was 0.89.
Generate a full EVM report with forecasts and corrective actions.
```
