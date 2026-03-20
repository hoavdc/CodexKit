---
name: codexkit-change-management-plan
description: Build change management plans using ADKAR and Kotter's 8-Step framework. Covers stakeholder readiness, communication plans, training schedules, resistance management, and adoption metrics. Use when rolling out new systems, reorganizations, or process changes that affect people.
---

# Change Management Plan

## When to Use

- When rolling out a new system or tool to an organization
- When restructuring teams or processes
- When policy changes affect daily workflows
- When previous change initiatives failed due to poor adoption

## Procedure

### Step 1 — Change Definition

| Element | Description |
|---------|-------------|
| What is changing? | [Current state → Future state] |
| Why? | [Business driver / burning platform] |
| Who is affected? | [Roles, teams, departments] |
| When? | [Timeline with milestones] |
| Scale | Minor (team) / Moderate (department) / Major (organization) |

### Step 2 — ADKAR Assessment

Score each element 1–5 for the affected population:

| ADKAR Element | Score | Gap? | Intervention |
|--------------|-------|------|-------------|
| **Awareness** — know why change is needed | 3 | Yes | Leadership comms |
| **Desire** — want to participate | 2 | Yes | WIIFM messaging |
| **Knowledge** — know how to change | 1 | Yes | Training program |
| **Ability** — can demonstrate new skills | 1 | Yes | Practice + coaching |
| **Reinforcement** — sustain the change | TBD | — | Post-launch support |

Focus on the **first gap** — you can't build Desire without Awareness.

### Step 3 — Stakeholder Map

| Stakeholder | Impact | Influence | Current Stance | Target Stance | Strategy |
|-------------|--------|-----------|---------------|--------------|----------|
| CTO | High | High | Champion | Champion | Activate as sponsor |
| Team leads | High | Medium | Neutral | Supportive | 1:1 briefings |
| End users | High | Low | Resistant | Accepting | Demo + early wins |

### Step 4 — Communication Plan

| Date | Audience | Channel | Message | Sender | Goal |
|------|----------|---------|---------|--------|------|
| Week 1 | All staff | Town hall | Why we're changing | CEO | Awareness |
| Week 2 | Team leads | Workshop | What it means for your team | PM | Desire |
| Week 3 | Users | Email + Video | How it works | Project team | Knowledge |
| Ongoing | All | Slack channel | Tips, wins, FAQ | Champions | Reinforcement |

### Step 5 — Training Schedule

| Session | Audience | Format | Duration | Pre-requisite |
|---------|----------|--------|----------|--------------|
| Overview | All users | Webinar | 30 min | None |
| Hands-on | Power users | Workshop | 2 hours | Overview |
| Admin training | IT admins | Lab | 4 hours | Hands-on |

### Step 6 — Resistance Management

Common resistance patterns and responses:

| Resistance | Root Cause | Response |
|-----------|-----------|----------|
| "This is a waste of time" | No awareness of why | Share business case + data |
| "The old way works fine" | Comfort with status quo | Show pain points of current state |
| "I don't know how" | Lack of training | Provide resources + coaching |
| "This won't work here" | Past failures | Address specifically with new approach |

### Step 7 — Adoption Metrics

| Metric | Target | Measurement | Cadence |
|--------|--------|-------------|---------|
| Training completion | >90% | LMS records | Weekly |
| System usage (DAU) | >70% of target | Analytics | Daily |
| Help desk tickets | Decreasing trend | Ticket system | Weekly |
| User satisfaction | >3.5/5 | Pulse survey | Monthly |
| Process compliance | >85% | Audit checks | Monthly |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Change description | Yes | Current → future state |
| Affected stakeholders | Yes | Roles and departments |
| Timeline | Yes | Key milestones |
| Previous change attempts | Recommended | What worked / didn't |

## Output

```markdown
## Change Management Plan — [Initiative Name]

### Change Summary
Migrating from Jira to Linear for project management across 4 engineering
teams (85 people). Go-live: Q2 2024.

### ADKAR Assessment
[Scored table with gaps and interventions]

### Stakeholder Map
[Impact × influence matrix]

### Communication Calendar
[Phased communication plan]

### Training Schedule
[Session plan by audience]

### Adoption Dashboard
[KPIs with targets and measurement plan]
```

## Definition of Done

- [ ] Change clearly defined (current → future state)
- [ ] ADKAR assessment identifies intervention points
- [ ] Stakeholder map with engagement strategies
- [ ] Communication plan with dates and channels
- [ ] Training schedule with formats and pre-requisites
- [ ] Adoption metrics defined with targets
