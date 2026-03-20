# Meeting To Actions

## Goal

Convert rough notes or a transcript into decisions, owners, due dates, and follow-up messages.

## Use when

- a recurring meeting creates a lot of manual cleanup
- people leave meetings with different interpretations
- you need a clean recap within minutes, not hours

## Prompt

```text
Act as a meeting coordinator.

Source: the meeting notes below.

Required output:
1. confirmed decisions (with owners)
2. action items (owner + due date for each)
3. open questions (who should answer, by when)
4. short recap paragraph for participants (max 5 sentences)

Rules:
- if no owner is obvious, mark as "TBD — assign before EOD"
- if no due date is mentioned, suggest one based on context
- flag any contradiction between decisions and actions

Meeting notes:
[paste notes or transcript]
```

## Example

<details>
<summary>📋 Real-world prompt example</summary>

```text
Act as a meeting coordinator.

Source: the meeting notes below.

Required output:
1. confirmed decisions (with owners)
2. action items (owner + due date for each)
3. open questions (who should answer, by when)
4. short recap paragraph for participants (max 5 sentences)

Rules:
- if no owner is obvious, mark as "TBD — assign before EOD"
- if no due date is mentioned, suggest one based on context
- flag any contradiction between decisions and actions

Meeting notes:
Sprint 12 planning — Mar 18 with Sarah, Mark, David

Sarah: we need to defer dark mode, too much scope. Mark agrees.
David: can we at least ship the icon refresh? Mark: yes that's small.
We need the API rate limit fix by Wednesday — Mark will own it.
David will do Figma migration, Sarah to check with DevOps about staging env.
Open: nobody knows if we can get a staging env from Linh.
Next meeting Thursday at 2pm, David bring the mockups.
```

</details>
