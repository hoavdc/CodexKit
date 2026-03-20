---
name: codexkit-audit-readiness-checker
description: Assess organizational readiness for financial audits (internal or external). Map assertions to account balances, check evidence completeness, score readiness using a Red/Amber/Green framework, and generate a remediation timeline. Aligned with SOX, IFRS, and GAAP audit standards. Use before scheduled audits or when preparing for first-time compliance.
---

# Audit Readiness Checker

## When to Use

- 60–90 days before a scheduled external audit
- When preparing for SOX compliance for the first time
- After prior audit findings need remediation verification
- When internal audit wants a pre-flight check

## Procedure

### Step 1 — Map Assertions to Accounts

For each material account balance, map the relevant audit assertions:

| Assertion | What It Tests |
|-----------|--------------|
| Existence/Occurrence | Did the transaction/asset actually happen/exist? |
| Completeness | Are all transactions recorded? |
| Valuation/Accuracy | Are amounts recorded correctly? |
| Rights & Obligations | Does the entity own/owe the amounts? |
| Presentation & Disclosure | Is it properly classified and disclosed? |
| Cut-off | Are transactions in the correct period? |

### Step 2 — Check Evidence Completeness

For each assertion per account, verify supporting evidence:
1. Source documents (invoices, contracts, bank statements)
2. Reconciliations (bank, intercompany, sub-ledger to GL)
3. Approvals and authorization records
4. Third-party confirmations
5. Management representations and estimates documentation

### Step 3 — Score Readiness

| Score | Criteria |
|-------|----------|
| 🟢 Green | All evidence available, reconciled, no open items |
| 🟡 Amber | Evidence partially available, minor gaps, reconciliation in progress |
| 🔴 Red | Missing evidence, unreconciled, prior audit finding unresolved |

### Step 4 — Generate Remediation Plan

For each 🟡 and 🔴 item:
1. Describe the gap
2. Assign an owner
3. Set a deadline (must be before audit fieldwork)
4. Define the evidence deliverable

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Trial balance | Yes | Account list with balances |
| Prior audit findings | Recommended | Management letter or audit report |
| Audit timeline | Yes | Fieldwork start date |
| Supporting schedules | Recommended | Reconciliations, roll-forwards |

## Output

```markdown
## Audit Readiness Scorecard — [Entity] — [Audit Period]

### Overall Score: 🟡 AMBER (72% ready — 12 weeks to fieldwork)

### By Account Area

| Account | Assertion | Evidence | Status | Gap | Owner | Deadline |
|---------|-----------|----------|--------|-----|-------|----------|
| Cash | Existence | Bank confirmations | 🟢 | — | — | — |
| Cash | Completeness | Bank reconciliation | 🟢 | — | — | — |
| AR | Existence | Confirmations | 🟡 | 3 confirmations pending | AR Lead | Week 8 |
| AR | Valuation | Aging + allowance | 🔴 | Allowance model not updated | Controller | Week 6 |
| Revenue | Cut-off | Shipping docs | 🟢 | — | — | — |
| PP&E | Existence | Physical count | 🔴 | Count not scheduled | Ops Mgr | Week 4 |

### Prior Findings Status

| Finding | Year | Status | Remediation |
|---------|------|--------|-------------|
| Inventory count procedures | 2024 | 🟡 In progress | New SOP drafted, testing pending |
| AR confirmation process | 2024 | 🟢 Resolved | Automated via NetSuite |

### Remediation Timeline

| Week | Action | Owner |
|------|--------|-------|
| Week 4 | Schedule PP&E physical count | Ops Manager |
| Week 6 | Update AR allowance model | Controller |
| Week 8 | Complete AR confirmations | AR Lead |
| Week 10 | Final reconciliation review | CFO |
| Week 12 | Audit fieldwork begins | — |
```

## Definition of Done

- [ ] All material accounts mapped to audit assertions
- [ ] Evidence completeness checked per assertion
- [ ] RAG status assigned to every account/assertion combination
- [ ] Prior audit findings tracked with remediation status
- [ ] Remediation plan with owners and deadlines for all 🟡/🔴 items
- [ ] Timeline fits before audit fieldwork start

## Examples

### Prompt

```text
Our external audit fieldwork starts in 12 weeks for FY2025.
Here is our trial balance: [paste]. Prior year findings: AR confirmation delays, inventory count gaps.
Assess our audit readiness and create a remediation plan.
```
