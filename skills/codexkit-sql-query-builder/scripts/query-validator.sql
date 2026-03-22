-- query-validator.sql
-- Validates common SQL anti-patterns and performance issues.
-- Run against your query before shipping to production.
--
-- Usage:  Replace {YOUR_QUERY} with your CTE/subquery to analyze.
--         Execute each section independently against your database.

-- ============================================================
-- 1. EXPLAIN ANALYZE — Check execution plan
-- ============================================================
-- Look for:
--   - Seq Scan on large tables (should be Index Scan)
--   - Nested Loop on large result sets (consider Hash Join)
--   - Sort operations without index support
--   - Row estimates vs actuals differ by >10x

EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
-- {YOUR_QUERY}
;

-- ============================================================
-- 2. NULL safety check — Identify WHERE clause null traps
-- ============================================================
-- Common trap: WHERE column != 'value' silently excludes NULLs
-- Fix: WHERE (column != 'value' OR column IS NULL)

-- Check for NULLs in your join/filter columns:
SELECT
    'orders.customer_id' AS column_name,
    COUNT(*) AS total_rows,
    COUNT(customer_id) AS non_null,
    COUNT(*) - COUNT(customer_id) AS null_count,
    ROUND(100.0 * (COUNT(*) - COUNT(customer_id)) / NULLIF(COUNT(*), 0), 2) AS null_pct
FROM orders
-- Repeat for each critical column
;

-- ============================================================
-- 3. Cardinality explosion detector
-- ============================================================
-- JOINs can multiply rows unexpectedly.
-- Compare row counts before and after each JOIN step.

-- Step 1: Base table count
SELECT 'base' AS step, COUNT(*) AS rows FROM orders;

-- Step 2: After first JOIN
SELECT 'after_join_1' AS step, COUNT(*) AS rows
FROM orders
JOIN products ON orders.product_id = products.id;

-- If rows increased, you have a many-to-many join.
-- Fix: Add DISTINCT, GROUP BY, or review join keys.

-- ============================================================
-- 4. Index coverage check
-- ============================================================
-- Verify your WHERE and JOIN columns have indexes.

SELECT
    t.relname AS table_name,
    a.attname AS column_name,
    CASE WHEN i.indexrelid IS NOT NULL THEN '✓ Indexed' ELSE '✗ No Index' END AS index_status
FROM pg_attribute a
JOIN pg_class t ON a.attrelid = t.oid
JOIN pg_namespace n ON t.relnamespace = n.oid
LEFT JOIN pg_index i ON i.indrelid = t.oid
    AND a.attnum = ANY(i.indkey)
WHERE n.nspname = 'public'
    AND t.relname IN ('orders', 'products', 'customers')  -- your tables
    AND a.attname IN ('customer_id', 'product_id', 'order_date')  -- your filter/join columns
    AND a.attnum > 0
ORDER BY t.relname, a.attname;

-- ============================================================
-- 5. Data type mismatch detector
-- ============================================================
-- Implicit casts in JOINs/WHEREs prevent index usage.
-- Example: WHERE varchar_col = 123 (implicit cast, no index)

SELECT
    c1.table_name AS left_table,
    c1.column_name AS left_column,
    c1.data_type AS left_type,
    c2.table_name AS right_table,
    c2.column_name AS right_column,
    c2.data_type AS right_type,
    CASE WHEN c1.data_type != c2.data_type THEN '⚠ TYPE MISMATCH' ELSE '✓ OK' END AS status
FROM information_schema.columns c1
JOIN information_schema.columns c2
    ON c1.column_name = c2.column_name
    AND c1.table_name != c2.table_name
WHERE c1.table_schema = 'public'
    AND c2.table_schema = 'public'
    AND c1.table_name < c2.table_name  -- avoid duplicates
ORDER BY status DESC, c1.column_name;
