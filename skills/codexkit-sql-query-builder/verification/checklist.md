# 4C Verification Checklist - SQL Query Builder

Use this checklist before treating a generated query as ready to run.

## Correctness - Is it right?

- [ ] Table and column names match the provided schema.
- [ ] Join keys, join types, and grain are explicitly correct.
- [ ] Filters and date ranges match the business question.
- [ ] Aggregations, window functions, and denominators are mathematically sound.
- [ ] The query matches the stated SQL dialect.

## Completeness - Is it done?

- [ ] Expected output columns are documented.
- [ ] Required filters, grouping, sorting, and limits are included.
- [ ] Null handling and divide-by-zero protection are considered.
- [ ] Performance notes or index assumptions are included for large tables.

## Context-fit - Does it match?

- [ ] Query grain matches the requested decision or report.
- [ ] The output is usable by the intended analyst or stakeholder.
- [ ] CTE names and comments explain the transformation path.
- [ ] The query avoids overengineering when a simple query is enough.

## Consequence - Is it safe to use?

- [ ] Could this query double-count revenue, users, or events?
- [ ] Could missing filters expose sensitive or irrelevant data?
- [ ] Could this query be too expensive to run in production?
- [ ] What data quality issue would most distort the result?

Final check: state the expected row grain in one sentence.
