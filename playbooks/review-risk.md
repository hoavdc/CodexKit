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

## Example

<details>
<summary>📋 Real-world prompt example</summary>

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
PR #247: Add password reset flow

Summary:
- Added POST /auth/reset-password (generates OTP, sends email)
- Added POST /auth/verify-reset (validates OTP, returns temp token)
- Migration: alter users table — add reset_token VARCHAR, reset_token_expires_at TIMESTAMP
- New env var: RESET_TOKEN_TTL
- 12 unit tests added, no E2E test yet
- Feature flag: password-reset-v2 (off by default)
```

</details>

