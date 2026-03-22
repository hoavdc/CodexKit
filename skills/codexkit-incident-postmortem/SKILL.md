---
name: codexkit-incident-postmortem
description: Write blameless incident postmortems following Google SRE methodology. Covers timeline reconstruction, root cause analysis (5 Whys), impact assessment, and action items with owners. Use after production incidents, outages, or significant bugs to prevent recurrence.
version: 1.0.0
category: runbook
---

# Incident Postmortem

## When to Use

- After any production incident that affected users
- After near-misses that revealed systemic weaknesses
- When establishing a blameless postmortem culture
- When leadership requests incident RCA (Root Cause Analysis)

## Procedure

### Step 1 — Incident Summary

Write a 2–3 sentence summary:
- What happened, when, and how long
- Impact in business terms (users affected, revenue lost, SLA breach)
- Current status (resolved, monitoring, partially mitigated)

Severity classification:

| Severity | Criteria |
|----------|----------|
| SEV-1 | Complete outage or data loss affecting all users |
| SEV-2 | Major feature unavailable or significant degradation |
| SEV-3 | Minor feature impact, workaround available |
| SEV-4 | Cosmetic or non-user-facing issue |

### Step 2 — Timeline

Build a minute-by-minute timeline:

| Time (UTC) | Event | Source |
|-----------|-------|--------|
| 14:02 | Deploy v2.3.1 to production | CI/CD |
| 14:05 | Error rate spikes to 15% | Datadog |
| 14:08 | PagerDuty alerts on-call engineer | PagerDuty |
| 14:12 | On-call begins investigation | Slack thread |
| 14:25 | Root cause identified: DB migration timeout | Logs |
| 14:30 | Rollback initiated | CI/CD |
| 14:35 | Service fully recovered | Monitoring |

**Time to Detect (TTD):** 3 min | **Time to Resolve (TTR):** 33 min

### Step 3 — Root Cause Analysis (5 Whys)

1. **Why** did the service fail? → Database queries timed out
2. **Why** did queries time out? → Migration locked a critical table for 8 minutes
3. **Why** was the table locked? → ALTER TABLE ran without `CONCURRENTLY` flag
4. **Why** wasn't it concurrent? → Migration script didn't follow the safe-migration checklist
5. **Why** wasn't the checklist followed? → No automated check in CI pipeline

**Root cause:** Missing CI check for safe migration patterns.

### Step 4 — Impact Assessment

| Metric | Value |
|--------|-------|
| Duration | 33 minutes |
| Users affected | ~12,000 (8% of DAU) |
| Requests failed | ~45,000 (500 errors) |
| Revenue impact | ~$2,400 estimated |
| SLA impact | 99.92% (target: 99.95%) — SLA breached |

### Step 5 — What Went Well / What Didn't

| What Went Well | What Didn't Go Well |
|---------------|---------------------|
| Fast detection (3 min TTD) | No pre-deploy migration testing |
| Clear rollback procedure | Migration script wasn't reviewed |
| Team communicated via war room | PagerDuty escalation was slow |

### Step 6 — Action Items

| # | Action | Type | Owner | Priority | Deadline |
|---|--------|------|-------|----------|----------|
| 1 | Add CI check for safe migration patterns | Prevent | Platform | P1 | Sprint 5 |
| 2 | Add migration dry-run to staging deploy | Detect | DevOps | P1 | Sprint 5 |
| 3 | Improve PagerDuty escalation timing | Process | SRE | P2 | Sprint 6 |

Action types: **Prevent** (stop recurrence), **Detect** (catch faster), **Mitigate** (reduce impact)

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Incident description | Yes | What happened, when |
| Timeline / log data | Yes | Timestamps with events |
| Impact data | Yes | Users affected, duration, revenue |
| Team notes | Recommended | Slack threads, war room notes |

## Output

```markdown
## Postmortem — [Incident Title]

**Date:** 2024-03-15 | **Severity:** SEV-2 | **Duration:** 33 min
**Author:** [On-call engineer] | **Reviewers:** [Team leads]

### Summary
Production database queries timed out for 33 minutes due to a table-locking
migration, affecting ~12,000 users and breaching our 99.95% SLA target.

### Timeline
[Minute-by-minute timeline]

### Root Cause
[5 Whys chain → root cause]

### Impact
[Quantified impact table]

### Lessons Learned
[What went well / what didn't]

### Action Items
[Prioritized actions with owners and deadlines]
```

## Definition of Done

- [ ] Blameless language throughout (no individual blame)
- [ ] Timeline with timestamps and sources
- [ ] 5 Whys reaching a systemic root cause
- [ ] Impact quantified (users, duration, revenue, SLA)
- [ ] Action items typed (prevent/detect/mitigate) with owners

## Quality Criteria

- [ ] Steps are executable in sequence without external context
- [ ] Decision points have clear if/then branching
- [ ] Rollback or abort procedures are documented for risky steps
- [ ] Expected duration or time-per-step is estimated

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do the steps execute correctly in the order specified? |
| **Completeness** | Are decision points, error handling, and escalation paths all documented? |
| **Context-fit** | Could someone with the right access but no prior context complete this runbook? |
| **Consequence** | If Step N fails and the operator skips to Step N+1, what breaks? |

## Edge Cases

- **Steps require access the operator doesn't have** — Document exact access requirements upfront. Include escalation contact for emergency access.
- **Environment differs from documented state** — Add a pre-flight check as Step 0 to verify prerequisites before starting.
- **Runbook is triggered during off-hours** — Document who to contact and which steps can be safely deferred to business hours.

## Changelog

- v1.0.0 — Initial release
