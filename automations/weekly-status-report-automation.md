# Weekly Status Report Automation

## Purpose

Generate a weekly project or team status report from task updates, meeting notes, milestone changes, and risk logs.

## Cadence

Weekly, usually Thursday afternoon or Friday morning before stakeholder reporting.

## Inputs

- Task tracker updates.
- Meeting notes or action logs.
- RAID log or risk notes.
- Milestone plan.
- Stakeholder audience and desired format.

## Procedure

1. Gather completed work, planned work, missed work, and new risks.
2. Compare current status against milestones and commitments.
3. Classify overall status as Green, Yellow, or Red with rationale.
4. Draft the report using `templates/weekly-status-report.md`.
5. Flag decisions needed and missing data before sending.

## Output

```markdown
## Weekly Status - [Project / Team] - [Week]

### Overall Status
Green / Yellow / Red - [Rationale]

### Progress
[Summary]

### Next Week
[Summary]

### Risks / Blockers
[Table]

### Decisions Needed
[Table]
```

## Guardrails

- Do not hide red or yellow status to make the report look cleaner.
- Mark stale or missing task updates.
- Do not include confidential financial, HR, or customer data unless the audience is authorized.
- Keep source links or references available for review.

## Escalation Rules

- Escalate Red status immediately instead of waiting for the weekly report.
- Escalate blockers with no owner.
- Escalate missing decision makers when a deadline is within five business days.
