---
name: codexkit-daily-brief-generator
description: Create a concise daily briefing from calendar items, tasks, messages, and open decisions. Use at the start of a workday to identify priorities, risks, preparation needs, and follow-ups.
version: 1.0.0
category: automation
---

# Daily Brief Generator

## When to Use

- Starting a workday with scattered calendar items, tasks, inbox notes, or project updates.
- Preparing a manager, founder, chief of staff, or individual contributor for the day.
- Turning yesterday's unresolved items into today's operating priorities.
- Creating a daily plan without manually reading every thread first.

## Procedure

### Step 1 - Gather Inputs

Collect only the information needed for today's decisions:
- calendar events with time, title, attendees, and purpose if known
- tasks due today or overdue
- unread or flagged messages that require a response
- open decisions, blockers, or escalations
- personal constraints such as focus blocks, travel, or unavailable hours

### Step 2 - Classify The Day

Group the day into:
- fixed commitments
- preparation required before meetings
- top three outcomes
- decisions needed from the user
- risks, blockers, or follow-ups

### Step 3 - Prioritize

Rank priorities by urgency, consequence, and dependency impact. Do not rank low-value busywork above work that unlocks other people.

### Step 4 - Produce The Brief

Write a scan-friendly brief with:
- schedule snapshot
- top priorities
- meeting preparation notes
- follow-up queue
- risk flags
- suggested focus block

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Calendar items | Recommended | Time, title, attendees, purpose |
| Task list | Recommended | Task, owner, due date, status |
| Inbox or chat notes | Optional | Bullets, pasted messages, summaries |
| Project context | Optional | Milestones, blockers, open decisions |
| User constraints | Optional | Working hours, focus time, travel |

## Output

```markdown
## Daily Brief - [Date]

### Schedule Snapshot
| Time | Event | Preparation Needed |
|------|-------|--------------------|

### Top 3 Priorities
1. [Priority] - [why it matters today]

### Follow-ups
| Item | Person | Suggested Message | Deadline |
|------|--------|-------------------|----------|

### Risks To Watch
- [Risk] - [mitigation]

### Suggested Focus Block
- [Time window] - [work to protect]
```

## Quality Criteria

- [ ] The brief distinguishes fixed calendar commitments from flexible task work.
- [ ] The top three priorities are ranked by business impact, not just due date.
- [ ] Every follow-up includes a recipient and concrete next action.
- [ ] Sensitive or uncertain items are flagged for human review before sending.
- [ ] The output is short enough to read in under three minutes.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do all times, names, deadlines, and task states match the provided inputs? |
| **Completeness** | Are meetings, urgent tasks, blockers, and open decisions all represented? |
| **Context-fit** | Does the priority order match the user's role and real constraints for the day? |
| **Consequence** | What could go wrong if the user followed this brief without checking the source material? |

## Edge Cases

- **No calendar input** - Build the brief around tasks, deadlines, and open loops. State that schedule coverage is unknown.
- **Too many urgent items** - Group by consequence and identify the one decision or escalation that unlocks the most work.
- **Conflicting meetings or deadlines** - Flag the conflict and propose a decision, delegation, or reschedule option.
- **Sensitive messages included** - Summarize minimally and mark as "review before forwarding."

## Examples

> **Prompt:** "Build my daily brief from these calendar items, task list, and Slack notes. I have a board update at 3pm and two overdue vendor replies."

> **Good pattern:** Start with schedule, then preparation needs, then top priorities, then follow-ups. Do not write a motivational plan or a long productivity essay.

## Definition of Done

- [ ] The user can see what matters today within one screen.
- [ ] All high-consequence meetings have preparation notes.
- [ ] Follow-ups and risks are actionable.
- [ ] Uncertain assumptions are explicitly marked.

## Changelog

- v1.0.0 - Initial release
