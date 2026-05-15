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

- [ ] Subject line previews the purpose or action needed.
- [ ] Opening sentence gives enough context without overexplaining.
- [ ] The email has one clear primary ask, update, or decision point.
- [ ] Tone matches the audience relationship and business stakes.
- [ ] Next step, owner, and timing are explicit when action is needed.
- [ ] Sensitive or high-stakes content is marked for human review.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the draft preserve the user's facts, names, dates, and constraints accurately? |
| **Completeness** | Does it include subject, greeting, context, message, ask, timing, and close where needed? |
| **Context-fit** | Is the tone appropriate for the recipient relationship and stakes? |
| **Consequence** | Could the wording create an unintended commitment, escalation, or legal/HR issue? |

## Edge Cases

- **Ambiguous ask** — Ask one clarifying question or draft two variants with different asks.
- **High-stakes external message** — Draft conservatively and require human review before sending.
- **Missing recipient relationship** — Default to neutral professional tone and state the assumption.
- **Sensitive HR, legal, or regulatory topic** — Provide structure only and recommend appropriate review.

## Changelog

- v1.1.0 — Added domain-specific quality gates for office email drafting.
- v1.0.0 — Initial release
