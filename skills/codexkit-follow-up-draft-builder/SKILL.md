---
name: codexkit-follow-up-draft-builder
description: Draft concise follow-up messages, nudges, reminders, and recap emails from open decisions, stale requests, or recent meetings. Use when the work is repetitive business writing with known context. Do not use for sensitive legal language, high-stakes negotiation, or board-level communication without review.
version: 1.0.0
category: automation
---

# Follow-Up Draft Builder

## Purpose

Write short operational follow-ups that move work forward without overthinking.

## When to use

- someone needs a reminder, nudge, or recap
- open decisions need a clean ask and due date
- the task is routine communication, not persuasion strategy

## When not to use

- the message carries legal, HR, or regulatory risk
- tone calibration matters more than speed

## Inputs

- source context or prior thread summary
- target audience
- goal of the message
- preferred tone if known

## Procedure

1. Identify the ask, owner, and desired timing.
2. Strip background detail down to only what the receiver needs.
3. Draft the message with a clear subject or opening line.
4. End with one explicit next step.
5. Provide a shorter variant if the user likely needs chat or Slack format.

## Output

- follow-up message draft
- optional short-form version

## Definition of done

- the request is clear in one read
- the recipient knows what action is needed
- the draft is brief enough to send with minor edits

## Examples

- "Write a reminder to finance for the missing close evidence."
- "Draft a polite follow-up to the vendor on the contract intake questions."

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
