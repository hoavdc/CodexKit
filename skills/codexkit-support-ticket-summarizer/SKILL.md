---
name: codexkit-support-ticket-summarizer
description: Summarize support tickets, chats, and customer threads into issue, impact, status, owner, and next response. Use for customer service handoffs, escalation triage, and support backlog review.
version: 1.0.0
category: review
---

# Support Ticket Summarizer

## When to Use

- Condensing long customer support threads into a case summary.
- Preparing a handoff between support agents, engineering, success, or account teams.
- Reviewing a backlog of tickets for escalation patterns.
- Drafting a customer-safe response after understanding the issue.

## Procedure

### Step 1 - Identify The Customer Problem

Extract the customer's stated issue, affected product or service, timeline, and expected outcome.

### Step 2 - Determine Impact And Urgency

Classify impact:
- blocker: customer cannot use a critical workflow
- degraded: workflow works with workaround or delay
- question: clarification, how-to, billing, or admin request
- feedback: product suggestion or sentiment

### Step 3 - Summarize Evidence

Preserve important technical details, order IDs, screenshots mentioned, error messages, account tier, and prior troubleshooting.

### Step 4 - Recommend Next Step

Suggest the next action for support, engineering, customer success, or billing. Do not promise resolution time unless provided.

### Step 5 - Draft Response

Write a customer-facing response when requested. Keep it empathetic, specific, and honest about unknowns.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Ticket or chat text | Yes | Thread, transcript, notes |
| Customer context | Recommended | Plan, segment, account owner |
| Current status | Optional | New, waiting, escalated, resolved |
| Internal constraints | Optional | SLA, support policy, escalation path |

## Output

```markdown
## Ticket Summary - [Ticket ID / Customer]

### Customer Issue
[Plain-language issue]

### Impact And Priority
[Impact level, urgency, rationale]

### Evidence
- [Relevant facts, error messages, dates]

### Work Done So Far
- [Troubleshooting steps]

### Recommended Next Step
| Owner | Action | Deadline / SLA | Notes |
|-------|--------|----------------|-------|

### Customer Response Draft
[Optional response]
```

## Quality Criteria

- [ ] The issue summary is understandable without reading the full thread.
- [ ] Impact is grounded in customer consequences, not internal guesswork.
- [ ] Important IDs, error messages, dates, and commitments are preserved.
- [ ] The recommended next step has an owner or escalation path.
- [ ] Customer-facing language avoids blame and unsupported promises.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the summary match what the customer actually said and what support already tried? |
| **Completeness** | Are issue, impact, evidence, status, owner, and next step all present? |
| **Context-fit** | Does priority reflect SLA, customer tier, and operational impact? |
| **Consequence** | Could this summary cause the next agent to miss a contractual or customer commitment? |

## Edge Cases

- **Angry or escalated customer** - Separate facts from emotion and recommend a manager or customer success touchpoint.
- **Multiple issues in one ticket** - Split into separate issue rows and identify which one is blocking.
- **Missing reproduction details** - Ask for exact steps, environment, screenshots, timestamps, or affected account IDs.
- **Potential security/privacy issue** - Stop and flag for the appropriate incident or privacy process.

## Examples

> **Prompt:** "Summarize this Zendesk ticket for escalation to engineering. Include issue, impact, evidence, and a customer response draft."

> **Bad pattern:** "Customer is upset and app is broken."
> **Good pattern:** "Customer cannot export invoices for account ACME-142 since May 12. Error: 403 on export endpoint. Support reproduced on admin role."

## Definition of Done

- [ ] A new agent can take over the ticket without rereading the full thread.
- [ ] Escalation criteria are clear.
- [ ] Customer-facing draft is accurate and safe to review.

## Changelog

- v1.0.0 - Initial release
