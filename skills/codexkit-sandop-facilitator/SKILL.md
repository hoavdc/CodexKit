---
name: codexkit-sandop-facilitator
description: Facilitate monthly S&OP or integrated business planning cycles by aligning demand, supply, inventory, capacity, and executive decisions with a standard meeting rhythm and decision log. Use when operations teams need a demand review, supply review, pre-S&OP reconciliation, or executive S&OP pack. Do not use for single-SKU replenishment math only.
version: 1.0.0
category: runbook
---

# S&OP Facilitator

## Purpose

Create the structure and decision flow needed for an effective monthly S&OP cycle.

## When to use

- A business needs a repeatable monthly S&OP rhythm.
- Demand and supply views are not reconciling cleanly.
- Executives need a short pack of tradeoffs and decisions.

## When not to use

- The request is limited to one SKU reorder calculation.
- No demand, supply, inventory, or capacity context is available.

## Inputs

- demand view, forecast assumptions, and commercial changes
- supply constraints, lead times, and capacity view
- inventory health, backlog, and service-level targets
- open tradeoffs that need executive decisions

## Procedure

1. Separate the cycle into demand review, supply review, reconciliation, and executive review.
2. Normalize the numbers and assumptions across functions.
3. Surface the biggest mismatches in volume, mix, timing, capacity, and inventory.
4. Quantify tradeoffs where possible: service, cost, cash, and risk.
5. Write the few decisions executives actually need to make.
6. End with owners, dates, and decision follow-through.

## Output

- monthly S&OP cycle plan
- demand and supply tension summary
- reconciliation view with tradeoffs
- executive decision sheet
- follow-up actions and owners

## Definition of done

- The cycle has a clear meeting sequence and purpose.
- Tradeoffs are explicit across service, cost, cash, and risk.
- Decision owners and follow-through are visible.

## Examples

- "Build this month's S&OP executive pack from our demand, supply, and inventory notes."
- "Facilitate a pre-S&OP reconciliation for these conflicting forecast and capacity inputs."

## Quality Criteria

- [ ] Steps are executable in sequence without external context
- [ ] Decision points have clear if/then branching
- [ ] Rollback or abort procedures are documented for risky steps
- [ ] Expected duration or time-per-step is estimated

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do the steps execute correctly in the order specified? |
| **Completeness** | Are decision points, error handling, and escalation paths all documented? |
| **Context-fit** | Could someone with the right access but no prior context complete this runbook? |
| **Consequence** | If Step N fails and the operator skips to Step N+1, what breaks? |

## Edge Cases

- **Steps require access the operator doesn't have** — Document exact access requirements upfront. Include escalation contact for emergency access.
- **Environment differs from documented state** — Add a pre-flight check as Step 0 to verify prerequisites before starting.
- **Runbook is triggered during off-hours** — Document who to contact and which steps can be safely deferred to business hours.

## Changelog

- v1.0.0 — Initial release
