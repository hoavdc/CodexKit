---
name: codexkit-content-calendar-assembler
description: Turn launch dates, campaign inputs, and asset requests into a structured content calendar and workback plan. Use when the work is recurring marketing coordination and schedule packaging. Do not use for brand strategy, positioning design, or deep performance interpretation.
version: 1.0.0
category: automation
---

# Content Calendar Assembler

## Purpose

Build a reliable publishing and asset schedule from scattered campaign inputs.

## When to use

- campaign dates change often
- marketing ops or content leads need one clean calendar
- asset dependencies are getting lost across channels

## When not to use

- the user needs positioning or message strategy
- success depends on deep channel analysis rather than schedule coordination

## Inputs

- campaign or launch dates
- channel list
- asset requests and owners
- known dependencies and review deadlines

## Procedure

1. Normalize work into campaign, channel, asset, owner, and date.
2. Build the workback order from launch date backward.
3. Flag dependencies and missing owners.
4. Separate confirmed dates from assumptions.
5. End with a calendar summary and the most likely schedule risks.

## Output

- structured content calendar
- asset workback plan
- dependency and risk list

## Definition of done

- the launch plan is visible in one place
- owners and dates are clear enough to coordinate work
- the output is ready for a campaign manager review

## Examples

- "Turn these launch notes into a content calendar with owners and dates."
- "Build a workback plan from this campaign brief and asset list."

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
