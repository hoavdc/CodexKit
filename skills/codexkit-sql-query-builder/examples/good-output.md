# Good Output Example - SQL Query Builder

## Scenario

The user needs monthly revenue by product category for the last 12 complete months in PostgreSQL.

## Good Output

```sql
WITH base_orders AS (
    SELECT
        o.order_id,
        o.order_date,
        o.total_amount,
        p.category
    FROM orders o
    JOIN products p
        ON o.product_id = p.product_id
    WHERE o.order_date >= date_trunc('month', current_date) - interval '12 months'
      AND o.order_date < date_trunc('month', current_date)
      AND o.status = 'paid'
),
monthly_revenue AS (
    SELECT
        date_trunc('month', order_date)::date AS revenue_month,
        category,
        sum(total_amount) AS revenue
    FROM base_orders
    GROUP BY 1, 2
)
SELECT
    revenue_month,
    category,
    revenue,
    lag(revenue) OVER (PARTITION BY category ORDER BY revenue_month) AS previous_month_revenue
FROM monthly_revenue
ORDER BY revenue_month, category;
```

## Why It Works

- It states and preserves monthly grain.
- It filters to paid orders and complete months.
- It uses CTEs to make the transformation readable.
- It avoids double-counting by joining orders to products at product ID.
- It exposes prior month revenue without hiding the calculation.
