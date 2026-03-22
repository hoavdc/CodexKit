# Good Output Example — Root Cause Analyzer

> This example demonstrates what well-executed root cause analyzer output looks like.

## Scenario

Analyzing why a production deployment caused a 2-hour outage

## Why It Works

1. Problem: 'Deployment v3.2.1 caused API errors for 2 hours on March 15, affecting 8,400 users.'
2. 5 Whys: 'API errored → config mismatch → config not validated in CI → no config schema defined → never prioritized'
3. Root cause: 'No schema validation for configuration changes in the deployment pipeline'
4. Fix: 'Corrective: rollback config. Preventive: add JSON schema validation to CI pipeline (Sprint 12).'

## Key Patterns to Replicate

- Problem statement is specific and quantified — not 'things broke'
- 5 Whys reaches a process/system issue — not 'John forgot to check'
- Preventive action addresses the root cause, not just the symptom
