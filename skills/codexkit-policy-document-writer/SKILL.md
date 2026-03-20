---
name: codexkit-policy-document-writer
description: Author structured policy documents and Standard Operating Procedures (SOPs) following ISO document control standards. Covers purpose, scope, roles, policy statements, procedures, compliance monitoring, and review schedules. Use when creating corporate policies, operational procedures, or governance documents.
---

# Policy Document Writer

## When to Use

- When creating a new corporate policy or procedure
- When formalizing informal processes into official SOPs
- When audit findings require documented policies
- When regulatory requirements demand written procedures

## Procedure

### Step 1 — Document Control Header

| Field | Value |
|-------|-------|
| **Document ID** | POL-[Department]-[NNN] |
| **Title** | [Clear, specific title] |
| **Version** | 1.0 |
| **Effective Date** | [Date] |
| **Review Date** | [12 months from effective] |
| **Owner** | [Role/Name] |
| **Approver** | [Role/Name] |
| **Classification** | Internal / Confidential / Public |

### Step 2 — Purpose & Scope

**Purpose:** One paragraph explaining:
- WHY this policy exists
- WHAT problem it addresses
- WHAT compliance requirement it satisfies (if any)

**Scope:**
- Who this applies to (roles, departments, locations)
- What it covers (and explicitly what it does NOT cover)
- When it takes effect

### Step 3 — Definitions

Define key terms to avoid ambiguity:

| Term | Definition |
|------|-----------|
| PII | Personally Identifiable Information — any data that can identify an individual |
| Data Controller | Entity that determines purposes and means of processing personal data |

### Step 4 — Roles & Responsibilities

| Role | Responsibilities |
|------|-----------------|
| Policy Owner | Maintains, reviews, updates the policy |
| Department Heads | Ensures team compliance, reports violations |
| All Employees | Reads, understands, follows the policy |
| Compliance Team | Monitors adherence, conducts audits |

### Step 5 — Policy Statements

Write clear, enforceable statements:

**Good:**
> All employees must complete security awareness training within 30 days of hire and annually thereafter.

**Bad:**
> ~~Employees should try to complete training when possible.~~

Rules for policy statements:
- Use "must" for requirements, "should" for recommendations
- Be specific about timeframes, quantities, and thresholds
- Include consequences for non-compliance
- Reference related policies by ID

### Step 6 — Procedures (SOP)

For each procedure, document step-by-step:

| Step | Action | Responsible | System | Notes |
|------|--------|-------------|--------|-------|
| 1 | Receive request via [channel] | [Role] | [System] | — |
| 2 | Verify requester identity | [Role] | [System] | Check against directory |
| 3 | Assess request against policy | [Role] | [Checklist] | Use form X-123 |
| 4 | Approve or deny with reason | [Role] | [System] | Document decision |

Include decision trees for complex procedures:
- If [condition A] → follow path 1
- If [condition B] → escalate to [role]

### Step 7 — Compliance & Monitoring

| Check | Method | Frequency | Responsible |
|-------|--------|-----------|-------------|
| Training completion | LMS report | Monthly | HR |
| Policy acknowledgment | e-signature | Annual | Compliance |
| Incident review | Audit log | Quarterly | Security |

### Step 8 — Review Schedule

| Trigger | Action |
|---------|--------|
| Annual review date | Full review by policy owner |
| Regulatory change | Impact assessment within 30 days |
| Significant incident | Review and update within 15 days |
| Organizational change | Review scope and applicability |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Policy topic | Yes | What the policy covers |
| Regulatory requirements | Recommended | Applicable laws/standards |
| Existing informal processes | Recommended | Current practices to formalize |
| Approval authority | Yes | Who approves the policy |

## Output

```markdown
# POL-IT-003: Acceptable Use Policy

**Version:** 1.0 | **Effective:** 2024-04-01 | **Review:** 2025-04-01
**Owner:** IT Director | **Approver:** CIO

## 1. Purpose
This policy defines acceptable use of company IT resources to protect
organizational assets and ensure compliance with data protection regulations.

## 2. Scope
Applies to all employees, contractors, and third parties who access
[Company] IT systems, networks, or data.

## 3. Definitions
[Key terms table]

## 4. Roles & Responsibilities
[RACI-style table]

## 5. Policy Statements
5.1 All users MUST use unique credentials...
5.2 Personal devices MUST be enrolled in MDM...

## 6. Procedures
[Step-by-step procedures for common scenarios]

## 7. Compliance Monitoring
[Audit schedule and methods]

## 8. Change Log
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2024-04-01 | IT Director | Initial release |
```

## Definition of Done

- [ ] Document control header complete
- [ ] Purpose and scope clearly defined
- [ ] Key terms defined to avoid ambiguity
- [ ] Roles and responsibilities assigned
- [ ] Policy statements use "must" language
- [ ] Procedures are step-by-step with responsible roles
- [ ] Compliance monitoring plan included
- [ ] Review schedule and change log present
