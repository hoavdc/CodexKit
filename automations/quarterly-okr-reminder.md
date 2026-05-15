# Quarterly OKR Reminder

## Purpose

Remind teams to review OKR progress, close stale key results, capture learnings, and draft next-quarter OKRs before the quarter ends.

## Cadence

Quarterly, starting two weeks before quarter end with follow-ups at one week and two business days.

## Inputs

- Team or department OKR list.
- Owners and reviewers.
- Quarter end date.
- Current metric snapshots.
- Planning meeting date.

## Procedure

1. Identify OKRs missing current progress or confidence status.
2. Send owners a concise update request.
3. Summarize submitted progress, blockers, and confidence.
4. Create a draft closeout pack:
   - achieved
   - partially achieved
   - missed
   - carry forward
   - retire
5. Prepare prompts for next-quarter OKR drafting with `codexkit-okr-writer`.

## Output

```markdown
## OKR Review Reminder - [Quarter]

### Missing Updates
| OKR | Owner | Needed By |
|-----|-------|-----------|

### Closeout Summary
| Objective | Status | Evidence | Next Step |
|-----------|--------|----------|-----------|

### Next-Quarter Drafting Prompts
- [Prompt]
```

## Guardrails

- Do not change OKR status without owner confirmation.
- Do not turn incomplete metrics into performance judgments.
- Preserve metric definitions and confidence levels.
- Keep strategic OKRs internal unless explicitly approved for broader distribution.

## Escalation Rules

- Escalate missing executive-owned OKRs one week before quarter end.
- Escalate blocked key results with cross-team dependency.
- Escalate metric definition disputes to the OKR owner and analytics owner.
