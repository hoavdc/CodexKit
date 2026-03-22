# 4C Verification Checklist — Incident Postmortem

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] Timeline events are verified against logs, not memory alone
- [ ] 5 Whys reaches a systemic cause, not an individual's mistake
- [ ] Impact numbers (users, duration, revenue) come from monitoring data

## Completeness — Is it done?

- [ ] Timeline covers detection → response → resolution → follow-up
- [ ] Action items have types (prevent / detect / mitigate), owners, and deadlines
- [ ] Contributing factors include both technical and process gaps

## Context-fit — Does it match?

- [ ] Postmortem depth is proportional to incident severity (SEV1 gets full analysis)
- [ ] Language is blameless — no individual named as the cause
- [ ] Audience can understand without deep system knowledge

## Consequence — Is it safe to use?

- [ ] If none of the action items were completed, how likely is recurrence?
- [ ] Is there a single action item that would prevent 80% of similar incidents?
- [ ] If this postmortem were published externally, would it be embarrassing?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
