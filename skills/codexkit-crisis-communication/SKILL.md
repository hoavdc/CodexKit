---
name: codexkit-crisis-communication
description: Draft crisis communication packages including holding statements, stakeholder updates, Q&A documents, and internal briefs. Follows ICS (Incident Command System) communication principles. Use during PR crises, data breaches, product recalls, or any event requiring rapid coordinated messaging.
---

# Crisis Communication

## When to Use

- During a PR crisis, data breach, or security incident
- When a product issue affects customers at scale
- When media attention or social media escalation requires response
- When a compliance violation or legal issue needs external communication

## Procedure

### Step 1 — Severity Assessment

| Level | Criteria | Response Time | Approval |
|-------|----------|--------------|----------|
| **Critical** | Public safety, data breach, regulatory | < 1 hour | CEO + Legal |
| **High** | Major service disruption, media coverage | < 4 hours | VP + Comms |
| **Medium** | Notable customer impact, social media trending | < 24 hours | Director + Comms |
| **Low** | Minor issue, limited audience | < 48 hours | Comms team |

### Step 2 — Fact Gathering

Before writing anything, document what is known:

| Category | Details |
|----------|---------|
| What happened? | [Factual description — no speculation] |
| When? | [Timeline of events] |
| Who is affected? | [Customers, employees, partners — numbers] |
| What caused it? | [Known root cause, or "under investigation"] |
| What actions taken? | [Steps already taken to address] |
| What's next? | [Planned actions and timeline] |

**Rule:** Only communicate confirmed facts. Never speculate.

### Step 3 — Holding Statement

Draft the initial public response (use within first hour):

```
[Company] is aware of [brief description of incident].
We are actively investigating and have taken immediate steps to [action taken].
[Affected parties] may experience [specific impact].
We will provide an update by [specific time].
For questions, contact [channel].
```

Principles:
- Acknowledge the situation
- Show empathy for those affected
- State what you're doing about it
- Commit to a specific update time
- Provide a contact channel

### Step 4 — Q&A Document

Prepare answers for anticipated questions:

| Question | Answer | Approved by |
|----------|--------|-------------|
| How many users are affected? | [Specific number or range] | Legal |
| Is my data safe? | [Honest, specific answer] | Security + Legal |
| What should I do? | [Clear action steps] | Product |
| Will this happen again? | [Prevention measures] | Engineering |
| Will you compensate affected users? | [Policy decision] | Executive |

### Step 5 — Stakeholder-Specific Messages

| Audience | Channel | Tone | Key Message |
|----------|---------|------|-------------|
| Customers | Email, in-app | Empathetic, transparent | Impact + what we're doing + what you should do |
| Employees | All-hands, Slack | Honest, calm | What happened + talking points + don't speculate publicly |
| Media | Press release | Professional, factual | Statement + background + contact |
| Regulators | Formal letter | Compliant, detailed | Full disclosure per requirements |
| Board / investors | Direct call | Strategic | Impact assessment + response + outlook |

### Step 6 — Update Cadence

| Phase | Frequency | Channel |
|-------|-----------|---------|
| First 24 hours | Every 2–4 hours | Status page, social media |
| Day 2–3 | Every 8–12 hours | Email, blog |
| Day 4–7 | Daily | Blog, status page |
| Post-resolution | Final update + postmortem | Blog, email |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Incident description | Yes | What happened |
| Affected parties | Yes | Who and how many |
| Known facts | Yes | Confirmed information only |
| Actions taken | Yes | What has been done so far |
| Legal review status | Recommended | Has legal approved messaging? |

## Output

```markdown
## Crisis Communication Package — [Incident Name]

### Severity: High | Status: Active
**Incident Lead:** [Name] | **Comms Lead:** [Name]

### Holding Statement
[Ready-to-publish statement]

### Q&A
[Prepared answers for 10–15 anticipated questions]

### Stakeholder Messages
[Customized message per audience]

### Update Schedule
[When and where next updates will be published]
```

## Definition of Done

- [ ] Severity assessed and response timeline set
- [ ] Facts separated from speculation
- [ ] Holding statement drafted within response window
- [ ] Q&A covers top 10 anticipated questions
- [ ] Messages tailored per stakeholder group
- [ ] Update cadence committed and communicated
