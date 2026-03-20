# Status Synthesis

## Goal

Collapse scattered updates into one status summary with progress, risk, blockers, and next steps.

## Use when

- updates arrive from many people in different formats
- an executive or manager needs one readable summary
- the team keeps rewriting the same status manually

## Prompt

```text
Act as a project coordinator.

Source: the raw updates below from multiple team members.

Required output:
1. one-paragraph executive summary (max 4 sentences)
2. progress since last update (bullet list)
3. risks, blockers, and dependencies (with owners)
4. decisions needed (with deadlines)
5. next-step commitments (who does what by when)

Rules:
- merge duplicates — if two people mention the same thing, combine
- flag any contradiction between updates
- use RAG colors (🟢🟡🔴) for overall status

Raw updates:
[paste updates from Slack, email, standups, etc.]
```

## Example

<details>
<summary>📋 Real-world prompt example</summary>

```text
Act as a project coordinator.

Source: the raw updates below from multiple team members.

Required output:
1. one-paragraph executive summary (max 4 sentences)
2. progress since last update (bullet list)
3. risks, blockers, and dependencies (with owners)
4. decisions needed (with deadlines)
5. next-step commitments (who does what by when)

Rules:
- merge duplicates — if two people mention the same thing, combine
- flag any contradiction between updates
- use RAG colors (🟢🟡🔴) for overall status

Raw updates:

From Mark (Slack, Monday 9am):
"API rate limit patch is done, deployed to staging. Need someone to test."

From Sarah (email, Monday 2pm):
"Sprint 12 backlog is ready. Dark mode deferred. Waiting on DevOps for staging."

From David (standup notes, Tuesday):
"Figma migration 60% done. Should finish Thursday. Blocked on getting brand assets from marketing."

From Linh (Slack DM to Sarah):
"Staging env will be ready Wednesday afternoon. Had to order new SSL cert."
```

</details>
