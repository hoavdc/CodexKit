---
name: codexkit-onboarding-checklist-creator
description: Create practical role-specific onboarding checklists with owners, timing, access needs, and first-week milestones. Use for new hire, contractor, client, or team onboarding.
version: 1.0.0
category: scaffolding
---

# Onboarding Checklist Creator

## When to Use

- Preparing a new employee, contractor, vendor, or client onboarding checklist.
- Translating a broad onboarding plan into concrete day-by-day tasks.
- Coordinating HR, manager, IT, buddy, compliance, and role-training responsibilities.
- Creating a lightweight checklist when a full 30-60-90 plan is too heavy.

## Procedure

### Step 1 - Define Onboarding Target

Identify who is being onboarded, their role, start date, location, manager, team, and onboarding goal.

### Step 2 - Build Phases

Use phases:
- pre-start
- day 1
- week 1
- first 30 days
- follow-up checkpoints

### Step 3 - Assign Owners

Every task needs an owner: HR, manager, IT, buddy, finance, legal, security, or new hire.

### Step 4 - Add Evidence And Completion Criteria

Define what "done" means for each task, such as account created, policy acknowledged, first customer shadow completed, or manager check-in held.

### Step 5 - Flag Risks

Identify missing access, unclear manager ownership, compliance requirements, or training dependencies.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Role or onboarding target | Yes | Job title, client type, contractor scope |
| Start date | Recommended | Date |
| Team and manager | Recommended | Names or roles |
| Required systems | Optional | Tools, accounts, data access |
| Compliance needs | Optional | Training, policies, certifications |

## Output

```markdown
## Onboarding Checklist - [Role / Person]

### Pre-Start
| Task | Owner | Due | Done Means |
|------|-------|-----|------------|

### Day 1
| Task | Owner | Due | Done Means |
|------|-------|-----|------------|

### Week 1
| Task | Owner | Due | Done Means |
|------|-------|-----|------------|

### First 30 Days
| Milestone | Owner | Evidence |
|-----------|-------|----------|

### Risks / Missing Inputs
- [Risk]
```

## Quality Criteria

- [ ] Tasks are specific enough to execute without interpretation.
- [ ] Every task has an owner and completion signal.
- [ ] IT/access, HR/compliance, manager expectations, and role training are all covered.
- [ ] The checklist avoids collecting unnecessary personal data.
- [ ] The plan fits role seniority and employment type.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are role-specific tasks accurate for this onboarding context? |
| **Completeness** | Are access, paperwork, introductions, training, expectations, and checkpoints covered? |
| **Context-fit** | Is the checklist appropriately lightweight or detailed for this role? |
| **Consequence** | What failure would create the biggest day-one friction or compliance risk? |

## Edge Cases

- **Remote onboarding** - Add shipping, remote access, video introductions, and async documentation steps.
- **Contractor onboarding** - Separate legal, procurement, access expiration, and scope confirmation.
- **Regulated role** - Add mandatory training and evidence capture, but avoid giving legal advice.
- **Fast start date** - Mark minimum viable onboarding tasks for day-one readiness.

## Examples

> **Prompt:** "Create a week-one onboarding checklist for a remote customer support manager starting next Monday."

> **Good pattern:** Include access, team introductions, product training, shadowing, escalation policy, first-week goals, and manager check-ins with owners.

## Definition of Done

- [ ] Checklist can be assigned immediately.
- [ ] Day-one blockers are visible.
- [ ] Follow-up checkpoints are scheduled.
- [ ] Sensitive or compliance items are marked for HR review.

## Changelog

- v1.0.0 - Initial release
