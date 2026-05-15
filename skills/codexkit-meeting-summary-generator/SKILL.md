---
name: codexkit-meeting-summary-generator
description: Summarize meeting notes or transcripts into decisions, action items, owners, risks, and follow-up messages. Use after meetings when raw notes need a clean recap.
version: 1.0.0
category: review
---

# Meeting Summary Generator

## When to Use

- Turning a transcript, rough notes, or chat log into a meeting recap.
- Extracting decisions, action items, owners, due dates, and unresolved questions.
- Preparing a follow-up email or project tracker update after a meeting.
- Cleaning up a meeting where participants left with unclear next steps.

## Procedure

### Step 1 - Identify Meeting Context

Capture meeting title, date, attendees, purpose, and expected decision or outcome.

### Step 2 - Extract Decisions

List only decisions that were actually made. If the notes imply a decision but do not confirm it, mark it as "proposed" or "needs confirmation."

### Step 3 - Extract Actions

For each action item, identify:
- owner
- task
- due date or suggested date
- dependency
- source quote or note if useful

### Step 4 - Surface Open Questions

Separate questions that block work from questions that are informational.

### Step 5 - Draft Follow-up

Write a short recap suitable for email or Slack. Keep it factual and avoid attributing commitments without evidence.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Notes or transcript | Yes | Text, bullets, transcript excerpt |
| Meeting purpose | Recommended | One sentence |
| Attendees | Recommended | Names and roles |
| Desired recap format | Optional | Email, Slack, project tracker |

## Output

```markdown
## Meeting Summary - [Meeting Name]

### Executive Recap
[3-5 sentences]

### Decisions
| Decision | Owner | Evidence / Note |
|----------|-------|-----------------|

### Action Items
| Action | Owner | Due Date | Dependency | Status |
|--------|-------|----------|------------|--------|

### Open Questions
| Question | Blocking? | Suggested Next Step |
|----------|-----------|---------------------|

### Follow-up Draft
[Ready-to-send recap]
```

## Quality Criteria

- [ ] Decisions are separated from discussion points.
- [ ] Every action item has an owner or is marked "owner missing."
- [ ] Dates are preserved exactly when provided and marked as suggested when inferred.
- [ ] The recap is neutral, factual, and not inflated with generic language.
- [ ] Confidential or sensitive content is summarized carefully and flagged when needed.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are decisions and action items supported by the notes rather than inferred too aggressively? |
| **Completeness** | Are decisions, actions, open questions, risks, and follow-up needs all captured? |
| **Context-fit** | Is the recap appropriate for the audience and meeting type? |
| **Consequence** | Could any person be assigned work they did not actually accept? |

## Edge Cases

- **Transcript is messy or speaker labels are missing** - Extract themes and mark ownership as uncertain.
- **No decisions were made** - State that clearly and list unresolved decision points.
- **Conflicting action ownership** - Flag the conflict and ask for confirmation instead of choosing silently.
- **Sensitive HR/legal content** - Produce an internal summary only and recommend human review before distribution.

## Examples

> **Prompt:** "Summarize this weekly leadership meeting transcript into decisions, actions, open questions, and a Slack follow-up."

> **Good pattern:** "Decision: Launch date remains June 12. Owner: Maya. Evidence: CEO confirmed no date change." This is better than "The team discussed launch timing."

## Definition of Done

- [ ] The output can be pasted into a recap email with minimal editing.
- [ ] Each action has an owner or an explicit ownership gap.
- [ ] Open questions are visible and prioritized.
- [ ] No unsupported commitments are invented.

## Changelog

- v1.0.0 - Initial release
