---
name: codexkit-dashboard-kpi-designer
description: Design KPI dashboards with SMART metrics, visualization selection, alert thresholds, and refresh cadence. Covers leading vs lagging indicators, data dictionary, and stakeholder-specific views. Use when building operational dashboards, executive scorecards, or team performance views.
---

# Dashboard & KPI Designer

## When to Use

- When building a new operational or executive dashboard
- When KPIs exist but lack clear targets, thresholds, or visualization
- When stakeholders ask "what should we measure?"
- When consolidating scattered metrics into a single source of truth

## Procedure

### Step 1 — Objectives Alignment

Clarify what decisions the dashboard must support:
- Who is the primary audience? (executive, manager, analyst, operator)
- What decisions do they make with this data?
- What cadence? (real-time, daily, weekly, monthly)

### Step 2 — KPI Selection

For each objective, define KPIs using the SMART-KPI framework:

| KPI | Type | Target | Threshold (Green/Amber/Red) | Data Source |
|-----|------|--------|-----------------------------|------------|
| [name] | Leading / Lagging | [value] | G: ≥X / A: Y–X / R: <Y | [source] |

Rules:
- Max 7 KPIs per dashboard view
- Every lagging indicator must have ≥1 leading indicator
- Every KPI must have a named owner

### Step 3 — Visualization Selection

| Data Pattern | Recommended Chart | Avoid |
|-------------|-------------------|-------|
| Trend over time | Line chart | Pie chart |
| Part-to-whole | Stacked bar, treemap | 3D charts |
| Comparison | Bar chart, bullet chart | Radar chart (>7 axes) |
| Single value vs target | Gauge, big number + trend arrow | Table |
| Distribution | Histogram, box plot | Line chart |
| Relationship | Scatter plot | Stacked area |

### Step 4 — Layout & Hierarchy

Build the dashboard with visual hierarchy:
1. **Top row:** 3–5 big-number tiles (most critical KPIs with trend arrows)
2. **Middle:** 2–3 trend charts showing performance over time
3. **Bottom:** Detail tables or drill-down areas
4. Use consistent color: Green/Amber/Red for status, brand colors for categories

### Step 5 — Data Dictionary

For each KPI, document:
- **Definition:** exactly how it's calculated
- **Numerator / Denominator:** if it's a ratio
- **Inclusions / Exclusions:** what counts and what doesn't
- **Refresh frequency:** real-time, hourly, daily, weekly
- **Owner:** who is accountable for this metric

### Step 6 — Alert Rules

| KPI | Condition | Severity | Action |
|-----|-----------|----------|--------|
| [name] | Value < threshold for 2 consecutive periods | Warning | Notify owner via Slack/email |
| [name] | Value < critical threshold | Critical | Escalate to leadership |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Business objectives | Yes | What decisions does this dashboard support? |
| Audience | Yes | Who will view this dashboard? |
| Available data sources | Yes | List of systems/databases |
| Existing metrics | Recommended | Current KPIs if any |
| Refresh requirement | Recommended | Real-time / daily / weekly |

## Output

```markdown
## Dashboard Design — [Dashboard Name]

### Audience & Purpose
**Primary user:** Regional Sales Managers
**Decision supported:** Territory resource allocation
**Refresh:** Daily at 6 AM

### KPIs

| KPI | Type | Target | Green | Amber | Red | Owner |
|-----|------|--------|-------|-------|-----|-------|
| Monthly Revenue | Lagging | $1.2M | ≥100% | 85–99% | <85% | VP Sales |
| Pipeline Coverage | Leading | 3.0× | ≥3× | 2–3× | <2× | Sales Ops |
| Win Rate | Lagging | 28% | ≥28% | 22–27% | <22% | VP Sales |
| Activities/Rep/Week | Leading | 50 | ≥50 | 35–49 | <35 | Team Leads |

### Layout Wireframe
Row 1: [Revenue] [Pipeline] [Win Rate] [Activity Score]
Row 2: [Revenue Trend — 12 months] [Pipeline by Stage — stacked bar]
Row 3: [Rep Performance Table — sortable] [Territory Map — if applicable]

### Data Dictionary
[One entry per KPI with formula, source, refresh]

### Alert Rules
[Threshold-based notifications per KPI]
```

## Definition of Done

- [ ] Max 7 KPIs per view
- [ ] Every KPI has a target, threshold, and owner
- [ ] Leading and lagging indicators balanced
- [ ] Visualization type justified for each data pattern
- [ ] Data dictionary complete
- [ ] Alert rules defined
