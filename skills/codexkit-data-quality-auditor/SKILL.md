---
name: codexkit-data-quality-auditor
description: Audit data quality across six DAMA DMBOK dimensions — Completeness, Accuracy, Consistency, Timeliness, Validity, Uniqueness. Produces a scored data quality report with issue log and remediation plan. Use when profiling datasets, onboarding new data sources, or building data quality gates.
---

# Data Quality Auditor

## When to Use

- Before building analytics or dashboards on a new data source
- When data issues cause downstream report errors
- During data migration or system integration
- When establishing data quality monitoring rules

## Procedure

### Step 1 — Scope & Profiling

Identify the dataset and context:
- Table/file name, row count, column count
- Business purpose: what decisions does this data support?
- Data owner: who is accountable?

Profile the data:
- Column types (string, numeric, date, boolean, null)
- Null rates per column
- Distinct value counts
- Min/Max/Mean for numerics
- Date range coverage

### Step 2 — Six-Dimension Assessment

Score each dimension 1–5:

| Dimension | Question | Score Method |
|-----------|----------|-------------|
| **Completeness** | Are all required fields populated? | % non-null for required fields |
| **Accuracy** | Do values represent reality? | Sample validation against source |
| **Consistency** | Do related fields agree? | Cross-field rule checks |
| **Timeliness** | Is data current enough for its purpose? | Max staleness vs requirement |
| **Validity** | Do values conform to allowed ranges/formats? | Format + range validation |
| **Uniqueness** | Are there unwanted duplicates? | Duplicate rate on key columns |

### Step 3 — Issue Log

For each issue found:

| # | Dimension | Column(s) | Issue Description | Severity | Records Affected | Example |
|---|-----------|-----------|-------------------|----------|-----------------|---------|
| 1 | Completeness | email | 12% null in required field | High | 1,200 | row 45: null |

Severity: Critical (blocks use) / High (degrades quality) / Medium (cosmetic) / Low (nice-to-fix)

### Step 4 — Remediation Plan

For each Critical/High issue:

| Issue | Root Cause | Fix | Owner | Deadline |
|-------|-----------|-----|-------|----------|
| Missing emails | Optional in old form | Backfill from CRM | Data Eng | Sprint 4 |

### Step 5 — Monitoring Rules

Define ongoing quality checks:
- Automated checks to run on each data load
- Alerting thresholds (if quality drops below X%, alert owner)
- Review cadence (weekly, monthly)

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Dataset or table | Yes | Name + access method |
| Business context | Yes | What this data is used for |
| Quality rules / expectations | Recommended | Any existing rules or SLAs |
| Sample size | Recommended | Full scan or % sample |

## Output

```markdown
## Data Quality Report — [Dataset Name]

### Summary
- **Dataset:** orders_2024
- **Rows:** 145,000 | **Columns:** 23
- **Overall Quality Score:** 3.8 / 5.0

### Dimension Scores

| Dimension | Score | Key Finding |
|-----------|-------|-------------|
| Completeness | 4/5 | 2 columns with >5% nulls |
| Accuracy | 3/5 | 3% of prices don't match catalog |
| Consistency | 4/5 | state vs zip mismatch in 1.2% |
| Timeliness | 5/5 | Data refreshed within SLA |
| Validity | 3/5 | 8% of emails fail format check |
| Uniqueness | 4/5 | 0.5% duplicate order IDs |

### Critical Issues
[Issue log table]

### Remediation Plan
[Fix plan with owners and deadlines]

### Monitoring Rules
[Automated checks to add]
```

## Definition of Done

- [ ] All six dimensions assessed and scored
- [ ] Issue log with severity and affected records
- [ ] Remediation plan for Critical/High issues
- [ ] Monitoring rules defined for ongoing quality
