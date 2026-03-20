---
name: codexkit-sql-query-builder
description: Build production-ready analytical SQL queries using CTEs, window functions, aggregations, and data transformations. Translates business questions into well-documented, performant queries. Use when writing reporting queries, building data pipelines, or answering ad-hoc business questions with SQL.
---

# SQL Query Builder

## When to Use

- When a business question needs to be answered with data
- When building reporting queries or data pipeline transformations
- When optimizing slow queries or refactoring complex SQL
- When translating stakeholder requirements into analytical SQL

## Procedure

### Step 1 — Clarify the Question

Translate the business question into a precise data question:
- **Business:** "How are our sales trending?"
- **Data:** "Monthly revenue by product category for the last 12 months, with month-over-month growth rate"

Document:
- Expected output columns and format
- Filters and date ranges
- Granularity (daily, weekly, monthly)
- Sort order

### Step 2 — Identify Tables & Joins

Map the data model:

| Table | Role | Key Columns | Join |
|-------|------|-------------|------|
| orders | Fact | order_id, customer_id, order_date, total | Primary |
| products | Dimension | product_id, category, name | orders.product_id = products.id |
| customers | Dimension | customer_id, region, segment | orders.customer_id = customers.id |

Join type selection:
- **INNER** when both sides must exist
- **LEFT** when the left side may have no match (preserve all orders even without customer data)
- **Never** use RIGHT JOIN — rewrite as LEFT JOIN for clarity

### Step 3 — Build CTE Pipeline

Structure complex queries as a pipeline of CTEs:

```sql
WITH
-- Step 1: Filter and clean base data
base AS (
    SELECT ...
    FROM orders
    WHERE order_date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '12 months')
),

-- Step 2: Aggregate to desired granularity
monthly AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        category,
        SUM(total) AS revenue,
        COUNT(DISTINCT customer_id) AS unique_customers
    FROM base
    JOIN products USING (product_id)
    GROUP BY 1, 2
),

-- Step 3: Add calculations (window functions)
with_growth AS (
    SELECT *,
        LAG(revenue) OVER (PARTITION BY category ORDER BY month) AS prev_revenue,
        ROUND(100.0 * (revenue - LAG(revenue) OVER (PARTITION BY category ORDER BY month))
              / NULLIF(LAG(revenue) OVER (PARTITION BY category ORDER BY month), 0), 1) AS mom_growth_pct
    FROM monthly
)

-- Final output
SELECT month, category, revenue, unique_customers, mom_growth_pct
FROM with_growth
ORDER BY category, month;
```

### Step 4 — Common Patterns Reference

| Pattern | When to Use | SQL |
|---------|------------|-----|
| Running total | Cumulative metrics | `SUM(x) OVER (ORDER BY date ROWS UNBOUNDED PRECEDING)` |
| Rank within group | Top N per category | `ROW_NUMBER() OVER (PARTITION BY cat ORDER BY val DESC)` |
| Period comparison | YoY, MoM | `LAG(val, 12) OVER (ORDER BY month)` |
| Deduplication | Remove exact dupes | `ROW_NUMBER() OVER (PARTITION BY key ORDER BY updated DESC)` |
| Cohort analysis | Retention / engagement | First-action date as cohort, then activity by period |
| Pivot | Rows to columns | `CASE WHEN` + `SUM` or database-specific `PIVOT` |

### Step 5 — Performance Notes

Add comments for production queries:
- Estimated row counts at each CTE stage
- Index usage hints
- Known limitations or edge cases
- Data freshness assumptions

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Business question | Yes | Plain language |
| Table schema | Yes | Table names, columns, types |
| Database dialect | Recommended | PostgreSQL / MySQL / BigQuery / Snowflake |
| Sample data | Recommended | To validate output |
| Performance requirements | Optional | Max execution time |

## Output

```markdown
## Query — [Business Question]

### Question
"What is the monthly revenue by category for the last 12 months with growth rates?"

### Query
[SQL with CTEs, comments, and formatting]

### Output Schema

| Column | Type | Description |
|--------|------|-------------|
| month | DATE | First day of month |
| category | VARCHAR | Product category |
| revenue | DECIMAL | Total revenue |
| unique_customers | INT | Distinct customers |
| mom_growth_pct | DECIMAL | Month-over-month growth % |

### Performance Notes
- Base table ~2M rows, filtered to ~200K
- Index on orders(order_date) recommended
- Runs in ~3s on PostgreSQL 15
```

## Definition of Done

- [ ] Business question clearly translated to data question
- [ ] Tables and joins documented
- [ ] Query uses CTE pipeline (no nested subqueries)
- [ ] Window functions used where appropriate
- [ ] Output columns described
- [ ] Performance notes included
