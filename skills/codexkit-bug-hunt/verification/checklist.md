# 4C Verification Checklist — Bug Hunt

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] Reproduction steps produce the exact observed failure, not something similar
- [ ] Root cause hypothesis explains the mechanism, not just the symptom
- [ ] Patch addresses the root cause, not a surface-level workaround

## Completeness — Is it done?

- [ ] Expected vs actual behavior is clearly documented
- [ ] Environment details are captured (OS, versions, config)
- [ ] Regression testing confirms the fix doesn't break adjacent functionality

## Context-fit — Does it match?

- [ ] The fix is proportional to the bug's severity — no over-engineering for cosmetic issues
- [ ] Related code areas are inspected for similar patterns
- [ ] Fix follows existing code style and conventions

## Consequence — Is it safe to use?

- [ ] If this fix ships to production and the root cause was wrong, what else could break?
- [ ] If we revert this fix, is the rollback path clean?
- [ ] Are there other code paths that share the same root cause?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
