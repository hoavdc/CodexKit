---
name: codexkit-legal-due-diligence
description: Conduct structured legal due diligence for M&A, joint ventures, or investment transactions. Cover all 9 workstreams — Corporate, Contracts, IP, Litigation, Regulatory, Employment, Tax, Environmental, and Data Privacy. Produce a risk matrix with deal-breaker flags and closing conditions. Use when evaluating a target or counterparty.
---

# Legal Due Diligence Analyst

## When to Use

- Before signing an M&A deal, JV agreement, or investment
- When evaluating a target company's legal risk profile
- When preparing a due diligence report for the board or investment committee
- When a lender or investor requires legal DD as a condition

## Procedure

### Step 1 — Scope and Materiality

1. Confirm deal type: M&A (asset/share), JV, Investment, Licensing
2. Define materiality thresholds (e.g., contracts > $50K, litigation > $100K)
3. Set access parameters: full data room, limited access, or desktop review

### Step 2 — 9 Workstream Review

| # | Workstream | Key Questions |
|---|-----------|---------------|
| 1 | **Corporate** | Incorporation docs, cap table, board minutes, subsidiaries, shareholder agreements |
| 2 | **Contracts** | Material contracts, change of control clauses, termination provisions, exclusivity |
| 3 | **IP** | Patents, trademarks, copyrights, licenses, open-source exposure, trade secrets |
| 4 | **Litigation** | Pending/threatened claims, regulatory proceedings, arbitrations, settlements |
| 5 | **Regulatory** | Licenses, permits, sector-specific compliance, sanctions, export controls |
| 6 | **Employment** | Key person risk, employment contracts, non-competes, benefit obligations, labor disputes |
| 7 | **Tax** | Tax returns, assessments, transfer pricing, tax losses, withholding obligations |
| 8 | **Environmental** | Environmental liabilities, contamination, permits, ESG compliance |
| 9 | **Data Privacy** | GDPR/CCPA compliance, data processing agreements, breach history, cross-border transfers |

### Step 3 — Risk Assessment

For each finding, classify:

| Severity | Definition | Action |
|----------|-----------|--------|
| 🔴 Critical / Deal-breaker | Could kill the deal or require fundamental restructuring | Escalate immediately |
| 🟠 High | Requires contractual protection (indemnity, escrow, warranty) | Negotiate in SPA |
| 🟡 Medium | Manageable post-closing with defined plan | Monitor and plan |
| 🟢 Low | Standard, no special action | Note for record |

### Step 4 — Closing Conditions

Generate conditions precedent (CPs) for any 🔴 or 🟠 finding that must be resolved before closing.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Deal type | Yes | M&A / JV / Investment / Licensing |
| Target company docs | Yes | Data room or document list |
| Materiality threshold | Recommended | Currency amount |
| Prior DD reports | Optional | If available from advisors |

## Output

```markdown
## Legal Due Diligence Report — [Target] — [Date]

### Executive Summary

Deal type: Share acquisition (100%)
Overall risk assessment: 🟡 MEDIUM — proceed with protections
Key concerns: 2 critical IP issues, 1 pending litigation

### Risk Matrix

| # | Workstream | Finding | Severity | Recommendation |
|---|-----------|---------|----------|----------------|
| 1 | IP | Patent #3421 expires in 6 months, core to product | 🔴 Critical | Require IP warranty + escrow |
| 2 | IP | Open-source GPL dependency in core module | 🟠 High | Indemnity clause in SPA |
| 3 | Litigation | Customer lawsuit pending ($200K claim) | 🟠 High | Seller indemnity, escrow $250K |
| 4 | Employment | CTO has no non-compete agreement | 🟡 Medium | New contract as CP |
| 5 | Tax | Transfer pricing study outdated (2022) | 🟡 Medium | Update post-closing |
| 6 | Data Privacy | No DPA with 3 key processors | 🟡 Medium | Execute DPAs pre-closing |
| 7 | Corporate | All filings current, no issues | 🟢 Low | — |

### Deal-Breaker Flags

1. 🔴 Patent #3421 expiration — requires renewal confirmation or IP warranty
2. 🔴 None other — deal can proceed with identified protections

### Conditions Precedent

| # | Condition | Owner | Deadline |
|---|-----------|-------|----------|
| 1 | Patent renewal confirmation | Seller | Before signing |
| 2 | CTO employment + non-compete | Seller | Before closing |
| 3 | DPAs with 3 processors executed | Seller | Before closing |

### Recommended SPA Protections

- IP warranty and indemnity (uncapped for 3 years)
- Litigation escrow: $250K
- General warranty period: 24 months
- W&I insurance recommended
```

## Definition of Done

- [ ] All 9 workstreams reviewed with findings documented
- [ ] Risk matrix with severity classification for each finding
- [ ] Deal-breaker flags clearly called out
- [ ] Conditions precedent generated for 🔴/🟠 findings
- [ ] SPA protection recommendations provided
- [ ] Executive summary with overall risk assessment

## Examples

### Prompt

```text
We are acquiring 100% shares of TechCo Ltd.
Here is the data room summary: [paste document list]
Deal size: $5M. Materiality: $50K.
Key concern: their main product relies on a patent expiring soon.
Conduct a legal due diligence and flag deal-breakers.
```
