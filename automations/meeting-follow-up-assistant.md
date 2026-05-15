# Meeting Follow-up Assistant

## Purpose

Turn meeting notes into a follow-up message, action list, and decision record after recurring or high-stakes meetings.

## Cadence

Event-driven after meetings, or batched daily for teams with many meetings.

## Inputs

- Meeting notes or transcript.
- Attendee list.
- Meeting objective.
- Preferred follow-up channel.
- Existing action tracker, if available.

## Procedure

1. Use `codexkit-meeting-summary-generator` to extract decisions, actions, owners, and due dates.
2. Separate confirmed decisions from proposed or unclear decisions.
3. Draft a follow-up message for attendees.
4. Create tracker-ready action rows.
5. Flag missing owners, missing dates, and unresolved questions.

## Output

```markdown
## Meeting Follow-up - [Meeting Name]

### Message Draft
[Ready-to-send recap]

### Tracker Rows
| Action | Owner | Due | Source Note |
|--------|-------|-----|-------------|

### Confirmation Needed
- [Item]
```

## Guardrails

- Do not attribute commitments that were not confirmed.
- Do not send sensitive notes automatically without review.
- Keep personal comments out of the follow-up unless they are operationally required.
- Mark AI-inferred owners or dates as suggested.

## Escalation Rules

- Escalate action items with no owner if they block a milestone.
- Escalate unresolved decisions older than one meeting cycle.
- Escalate sensitive legal, HR, finance, or customer commitments for human review.
