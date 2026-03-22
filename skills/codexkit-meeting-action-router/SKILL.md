---
name: codexkit-meeting-action-router
description: Turn meeting notes, transcripts, or rough bullets into decisions, action items, owners, due dates, and follow-up queues. Use when the work is repetitive meeting cleanup or recap writing. Do not use for negotiation strategy, legal advice, or executive decision framing.
version: 1.0.0
category: automation
---

# Meeting Action Router

## Purpose

Convert raw meeting material into a tight recap that people can execute.

## When to use

- a meeting ended with messy notes
- different attendees are likely to remember different outcomes
- the team needs a recap and owner list fast

## When not to use

- the user needs a strategy memo or a recommendation
- the source material is too incomplete to identify real decisions

## Inputs

- notes, transcript, or bullet summary
- attendee list if known
- target recap style if one exists

## Procedure

1. Separate confirmed decisions from discussion.
2. Extract action items with owners and dates when present.
3. Mark assumptions where owner or due date is missing.
4. Group open questions that still need a follow-up.
5. End with a short recap paragraph ready to send.

## Output

- decisions made
- actions with owners and dates
- unresolved questions
- recap paragraph or draft message

## Definition of done

- a reader can tell what happened without rereading the notes
- every real action has an owner or a gap flag
- the recap is short enough to send as-is

## Examples

- "Turn these meeting bullets into a clean recap with owners."
- "Read this transcript and give me decisions, actions, and open questions."

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
