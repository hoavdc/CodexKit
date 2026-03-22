# 4C Verification Checklist — Dashboard KPI Designer

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] KPI formulas match the business definition (e.g., 'active user' definition is consistent)
- [ ] Data sources for each metric are identified and confirmed accessible
- [ ] Aggregation levels (daily/weekly/monthly) match how the metric is used

## Completeness — Is it done?

- [ ] Dashboard covers leading indicators (predict future) AND lagging (confirm past)
- [ ] Each KPI has: name, formula, data source, refresh frequency, owner
- [ ] Alert thresholds are defined for KPIs that require action when out of range

## Context-fit — Does it match?

- [ ] Dashboard audience is identified: exec (strategic), manager (tactical), IC (operational)
- [ ] Number of KPIs is appropriate: 5-8 for exec, 10-15 for team-level
- [ ] Visualization types match the data type (trends = line chart, composition = pie/bar)

## Consequence — Is it safe to use?

- [ ] If a metric turns red, is the response clear (who does what)?
- [ ] If two KPIs conflict (growth up, margin down), how should the viewer interpret it?
- [ ] If this dashboard is the only thing reviewed in Monday meetings, is that sufficient?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
