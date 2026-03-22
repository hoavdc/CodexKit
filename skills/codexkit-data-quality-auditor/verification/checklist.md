# 4C Verification Checklist — Data Quality Auditor

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] Scoring methodology is consistent across all six DAMA dimensions
- [ ] Null rate calculations exclude columns that legitimately allow nulls
- [ ] Duplicate detection uses the correct uniqueness key, not arbitrary columns

## Completeness — Is it done?

- [ ] All six dimensions assessed: Completeness, Accuracy, Consistency, Timeliness, Validity, Uniqueness
- [ ] Issue log includes severity, affected records count, and example
- [ ] Remediation plan addresses all Critical and High issues

## Context-fit — Does it match?

- [ ] Quality thresholds are calibrated to the data's business purpose
- [ ] Audit scope matches what's feasible (full scan vs sample for 100M+ row tables)
- [ ] Recommendations are actionable by the data team, not aspirational

## Consequence — Is it safe to use?

- [ ] If downstream dashboards use this data as-is, which metrics would be wrong?
- [ ] If the worst quality issue is ignored for 3 months, what is the business impact?
- [ ] Are there regulatory implications for any of the quality failures?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
