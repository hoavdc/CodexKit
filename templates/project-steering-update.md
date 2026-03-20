# Project Steering Update

> **How to use:** Fill in before every steering committee or sponsor check-in. Pair with `codexkit-status-update-packager` or `codexkit-portfolio-risk-radar` skills to auto-generate.

## Objective

<!-- One sentence: what does the project deliver and by when? -->

## RAG Summary

<!-- Overall project health. Pick ONE and explain briefly. -->

| Dimension | RAG | Comment |
|-----------|-----|---------|
| Schedule | 🟢 🟡 🔴 | <!-- e.g. "On track — Sprint 12 closes Friday" --> |
| Scope | 🟢 🟡 🔴 | <!-- e.g. "Amber — dark mode deferred to Phase 2" --> |
| Budget | 🟢 🟡 🔴 | <!-- e.g. "Green — 72% budget consumed at 68% timeline" --> |
| Risk | 🟢 🟡 🔴 | <!-- e.g. "Red — vendor dependency unresolved" --> |

## Milestone Movement

<!-- Only list milestones that changed since last update. No change = skip this section. -->

| Milestone | Previous Date | New Date | Reason |
|-----------|--------------|----------|--------|
| | | | |

## RAID Changes

<!-- New or escalated Risks, Assumptions, Issues, Dependencies since last update. -->

| Type | Item | Owner | Status |
|------|------|-------|--------|
| R / A / I / D | | | Open / Mitigating / Closed |

## Decisions Needed

<!-- What do you need the steering committee to decide on TODAY? Be specific. -->

| # | Decision Required | Deadline | Recommended Action |
|---|-------------------|----------|--------------------|
| 1 | | | |

## Executive Attention

<!-- One paragraph max: if the sponsor reads nothing else, what must they know? -->

## Next 2 Weeks

<!-- Top 3 things happening next. Keep it scannable. -->

1. 
2. 
3. 

---

<details>
<summary>📋 Worked Example</summary>

## Objective
Deliver self-service password reset for 2,000 employees by May 1.

## RAG Summary
| Dimension | RAG | Comment |
|-----------|-----|---------|
| Schedule | 🟡 | Pilot delayed 3 days — waiting on Azure AD sandbox |
| Scope | 🟢 | No scope changes |
| Budget | 🟢 | $8K spent of $15K |
| Risk | 🟡 | SSO token refresh issue under investigation |

## Milestone Movement
| Milestone | Previous Date | New Date | Reason |
|-----------|--------------|----------|--------|
| Pilot launch | Apr 12 | Apr 15 | Azure AD sandbox provisioning delay |

## RAID Changes
| Type | Item | Owner | Status |
|------|------|-------|--------|
| R | SSO token refresh may fail on mobile browsers | Mark Liu | Mitigating |
| D | Azure AD sandbox credentials from IT Infra | Linh Nguyen | Open |

## Decisions Needed
| # | Decision Required | Deadline | Recommended Action |
|---|-------------------|----------|--------------------|
| 1 | Approve pilot group: full Sales team (120 users) | Mar 22 | Recommend: yes, low risk with rollback ready |

## Executive Attention
Pilot is delayed 3 days due to Azure AD sandbox. No cost impact. We recommend approving the Sales team pilot group today to stay on track for May 1 full rollout.

## Next 2 Weeks
1. Complete Azure AD integration testing (by Mar 25)
2. Launch pilot to Sales team (Apr 15)
3. Collect pilot feedback and fix critical bugs (Apr 15–22)

</details>
