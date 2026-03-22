---
name: codexkit-hiring-ops-coordinator
description: Package interview loops, schedules, feedback follow-ups, and candidate next steps for recruiting operations. Use when the work is routine hiring coordination and recap packaging. Do not use for final hiring decisions, compensation judgment, or sensitive people-policy advice.
version: 1.0.0
category: runbook
---

# Hiring Ops Coordinator

## Purpose

Convert recruiting activity into one operating view with candidate movement and follow-ups.

## When to use

- interview feedback is stale or fragmented
- recruiters need a clean next-step queue
- hiring managers want a weekly funnel summary

## When not to use

- the user needs talent strategy or final candidate evaluation
- the content includes sensitive HR issues beyond scheduling and flow

## Inputs

- candidate stages and dates
- interview feedback status
- scheduling constraints
- next-step decisions if known

## Procedure

1. Map each candidate to stage, owner, and next step.
2. Flag missing feedback and stale stages.
3. Separate scheduling blockers from decision blockers.
4. Collapse the list into a short funnel summary plus action queue.
5. Provide a recruiter-ready follow-up block if useful.

## Output

- candidate movement summary
- stale feedback or scheduling gaps
- next actions by owner

## Definition of done

- recruiters can see where flow is blocked
- every active candidate has a current owner and next step
- the output is suitable for a weekly hiring ops check-in

## Examples

- "Summarize this hiring funnel and flag missing interviewer feedback."
- "Turn these recruiting notes into actions for recruiter and hiring manager."

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
