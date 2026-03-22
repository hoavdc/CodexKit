---
name: codexkit-email-composer
description: Draft clear, professional business emails from rough notes, context, or instructions. Handles cold outreach, internal updates, client responses, and escalation drafts. Use when the work is routine email writing with known context and audience. Do not use for sensitive legal notices, formal regulatory correspondence, or board-level communication without review.
version: 1.0.0
category: automation
---

# Email Composer

## Purpose

Turn rough thoughts into polished business emails that are clear, actionable, and audience-appropriate.

## When to use

- drafting routine business emails (updates, requests, introductions)
- responding to client or partner messages
- writing internal announcements, follow-ups, or escalations
- converting meeting outputs into communication

## When not to use

- the email is a legal notice or regulatory filing
- confidential HR or disciplinary communication
- high-stakes negotiation where every word carries weight

## Inputs

- purpose of the email (what do you want the reader to do?)
- audience and relationship (internal peer, manager, external client, vendor)
- key points or context to include
- tone preference (formal, friendly, urgent, neutral)
- any constraints (word limit, template, required CC list)

## Procedure

1. Clarify the single main ask or message.
2. Match tone to audience — formal for external, direct for internal.
3. Write a subject line that previews the action needed.
4. Open with context or reference (max 2 sentences).
5. State the ask or update clearly in the body.
6. Close with one explicit next step and timeline.
7. Provide a shorter variant if the user may need chat/Slack format.

## Output

- complete email draft with subject line
- optional short-form variant (Slack/chat)

## Definition of done

- the reader knows the purpose within 10 seconds
- there is exactly one clear ask or next step
- tone matches the audience relationship
- the email is under 200 words unless complexity demands more

## Examples

- "Write an email to our vendor asking for updated pricing by Friday."
- "Draft a response to the client's feature request — we can do it in Q3 but not Q2."
- "Send an internal update to engineering about the deployment schedule change."
- "Write a polite escalation to the procurement team about the delayed PO."

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
