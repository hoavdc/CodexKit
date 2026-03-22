# 4C Verification Checklist — Root Cause Analyzer

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] Each 'Why' in the chain is causally connected — not just correlated
- [ ] Contributing factors distinguish between necessary and sufficient causes
- [ ] Root cause is a system/process flaw, not an individual's action

## Completeness — Is it done?

- [ ] Problem statement includes who, what, when, where, and magnitude
- [ ] Multiple causal chains explored — not just the first plausible explanation
- [ ] Corrective AND preventive actions are both proposed

## Context-fit — Does it match?

- [ ] Analysis depth matches the severity and recurrence risk
- [ ] Method chosen (5 Whys, Fishbone, Fault Tree) suits the problem type
- [ ] Recommendations are within the team's control to implement

## Consequence — Is it safe to use?

- [ ] If only the corrective action is taken (not preventive), will this recur?
- [ ] Is the root cause systemic enough that other teams should be notified?
- [ ] If we fixed nothing, what's the expected frequency and impact of recurrence?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
