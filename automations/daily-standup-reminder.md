# Daily Standup Reminder

## Purpose

Collect short daily updates, surface blockers, and produce a compact team standup summary without adding a meeting when async is enough.

## Cadence

Weekdays, usually 30-60 minutes before the team's daily standup or async cutoff.

## Inputs

- Team roster and timezone.
- Current sprint, project, or priority list.
- Update questions.
- Team channel or destination.

## Procedure

1. Send each team member the same three prompts:
   - What moved forward since the last update?
   - What are you doing next?
   - What is blocked or needs attention?
2. Wait until the cutoff time.
3. Summarize responses by person and by blocker.
4. Highlight cross-team dependencies and missing responses.
5. Send a concise summary to the team lead or channel.

## Output

```markdown
## Daily Standup Summary - [Date]

### Progress
| Person | Update |
|--------|--------|

### Next Focus
| Person | Focus |
|--------|-------|

### Blockers
| Blocker | Owner | Help Needed |
|---------|-------|-------------|

### Missing Updates
- [Name]
```

## Guardrails

- Do not expose sensitive personal details.
- Do not create performance judgments from missed updates.
- Do not assign blockers to someone who did not accept ownership.
- Mark inferred blockers as "needs confirmation."

## Escalation Rules

- Escalate blockers that affect same-day delivery.
- Notify the team lead after two consecutive missing updates from the same person.
- Escalate repeated dependency blockers in the weekly project pulse.
