# Good Output Example — Data Quality Auditor

> This example demonstrates what well-executed data quality auditor output looks like.

## Scenario

Auditing a customer orders dataset (145K rows) for a new analytics dashboard

## Why It Works

1. Profile: '23 columns, 145K rows. 3.2% overall null rate. Date range: Jan-Dec 2024.'
2. Scores: 'Completeness: 4/5 (email 12% null). Accuracy: 3/5 (3% price mismatches).'
3. Issue: '#1 | Accuracy | price | 3% don't match catalog | High | 4,350 rows | row 1234: $0.00'
4. Fix: 'Backfill prices from catalog master. Add validation rule on ingest. Owner: Data Eng, Sprint 4.'

## Key Patterns to Replicate

- Profiling data shown before assessment — sets context
- Each issue has severity + root cause + fix + owner + deadline
- Monitoring rules defined for ongoing prevention
