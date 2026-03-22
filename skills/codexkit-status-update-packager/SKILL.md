---
name: codexkit-status-update-packager
description: Convert scattered progress notes, RAID changes, and milestone movement into a clean weekly or biweekly status update. Use when the work is routine status packaging or steering prep. Do not use for project governance design, root cause analysis, or deep portfolio risk assessment.
version: 1.0.0
category: automation
---

# Status Update Packager

## Purpose

Produce a readable status update from fragmented project information.

## When to use

- many contributors send updates in different formats
- a steering or management status pack must be prepared quickly
- the team repeats the same manual status rewrite every week

## When not to use

- the project still lacks basic governance or ownership
- the user needs a new project plan, not a status package

## Inputs

- source updates, notes, or issue list
- milestones or commitments
- current risks, blockers, and asks
- desired format if it exists

## Procedure

1. Separate progress from narrative filler.
2. Pull out changed milestones, RAID items, and decisions needed.
3. Convert raw notes into concise status language.
4. Highlight only the material movement since the last check-in.
5. End with next steps and executive attention items.

## Output

- status summary
- changed risks or blockers
- decisions or support needed
- next-step commitments

## Definition of done

- a sponsor can read it quickly
- the update emphasizes movement and risk, not activity volume
- every escalation or ask is explicit

## Examples

- "Turn these team updates into a one-page weekly status report."
- "Package this RAID list and milestone movement for steering review."

## Quality Criteria

- [ ] Trigger conditions and input requirements are unambiguous
- [ ] Each automated step produces a verifiable output
- [ ] Error handling and fallback paths are defined
- [ ] Manual override points are documented

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the workflow produce the expected output for the defined inputs? |
| **Completeness** | Are all trigger conditions, edge cases, and error paths handled? |
| **Context-fit** | Is the automation appropriate for the frequency and criticality of this task? |
| **Consequence** | If this ran unattended and failed silently, what would the downstream impact be? |

## Edge Cases

- **Input format varies unexpectedly** — Add a normalization step at entry. Alert the operator on format mismatches.
- **Downstream system is unavailable** — Queue the output and retry with exponential backoff. Alert after N failures.
- **Partial execution completes** — Ensure idempotency — re-running from the start produces the same result without duplication.

## Changelog

- v1.0.0 — Initial release
