# Ops Weekly Control Tower

> **How to use:** Fill in weekly before the operations review meeting. Pair with `codexkit-ops-kpi-packager` skill to auto-generate from dashboards or spreadsheets. Use `codexkit-dmaic-improvement-charter` when exceptions reveal systemic issues.

## Review Scope

<!-- e.g. Manufacturing Operations — Week 12 (Mar 18–22, 2026) -->

## KPI Snapshot

<!-- Key operational metrics. Color-code trend: ↗ improving, → flat, ↘ declining. -->

| Metric | Current | Target | Trend | Status |
|--------|---------|--------|-------|--------|
| | | | ↗ / → / ↘ | 🟢 On target / 🟡 Watch / 🔴 Exception |

## Exceptions

<!-- Items that breached threshold or need immediate attention. -->

| # | Exception | Impact | Owner | Root Cause (if known) | Next Action |
|---|-----------|--------|-------|----------------------|-------------|
| 1 | | | | | |

## Recovery Work

<!-- Corrective actions for exceptions or previous breaches. -->

| # | Work Item | Owner | Due Date | Status |
|---|-----------|-------|----------|--------|
| 1 | | | | ⬜ / 🔄 / ✅ |

## Capacity Or Supply Risks

<!-- Forward-looking: what could hit us in the next 2–4 weeks? -->

| Risk | Horizon | Probability | Impact | Mitigation |
|------|---------|-------------|--------|------------|
| | 1–2 wk / 3–4 wk | High / Medium / Low | | |

## Decisions Needed

<!-- What does the ops review team need to decide this week? -->

| # | Decision | Deadline | Recommended Action |
|---|----------|----------|--------------------|
| 1 | | | |

---

<details>
<summary>📋 Worked Example</summary>

## Review Scope
Fulfillment Operations — Week 12 (Mar 18–22, 2026)

## KPI Snapshot
| Metric | Current | Target | Trend | Status |
|--------|---------|--------|-------|--------|
| Order fill rate | 94% | 98% | ↘ | 🔴 Exception |
| Average ship time | 1.8 days | 2.0 days | → | 🟢 On target |
| Return rate | 2.1% | <3% | → | 🟢 On target |
| Warehouse utilization | 91% | <85% | ↗ | 🟡 Watch |

## Exceptions
| # | Exception | Impact | Owner | Root Cause | Next Action |
|---|-----------|--------|-------|------------|-------------|
| 1 | Fill rate dropped to 94% | ~150 unfulfilled orders | Warehouse Lead | SKU-4420 stockout — supplier delay | Emergency reorder placed, ETA Mar 25 |
| 2 | Warehouse at 91% capacity | Risk of receiving delays | Ops Manager | Seasonal inventory buildup | Evaluate overflow warehouse by Fri |

## Recovery Work
| # | Work Item | Owner | Due Date | Status |
|---|-----------|-------|----------|--------|
| 1 | Emergency SKU-4420 reorder | Procurement | Mar 25 | 🔄 In progress |
| 2 | Clear aged inventory (>90 days) | Warehouse Lead | Mar 29 | ⬜ Not started |

## Capacity Or Supply Risks
| Risk | Horizon | Probability | Impact | Mitigation |
|------|---------|-------------|--------|------------|
| Supplier B lead time increase (4 wk → 6 wk) | 3–4 wk | Medium | 10 SKUs affected | Pre-order 2 weeks of safety stock |

## Decisions Needed
| # | Decision | Deadline | Recommended Action |
|---|----------|----------|--------------------|
| 1 | Approve overflow warehouse lease ($5K/mo) | Mar 22 | Recommend: yes, 3-month term |

</details>
