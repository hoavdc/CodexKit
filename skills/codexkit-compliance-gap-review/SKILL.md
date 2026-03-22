---
name: codexkit-compliance-gap-review
description: Compare policies, procedures, onboarding files, or operating evidence against a named compliance framework such as AML/KYC, privacy, internal controls, or audit readiness. Use when a team needs a gap matrix, control checklist, remediation priorities, or evidence request list. Do not use when no target framework is specified or when formal legal or regulatory sign-off is required.
version: 1.0.0
category: verification
---

# Compliance Gap Review

## Purpose

Transform a vague compliance concern into a concrete gap assessment and remediation view.

## When to use

- A team needs to assess readiness against AML, KYC, privacy, audit, or control expectations.
- Policies and evidence exist but no one has mapped gaps clearly.
- Leadership needs remediation priorities, not just a checklist dump.

## When not to use

- No target framework, policy baseline, or standard is named.
- The request requires a formal legal opinion or regulator submission.

## Inputs

- named framework, regulation, or internal control standard
- current policies, procedures, forms, or evidence
- scope: business unit, process, customer segment, or geography
- known incidents, findings, or deadlines

## Procedure

1. Define the exact framework and scope before evaluating anything.
2. Break the framework into control requirements or evidence expectations.
3. Compare current evidence against each requirement.
4. Rate each gap by severity, exposure, and remediation effort.
5. Separate high-risk gaps from documentation-only gaps.
6. Build a practical 30/60/90-day remediation sequence and evidence request list.
7. Escalate areas that need specialist legal or regulatory review.

## Output

- control or requirement matrix
- current-state evidence summary
- gap list with severity and rationale
- remediation plan with owners and priorities
- evidence request list for unresolved areas

## Definition of done

- The target framework is explicit.
- Gaps are mapped to concrete requirements, not vague opinions.
- The output shows what to fix first and what evidence is still missing.

## Examples

- "Compare our onboarding process to AML and KYC expectations and tell me the top gaps."
- "Assess our privacy operating procedures against our internal control checklist."

## Quality Criteria

- [ ] Every finding is tied to a specific evidence source (log, test, metric)
- [ ] Pass/fail criteria are binary and measurable — no subjective judgments
- [ ] Severity levels are assigned with clear thresholds
- [ ] Remediation steps are provided for all critical and high findings

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are all pass/fail criteria applied against the correct standard or rule? |
| **Completeness** | Were all required dimensions or checklist items evaluated? |
| **Context-fit** | Does the verification scope match the actual risk level of the deliverable? |
| **Consequence** | If this passed verification but had a hidden flaw, what is the worst-case impact? |

## Edge Cases

- **Incomplete data for full assessment** — Document which checks were limited and flag for re-verification when data becomes available.
- **Ambiguous pass/fail criteria** — Request clarification from the standard owner before scoring. Mark as 'Needs Review'.
- **Multiple overlapping standards** — Identify the governing standard and note where others diverge.

## Changelog

- v1.0.0 — Initial release
