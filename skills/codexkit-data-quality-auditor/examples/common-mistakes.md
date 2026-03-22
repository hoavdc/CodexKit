# Common Mistakes — Data Quality Auditor

> Anti-patterns to watch for when using the Data Quality Auditor skill.

## 1. Flagging every null as a problem

**What goes wrong:** Optional fields reported as quality failures — noise overwhelms signal

**How to fix it:** Distinguish required fields (nulls = issue) from optional (nulls = expected)

## 2. No root cause investigation

**What goes wrong:** '12% of emails are null' without understanding why — data entry? migration? system bug?

**How to fix it:** For every High/Critical issue, trace back to the source: where does the bad data enter?

## 3. Audit without follow-up plan

**What goes wrong:** Beautiful report, no remediation steps, issues never get fixed

**How to fix it:** Every issue needs: fix + owner + deadline. Review cadence established.
