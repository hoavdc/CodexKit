# Common Mistakes — Survey Analyzer

> Anti-patterns to watch for when using the Survey Analyzer skill.

## 1. Over-reading small samples

**What goes wrong:** Drawing conclusions from 12 responses in a department of 15 — treating it as statistically significant

**How to fix it:** Flag when n < 30. Report as 'directional' not 'conclusive'. Show confidence intervals.

## 2. Ignoring non-response bias

**What goes wrong:** 42% response rate treated as representative without acknowledging who didn't respond

**How to fix it:** Always state response rate. Compare responders vs non-responders on known attributes.

## 3. Cherry-picking positive results

**What goes wrong:** Highlighting high scores while burying problematic trends in appendices

**How to fix it:** Lead with top 3 wins AND top 3 concerns. Let leadership decide priorities.
