# Review: Risk Playbook

Use this when you need a review that prioritizes bugs and regressions over style commentary.

## Prompt

```text
Review this change with a risk-first mindset.

Focus on:
- correctness
- user-visible regressions
- data or migration hazards
- missing tests
- rollout and operational gaps

Output format:
- findings first, ordered by severity
- each finding should include why it matters
- keep summary short

Change to review:
[paste diff, branch summary, or PR description]
```
