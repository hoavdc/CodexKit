# Good Output Example — Incident Postmortem

> This example demonstrates what well-executed incident postmortem output looks like.

## Scenario

Payment processing outage lasting 47 minutes affecting 12,000 transactions

## Why It Works

1. Timeline: '14:03 Alert fired → 14:07 Engineer paged → 14:15 Root cause identified → 14:50 Fix deployed'
2. 5 Whys: 'Connection pool exhausted ← config not updated for new capacity ← no validation in deploy pipeline ← missing checklist item'
3. Impact: '$340K in delayed transactions, 89 support tickets, 3 merchant escalations'
4. Actions: 'Prevent: add connection pool config validation to CI (owner: Platform, due: Sprint 12)'

## Key Patterns to Replicate

- Detection gap is explicit: '4 minutes between failure start and first alert'
- Every action item is SMART: specific, measurable, assigned, realistic, time-bound
- Postmortem ends with 'lessons learned' that are reusable beyond this incident
