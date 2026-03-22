# Good Output Example — Process Mapper

> This example demonstrates what well-executed process mapper output looks like.

## Scenario

Mapping the customer refund process for a SaaS company

## Why It Works

1. Start: 'Customer submits refund request via support ticket'
2. Decision: 'Within 30-day policy? → Yes: auto-approve if <$100 → No: escalate to Finance'
3. Swim lanes: 'Customer | Support Agent | Finance | Payment System'
4. Metrics: 'Avg time: 2.3 days. SLA: 5 business days. Current compliance: 94%.'

## Key Patterns to Replicate

- Process starts with a trigger event, not a vague beginning
- Decision points are yes/no, not multi-branch ambiguity
- Current metrics attached to identify improvement opportunities
