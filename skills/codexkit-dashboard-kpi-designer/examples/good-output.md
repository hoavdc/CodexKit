# Good Output Example — Dashboard KPI Designer

> This example demonstrates what well-executed dashboard kpi designer output looks like.

## Scenario

Executive dashboard for a marketplace startup

## Why It Works

1. KPI hierarchy: 'North star: GMV. Supporting: Take rate, Active sellers, Order frequency'
2. Each KPI: 'GMV = sum(order_total) | Source: orders table | Daily refresh | Owner: Data team'
3. Alerts: 'GMV <$50K/day → Slack #exec-alerts. Seller churn >5%/month → email COO.'
4. Layout: '4 big numbers top (GMV, orders, sellers, buyers) → trend charts below → drill-down tabs'

## Key Patterns to Replicate

- North star metric is prominent. Supporting metrics explain the 'why'
- Alert thresholds are calibrated from historical data, not arbitrary
- Dashboard answers: 'Are we winning? Where? What needs attention?'
