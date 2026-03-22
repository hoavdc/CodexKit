---
name: codexkit-procurement-rfp-writer
description: Write structured Requests for Proposal (RFP) or Requests for Quotation (RFQ) aligned with ISO 20400 sustainable procurement principles. Cover scope, technical requirements, evaluation methodology, and commercial terms. Use when sourcing vendors, services, or equipment.
version: 1.0.0
category: scaffolding
---

# Procurement RFP Writer

## When to Use

- When sourcing new vendors, services, or equipment
- When competitive bidding is required by policy
- When replacing an incumbent supplier
- When standardizing procurement documentation

## Procedure

### Step 1 — Define Scope

1. Background and context for the procurement
2. Objectives and desired outcomes
3. Scope of work or supply (in/out of scope)
4. Contract duration and renewal options
5. Budget range (if disclosed)

### Step 2 — Technical Requirements

1. Mandatory requirements (must-have)
2. Desirable requirements (nice-to-have)
3. Technical specifications or standards
4. Integration requirements with existing systems
5. SLA expectations (uptime, response time, quality)

### Step 3 — Commercial Terms

1. Pricing model: fixed, T&M, unit-based, subscription
2. Payment terms and milestones
3. Warranty and liability provisions
4. Insurance requirements
5. Termination and exit provisions

### Step 4 — Evaluation Methodology

| Criterion | Weight | Scoring |
|-----------|--------|---------|
| Technical capability | 35% | Scored 1–5 per requirement |
| Price/commercial | 30% | Lowest-price or best-value formula |
| Experience/references | 15% | Past performance, case studies |
| Sustainability/ESG | 10% | Environmental and social criteria |
| Implementation plan | 10% | Timeline, resources, risk mitigation |

### Step 5 — Submission Instructions

1. Submission deadline and format
2. Questions and clarifications process
3. Contact person and communication rules
4. Presentation/demo requirements (if any)
5. Confidentiality and non-disclosure requirements

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Requirements specification | Yes | Detailed scope document |
| Budget range | Recommended | Currency range |
| Evaluation criteria and weights | Recommended | Matrix |
| Timeline | Yes | Key dates |

## Output

```markdown
## Request for Proposal — [Title]

### 1. Introduction
[Company] invites proposals for [scope] to support [objective].
Contract period: [duration] with [renewal] option.

### 2. Scope of Work
#### In Scope
- [Item 1]
- [Item 2]
#### Out of Scope
- [Item A]

### 3. Technical Requirements
#### Mandatory (M) / Desirable (D)

| # | Requirement | M/D | Response |
|---|-------------|-----|----------|
| 1 | [Requirement] | M | |
| 2 | [Requirement] | M | |
| 3 | [Requirement] | D | |

### 4. Commercial Proposal
Please provide pricing in the following format:
| Item | Unit | Qty | Unit Price | Total |
|------|------|-----|-----------|-------|
| | | | | |

### 5. Evaluation Criteria
| Criterion | Weight |
|-----------|--------|
| Technical capability | 35% |
| Commercial | 30% |
| Experience | 15% |
| Sustainability | 10% |
| Implementation | 10% |

### 6. Timeline
| Milestone | Date |
|-----------|------|
| RFP issued | [Date] |
| Q&A deadline | [Date] |
| Submission deadline | [Date] |
| Evaluation | [Date range] |
| Award notification | [Date] |

### 7. Submission Instructions
- Format: PDF, max [X] pages
- Email to: [contact]
- Subject line: "RFP Response — [Title]"
```

## Definition of Done

- [ ] Clear scope with in/out boundaries
- [ ] Requirements classified as mandatory/desirable
- [ ] Evaluation methodology with weighted criteria
- [ ] Commercial terms and pricing template
- [ ] Timeline with all key dates
- [ ] Submission instructions complete

## Examples

### Prompt

```text
We need to source a new CRM system for 200 users.
Budget: $50K–$80K annual. Contract: 3 years.
Key requirements: Salesforce or HubSpot tier, API integration, GDPR compliance.
Write a complete RFP document.
```

## Quality Criteria

- [ ] All placeholder sections are filled with domain-specific content
- [ ] Structure follows the relevant industry standard or framework
- [ ] Language matches target audience (technical / executive / legal)
- [ ] Output is ready for review — not a rough draft requiring major rework

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the draft structure follow the stated framework or industry standard? |
| **Completeness** | Are all required sections present with substantive (not placeholder) content? |
| **Context-fit** | Does tone, detail level, and terminology match the intended audience? |
| **Consequence** | If sent to the intended recipient without further editing, what would fail? |

## Edge Cases

- **No existing template for this type** — Use the closest available template and document all customizations made.
- **Stakeholder requirements conflict** — Flag conflicts explicitly in the draft. Do not silently choose one requirement over another.
- **Output required in multiple formats** — Produce the canonical format first, then derive others. Note any formatting limitations.

## Changelog

- v1.0.0 — Initial release
