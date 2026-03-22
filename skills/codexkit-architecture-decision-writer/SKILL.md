---
name: codexkit-architecture-decision-writer
description: Write Architecture Decision Records (ADRs) following the Michael Nygard format. Captures context, options considered, decision rationale, and consequences. Use when making technology choices, framework selections, or any architectural decision that future developers need to understand.
version: 1.0.0
category: knowledge
---

# Architecture Decision Writer

## When to Use

- When choosing between technology options (framework, database, API style)
- When making structural changes that affect multiple teams
- When a decision needs to be documented for future reference
- When onboarding new developers who ask "why did we do it this way?"

## Procedure

### Step 1 — Status & Context

Set the ADR status:
- **Proposed** — under discussion
- **Accepted** — decision made, implementation in progress
- **Superseded by ADR-XXX** — replaced by a later decision
- **Deprecated** — no longer relevant

Write the context:
- What is the current situation?
- What forces are at play? (technical constraints, business requirements, team skills)
- What problem triggers this decision?

### Step 2 — Decision Drivers

List the factors influencing this decision:
- Must-haves (non-negotiable requirements)
- Nice-to-haves (preferences)
- Constraints (timeline, budget, team expertise)

### Step 3 — Options Considered

For each option:

| Criteria | Option A | Option B | Option C |
|----------|----------|----------|----------|
| [Criterion 1] | ✅ Good | ⚠️ Partial | ❌ Poor |
| [Criterion 2] | ⚠️ Partial | ✅ Good | ✅ Good |
| Learning curve | Low | Medium | High |
| Community & Ecosystem | Large | Medium | Small |
| Long-term viability | Stable | Growing | Uncertain |

### Step 4 — Decision

State the decision clearly:
> We will use **[Option X]** because [concise rationale].

The rationale should reference:
- Which decision drivers tipped the balance
- What trade-offs were accepted
- What was explicitly rejected and why

### Step 5 — Consequences

| Type | Consequence |
|------|------------|
| ✅ Positive | [Benefit of this decision] |
| ⚠️ Risk | [Risk accepted, with mitigation] |
| ❌ Trade-off | [What we lose by choosing this] |
| 🔄 Follow-up | [Actions needed as a result] |

### Step 6 — Review

Set a review date (6–12 months) and conditions that would trigger reconsideration:
- Technology landscape changes significantly
- Team composition changes
- Performance requirements change

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Decision topic | Yes | What architectural question is being decided |
| Options | Yes | At least 2 options considered |
| Constraints | Yes | Technical, business, or team constraints |
| Stakeholders | Recommended | Who is affected by this decision |

## Output

```markdown
# ADR-007: Use PostgreSQL for Primary Data Store

**Status:** Accepted
**Date:** 2024-03-15
**Deciders:** Engineering Lead, Platform Team

## Context
We are building a new order management system that requires ACID transactions,
complex joins across 15+ tables, and support for JSON documents for flexible
order metadata. Expected write volume: ~500 TPS peak.

## Decision Drivers
- Must support ACID transactions for financial data
- Must handle mixed relational + document workloads
- Team has strong SQL expertise (8/10 engineers)
- Must integrate with existing data warehouse (Snowflake)

## Options Considered
| Criteria | PostgreSQL | MongoDB | CockroachDB |
|----------|-----------|---------|-------------|
| ACID | ✅ Full | ⚠️ Document-level | ✅ Full |
| JSON support | ✅ JSONB | ✅ Native | ✅ JSONB |
| Team expertise | ✅ Strong | ⚠️ Moderate | ❌ Low |
| Operational cost | ✅ Low | ⚠️ Medium | ❌ High |
| Horizontal scaling | ⚠️ Read replicas | ✅ Native | ✅ Native |

## Decision
We will use **PostgreSQL 16** with JSONB columns for flexible metadata.

## Consequences
- ✅ Leverage existing team SQL expertise — no ramp-up time
- ✅ Mature ecosystem, extensive tooling
- ⚠️ Horizontal write scaling limited — acceptable for projected 500 TPS
- 🔄 Set up read replicas for reporting workloads
- 📅 Review in 12 months if write volume exceeds 2,000 TPS
```

## Definition of Done

- [ ] Context clearly describes the situation and forces
- [ ] At least 2 options compared with criteria
- [ ] Decision stated clearly with rationale
- [ ] Consequences include positives, risks, and trade-offs
- [ ] Review date and trigger conditions set

## Quality Criteria

- [ ] All claims reference specific frameworks, standards, or quantifiable data
- [ ] Content matches the stated audience's expertise level
- [ ] Recommendations are actionable — each includes a concrete next step
- [ ] No unsupported assertions or generic filler language

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do referenced frameworks and standards match their official definitions? |
| **Completeness** | Are all key concepts covered without significant gaps for the stated audience? |
| **Context-fit** | Would this be useful for someone new to this domain, or is it too advanced/too basic? |
| **Consequence** | If a stakeholder acted on this immediately, what could they misinterpret? |

## Edge Cases

- **Conflicting frameworks** — State which framework takes precedence and why. Document the trade-off explicitly.
- **Rapidly changing domain** — Note information currency date. Flag sections likely to need updates.
- **Audience has mixed expertise levels** — Provide a glossary and mark advanced sections as optional.

## Changelog

- v1.0.0 — Initial release
