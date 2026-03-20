# Legal Contract Intake Summary

> **How to use:** Fill in when a new contract request arrives. Pair with `codexkit-contract-intake-router` skill to auto-generate from email or form submissions. Use `codexkit-contract-risk-review` for the subsequent review.

## Request Overview

<!-- Basic facts about the contract request. All fields required. -->

| Field | Value |
|-------|-------|
| **Requester** | <!-- e.g. Sarah Chen, Sales --> |
| **Counterparty** | <!-- e.g. Acme Corp --> |
| **Agreement Type** | <!-- e.g. MSA, NDA, SOW, SaaS subscription, vendor agreement --> |
| **Estimated Value** | <!-- e.g. $120K/year --> |
| **Deadline** | <!-- e.g. Apr 1 (hard — vendor procurement closes) --> |
| **Urgency** | 🔴 Urgent / 🟡 Standard / 🟢 Low |

## Business Context

<!-- Why are we entering this agreement? 2–3 sentences max. -->
<!-- e.g. "Acme is our largest Q2 prospect. This MSA gates a $120K annual deal. Sales VP has committed to close by Apr 1." -->

## Missing Information

<!-- What's needed before legal can review? Each item needs an owner. -->

| # | Missing Item | Owner | Needed By |
|---|-------------|-------|-----------|
| 1 | | | |

## Risk Flags

<!-- Anything that stands out as unusual or high-risk? -->

| # | Flag | Reason | Severity |
|---|------|--------|----------|
| 1 | | | High / Medium / Low |

## Review Path

<!-- Who needs to approve, and in what order? -->

| Step | Approver | Lane | SLA |
|------|----------|------|-----|
| 1 | | Legal Counsel / Finance / Exec | <!-- e.g. 3 business days --> |

## Next Action

<!-- What happens right now? Who does what? -->
<!-- e.g. "Legal Ops routes to Senior Counsel for MSA review. Target: draft redline by Mar 25." -->

---

<details>
<summary>📋 Worked Example</summary>

## Request Overview
| Field | Value |
|-------|-------|
| **Requester** | Sarah Chen, Sales |
| **Counterparty** | Acme Corp |
| **Agreement Type** | Master Service Agreement (MSA) |
| **Estimated Value** | $120K/year |
| **Deadline** | Apr 1 (hard — vendor procurement window closes) |
| **Urgency** | 🔴 Urgent |

## Business Context
Acme is our largest Q2 enterprise prospect. This MSA is required before SOW execution. Sales VP committed to Apr 1 close; missing the date pushes to Q3.

## Missing Information
| # | Missing Item | Owner | Needed By |
|---|-------------|-------|-----------|
| 1 | Acme's data processing addendum | Sarah Chen | Mar 22 |
| 2 | Insurance certificate for $5M E&O | Finance (Tuan) | Mar 25 |

## Risk Flags
| # | Flag | Reason | Severity |
|---|------|--------|----------|
| 1 | Unlimited liability clause in draft | Acme's standard template has no liability cap | High |
| 2 | Governing law: Delaware | We prefer California; may need negotiation | Medium |

## Review Path
| Step | Approver | Lane | SLA |
|------|----------|------|-----|
| 1 | David Tran | Legal Counsel | 3 business days |
| 2 | VP Finance | Finance sign-off (>$100K) | 2 business days |

## Next Action
Legal Ops routes to David Tran for MSA review. Target: draft redline ready by Mar 25, allowing 5 business days for negotiation before Apr 1 deadline.

</details>
