# Common Mistakes - SQL Query Builder

## 1. Wrong grain

**What goes wrong:** A query joins order lines and orders, then sums order totals repeatedly.

**Fix:** Identify the output grain and aggregate at the correct level before joining or summing.

## 2. Date range off by one

**What goes wrong:** The query includes partial current-month data when the user asked for complete months.

**Fix:** Use explicit lower and upper bounds and document whether the current period is included.

## 3. Dialect mismatch

**What goes wrong:** BigQuery syntax is mixed into PostgreSQL or Snowflake.

**Fix:** Ask for dialect or state the assumed dialect before writing.

## 4. Silent null problems

**What goes wrong:** Division by zero or null category values distort output.

**Fix:** Use `NULLIF`, `COALESCE`, and explicit null handling when needed.
