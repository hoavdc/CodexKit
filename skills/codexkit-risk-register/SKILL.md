---
name: codexkit-risk-register
description: Build and maintain a project Risk Register per PMBOK 8 Risk Performance Domain. Identify risks, assess probability and impact, define response strategies, and track residual risk. Use throughout the project lifecycle — not just at planning. Do not use for operational incident response or security vulnerability scanning.
version: 1.0.0
---

# Risk Register Manager

## Purpose

Systematically identify, assess, and manage project risks using a structured register with probability/impact scoring and defined response strategies.

## When to use

- project kick-off to establish the initial risk baseline
- sprint or milestone reviews to update and add emerging risks
- before major decisions to assess risk exposure
- when stakeholders request a risk assessment report

## When not to use

- live incident response or post-mortem analysis
- security vulnerability scanning (use security tools)
- personal task risk assessment

## Inputs

- project scope, objectives, and constraints
- project type (predictive / adaptive / hybrid)
- stakeholder list and their risk tolerance
- known assumptions and dependencies
- lessons learned from similar projects (if available)

## Procedure

1. **Identify risks** using multiple sources:
   - Internal: technical complexity, resource gaps, schedule pressure, budget
   - External: market shifts, regulatory changes, vendor reliability, geopolitical
   - PMBOK 8 emphasis: sustainability risks (ESG, climate, social impact)
   - Techniques: brainstorming, PESTLE analysis, Risk Breakdown Structure (RBS)
2. **Assess each risk** qualitatively:
   - Probability: Very Low (0.1) / Low (0.3) / Medium (0.5) / High (0.7) / Very High (0.9)
   - Impact: Very Low (0.05) / Low (0.1) / Medium (0.2) / High (0.4) / Very High (0.8)
   - Risk Score = Probability × Impact
   - Red zone (≥ 0.25): immediate response required
   - Yellow zone: response plan needed
   - Green zone: monitor only
3. **Define response strategy**:
   - For threats: Avoid / Transfer / Mitigate / Accept (active or passive)
   - For opportunities: Exploit / Share / Enhance / Accept
4. **Assign ownership** — every risk has one named owner.
5. **Track residual risk** — after response, re-score to verify reduction.
6. **SAFe integration** — for SAFe teams, use ROAM board:
   - R = Resolved | O = Owned | A = Accepted | M = Mitigated

## Output

- risk register table: ID | Category | Description | Trigger | Probability | Impact | Score | Owner | Response Strategy | Residual Risk | Status
- risk heat map summary (red/yellow/green distribution)
- top 10 risks with detailed response plans
- escalation list for sponsor or steering committee
- risk trend over time (risk burn-down if tracked across sprints)

## Definition of done

- every identified risk has a probability, impact, and score
- every red/yellow risk has a named owner and defined response strategy
- residual risk is assessed for all mitigated risks
- register is reviewable by stakeholders

## Examples

- "Build an initial risk register for a 6-month ERP migration project."
- "Update the risk register after Sprint 5 — add 3 new risks we discovered."
- "We have 15 risks but no response plans. Help me define strategies for the top 10."
