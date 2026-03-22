# 4C Verification Checklist — A/B Test Planner

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] Sample size calculation uses the correct MDE, baseline rate, and significance level
- [ ] Randomization unit matches the analysis unit (user-level, not session-level for most tests)
- [ ] Primary metric is defined before the test starts — no post-hoc metric shopping

## Completeness — Is it done?

- [ ] Hypothesis, primary metric, guardrail metrics, and test duration are all defined
- [ ] Power analysis determines minimum sample size and test duration
- [ ] Rollback criteria and escalation path are documented

## Context-fit — Does it match?

- [ ] Test duration accounts for weekly/monthly traffic patterns
- [ ] MDE is meaningful from a business perspective, not just statistically detectable
- [ ] Guardrail metrics prevent optimizing the primary metric at the expense of user experience

## Consequence — Is it safe to use?

- [ ] If the test runs 20% longer than planned, what's the cost?
- [ ] If we ship the winner without statistical significance, what's the false-positive risk?
- [ ] If the variation loses, is there a learning that informs the next test?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
