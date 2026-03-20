---
name: codexkit-onboarding-plan-creator
description: Create structured employee onboarding plans using the 30-60-90 day framework aligned with SHRM best practices. Cover pre-boarding, Day 1, Week 1, and monthly milestones with task owners, success criteria, and buddy assignments. Use when hiring new employees or revamping the onboarding process.
---

# Onboarding Plan Creator

## When to Use

- When a new hire is confirmed and start date is set
- When HR or a hiring manager needs a structured onboarding checklist
- When revamping the onboarding process for a team or department
- When onboarding remote or hybrid employees

## Procedure

### Step 1 — Pre-Boarding (Before Day 1)

1. Send welcome email with start date, dress code, parking, and first-day agenda
2. Set up accounts: email, Slack, HRIS, project tools, VPN
3. Assign buddy/mentor from the team
4. Prepare workstation (physical or virtual)
5. Share pre-reading: company handbook, team wiki, org chart

### Step 2 — Day 1

1. Welcome meeting with manager (30 min)
2. HR orientation: policies, benefits enrollment, emergency contacts
3. IT setup verification
4. Buddy introduction and office/virtual tour
5. First lunch with team

### Step 3 — Week 1

1. Role overview and expectations alignment with manager
2. Meet key stakeholders (1:1 coffee chats)
3. Review current projects and team roadmap
4. Complete compliance training (security, harassment, data privacy)
5. End-of-week check-in with manager

### Step 4 — 30-Day Milestone

1. Complete all mandatory training
2. Understand team processes and tools
3. Take ownership of first small task or project
4. Feedback session with manager: "What's going well? What's confusing?"
5. Buddy check-in

### Step 5 — 60-Day Milestone

1. Contribute independently to team deliverables
2. Build relationships across departments
3. Identify one process improvement suggestion
4. Manager feedback: progress vs expectations
5. Probation mid-point review (if applicable)

### Step 6 — 90-Day Milestone

1. Fully integrated into team workflows
2. Set first performance goals (aligned with team OKRs)
3. Present a "What I've learned" summary to team (optional)
4. Manager evaluation: confirm role fit and probation pass
5. Transition from onboarding to regular 1:1 cadence

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Role / job title | Yes | Text |
| Department | Yes | Text |
| Start date | Yes | Date |
| Reporting manager | Yes | Name |
| Tools/systems used | Recommended | List |
| Buddy assignment | Recommended | Name |

## Output

```markdown
## Onboarding Plan — [Name] — [Role] — Start: [Date]

### Pre-Boarding Checklist

| Task | Owner | Due | Done |
|------|-------|-----|------|
| Send welcome email | HR | D-7 | ☐ |
| Set up email + Slack + tools | IT | D-3 | ☐ |
| Assign buddy: [Name] | Manager | D-5 | ☐ |
| Prepare workstation | IT/Office | D-1 | ☐ |
| Share pre-reading pack | HR | D-3 | ☐ |

### Day 1

| Time | Activity | With |
|------|----------|------|
| 9:00 | Welcome + expectations | Manager |
| 10:00 | HR orientation | HR |
| 11:00 | IT setup verification | IT |
| 12:00 | Team lunch | Team |
| 14:00 | Buddy introduction + tour | Buddy |
| 16:00 | Day 1 wrap-up | Manager |

### 30-60-90 Day Milestones

| Milestone | Success Criteria | Check-in Owner |
|-----------|-----------------|----------------|
| Day 30 | All training complete, first task delivered | Manager |
| Day 60 | Independent contribution, cross-team relationships | Manager |
| Day 90 | Full integration, performance goals set, probation passed | Manager + HR |
```

## Definition of Done

- [ ] Pre-boarding checklist with task owners and due dates
- [ ] Day 1 schedule with specific activities
- [ ] 30-60-90 milestones with success criteria
- [ ] Buddy/mentor assigned
- [ ] Check-in cadence defined
- [ ] Customized to role and department

## Examples

### Prompt

```text
We are onboarding a new Senior Product Manager starting April 1.
Department: Product. Reports to: VP Product.
Tools: Jira, Figma, Slack, Notion, Looker.
Create a complete 30-60-90 day onboarding plan with pre-boarding checklist.
```
