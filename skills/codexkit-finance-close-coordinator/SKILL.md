---
name: codexkit-finance-close-coordinator
description: Organize month-end or quarter-end close blockers, reconciliations, owners, and evidence gaps into a routine control pack. Use when the work is finance close coordination and issue tracking. Do not use for accounting judgment, policy interpretation, or final technical accounting conclusions.
version: 1.0.0
category: runbook
---

# Finance Close Coordinator

## Purpose

Keep close operations moving with a short, decision-ready issue view.

## When to use

- close has many open issues and no clean tracker
- controllers or FP&A need one summary of blockers and owners
- evidence or reconciliations are arriving in fragments

## When not to use

- the user needs accounting analysis under IFRS, GAAP, or tax rules
- the task is a variance story, not close coordination

## Inputs

- close issue list or status notes
- reconciliations, evidence status, or owner updates
- period and escalation timing

## Procedure

1. Normalize each open issue into owner, status, risk, and due date.
2. Separate evidence gaps from true close blockers.
3. Flag items that could miss the period close.
4. Group related issues under one line when possible.
5. End with escalation items and next owner actions.

## Output

- close blocker summary
- evidence and reconciliation gaps
- owner action list
- escalations for the period

## Definition of done

- open close issues are visible in one read
- owners and deadlines are clear
- routine reminders are separated from real escalation risk

## Examples

- "Summarize these close notes into blockers, gaps, and owners."
- "Turn this close tracker into a morning control pack."

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
