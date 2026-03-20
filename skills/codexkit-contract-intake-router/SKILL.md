---
name: codexkit-contract-intake-router
description: Standardize incoming legal or commercial contract requests into request type, missing information, priority, and review queue. Use when the work is intake routing and request cleanup. Do not use for clause interpretation, negotiation strategy, or legal advice on the agreement itself.
version: 1.0.0
---

# Contract Intake Router

## Purpose

Clean up contract intake so legal review starts with the right information.

## When to use

- requests arrive through email or chat with inconsistent detail
- legal ops needs a clearer intake queue
- the team wants to separate routing from legal analysis

## When not to use

- the task is clause review or negotiation advice
- the request needs legal judgment on risk allocation

## Inputs

- intake requests or copied request list
- requester, counterparty, deadline, and agreement type if available
- routing rules if known

## Procedure

1. Normalize each request into request type, urgency, and owner.
2. Flag missing counterparty, deadline, or document context.
3. Separate routine routing from likely escalation items.
4. Group requests by review lane where possible.
5. End with missing-information follow-ups and next queue actions.

## Output

- intake queue
- missing information list
- suggested routing lane
- escalation candidates

## Definition of done

- requests are easier to route than when they arrived
- missing information is explicit
- the output avoids pretending to be legal analysis

## Examples

- "Clean up this legal inbox into request type, priority, and missing info."
- "Turn these contract asks into a structured intake queue for legal ops."
