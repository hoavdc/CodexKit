---
name: codexkit-pmbok8-stakeholder-register
description: Build and maintain a Stakeholder Register per PMBOK 8 Stakeholder Performance Domain. Identify stakeholders, analyze using Power/Interest grid, plan engagement strategies, and define communication cadence. Use at project initiation and whenever stakeholder landscape changes.
---

# Stakeholder Register Builder

## When to Use

- At project initiation to map the stakeholder landscape
- When a major change introduces new stakeholders
- When engagement issues surface (resistance, disengagement, conflict)
- Before major milestone reviews to validate stakeholder alignment

## Procedure

### Step 1 — Identify Stakeholders

1. Review project charter, business case, and org chart
2. Brainstorm internal stakeholders (sponsor, team, PMO, functional leads)
3. Identify external stakeholders (vendors, regulators, customers, partners)
4. Classify by relationship: Decision-maker / Influencer / Contributor / Observer

### Step 2 — Analyze (Power × Interest Grid)

Map each stakeholder on a 2×2 matrix:

| | **High Interest** | **Low Interest** |
|---|---|---|
| **High Power** | **Manage Closely** | **Keep Satisfied** |
| **Low Power** | **Keep Informed** | **Monitor** |

For each stakeholder, also assess:
- Current attitude: Supportive / Neutral / Resistant
- Desired attitude: Where you need them to be
- Influence direction: Upward / Downward / Lateral / External

### Step 3 — Plan Engagement

For each quadrant, define the engagement strategy:

| Quadrant | Strategy | Communication Frequency |
|----------|----------|------------------------|
| Manage Closely | Proactive, face-to-face, co-create | Weekly or bi-weekly |
| Keep Satisfied | Regular updates, escalation channel | Bi-weekly or monthly |
| Keep Informed | Status reports, newsletters | Monthly |
| Monitor | Passive, available on request | Quarterly or ad-hoc |

### Step 4 — Define RACI Alignment

Map key stakeholders to project deliverables using RACI:
- **R**esponsible — does the work
- **A**ccountable — owns the outcome
- **C**onsulted — provides input
- **I**nformed — receives updates

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Project charter or brief | Yes | Document or summary |
| Org chart | Recommended | Hierarchy diagram or list |
| Sponsor brief | Recommended | Key expectations and constraints |

## Output

```markdown
## Stakeholder Register — [Project Name]

### Register

| # | Name | Role | Power | Interest | Quadrant | Current | Desired | Strategy |
|---|------|------|-------|----------|----------|---------|---------|----------|
| 1 | Jane Kim | VP Finance | High | High | Manage Closely | Neutral | Supportive | Weekly 1:1, co-design budget review |
| 2 | Mark Lee | IT Director | High | Low | Keep Satisfied | Supportive | Supportive | Monthly status email + escalation path |
| 3 | Sarah Chen | End User Lead | Low | High | Keep Informed | Resistant | Neutral | Include in demos, gather feedback |
| 4 | External Auditor | Regulator | High | Low | Keep Satisfied | Neutral | Neutral | Quarterly compliance report |

### Power/Interest Grid

        High Power │ Keep Satisfied │ Manage Closely │
                   │    Mark Lee     │   Jane Kim      │
        ───────────┼────────────────┼─────────────────│
        Low Power  │    Monitor     │ Keep Informed   │
                   │                │   Sarah Chen     │
                   └──Low Interest──┴──High Interest──┘

### Communication Plan

| Stakeholder | Channel | Frequency | Owner | Content |
|-------------|---------|-----------|-------|---------|
| Jane Kim | 1:1 meeting | Weekly | PM | Decisions, risks, budget |
| Mark Lee | Email report | Monthly | PM | Status, IT dependencies |
| Sarah Chen | Demo + survey | Bi-weekly | BA | Feature feedback |

### RACI — Key Deliverables

| Deliverable | Jane Kim | Mark Lee | Sarah Chen | PM |
|-------------|----------|----------|------------|-----|
| Requirements | C | C | R | A |
| Budget approval | A | I | I | R |
| User testing | I | C | R | A |
```

## Definition of Done

- [ ] All stakeholders identified with role and org position
- [ ] Power/Interest grid completed for each stakeholder
- [ ] Engagement strategy defined per quadrant
- [ ] Communication plan with frequency, channel, and owner
- [ ] Current vs desired attitude gap identified
- [ ] At least one RACI matrix for key deliverables

## Examples

### Prompt

```text
I am starting a new ERP implementation project.
Sponsor: CFO. Key departments: Finance, IT, Operations, HR.
External: ERP vendor (SAP), external auditor.
Build a complete stakeholder register with engagement strategies and communication plan.
```
