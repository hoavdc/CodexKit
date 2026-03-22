---
name: codexkit-customer-journey-mapper
description: Map the end-to-end customer journey across awareness, consideration, purchase, onboarding, adoption, retention, and advocacy stages. Identify touchpoints, pain points, emotions, and Moments of Truth per stage. Use when designing or improving customer experience. Do not use for internal employee process mapping — use process-mapper instead.
version: 1.0.0
category: knowledge
---

# Customer Journey Mapper

## Purpose

Visualize and analyze the complete customer experience — from first awareness to advocacy — identifying pain points, opportunities, and moments that drive loyalty or churn.

## When to use

- designing or redesigning the customer experience for a product or service
- investigating why customers churn at a specific stage
- aligning marketing, sales, and CS teams around the customer lifecycle
- preparing for a CX improvement initiative

## When not to use

- internal process mapping (use process-mapper)
- sales pipeline or CRM workflow design
- individual customer troubleshooting

## Inputs

- customer persona(s) — who is the journey for?
- product or service being mapped
- known lifecycle stages (or use the default 7-stage model)
- available customer data: NPS, CSAT, support tickets, analytics
- known pain points or complaints from customers
- current touchpoints across channels

## Procedure

1. **Define the persona** — who are we mapping the journey for?
   - Demographics, goals, frustrations, and decision drivers
2. **Map 7 lifecycle stages** (adapt as needed):
   - Awareness → Consideration → Purchase → Onboarding → Adoption → Retention → Advocacy
3. **For each stage, document**:
   - **Customer goal**: what are they trying to accomplish?
   - **Actions**: what specific things do they do?
   - **Touchpoints**: where do they interact with us? (website, app, email, support, person)
   - **Emotions**: how do they feel? (excited, confused, frustrated, delighted)
   - **Pain points**: what barriers or friction do they encounter?
   - **Moments of Truth (MoT)**: decisions that make-or-break the relationship
4. **Identify Moments of Truth** — classify each:
   - Zero MoT (ZMOT): when they first discover you
   - First MoT: first purchase or sign-up decision
   - Second MoT: first real usage experience
   - Ultimate MoT: when they decide to advocate or churn
5. **Score each stage** using available data:
   - CSAT or NPS per stage
   - Drop-off rates between stages
   - Average time-in-stage
   - Support ticket volume per stage
6. **Identify improvement opportunities** — prioritize by:
   - Impact on retention or revenue
   - Effort to fix
   - Strategic alignment

## Output

- journey map table (7 stages × 6 dimensions)
- Moments of Truth identification and classification
- emotion curve visualization (high/medium/low per stage)
- pain point severity ranking
- improvement opportunities prioritized by impact × effort
- recommended CX metrics per stage

## Definition of done

- all lifecycle stages are mapped with goals, touchpoints, and pain points
- Moments of Truth are identified and classified
- at least one data metric is mapped per stage (or flagged as "data needed")
- improvement recommendations are prioritized

## Examples

- "Map the customer journey for our SaaS product from first visit to annual renewal."
- "We're losing 40% of users during onboarding. Map that stage in detail."
- "Create a journey map comparing the experience of SMB vs. Enterprise customers."

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
