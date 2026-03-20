# Code: Implementation Playbook

Use this when you want Codex to move from planning into execution without drifting.

## Prompt

```text
Implement the task below with a production mindset.

Rules:
- inspect the repo before editing
- change the minimum credible surface
- keep user-visible behavior explicit
- run the most relevant verification available

Return:
1. what changed
2. files touched
3. verification run
4. remaining risks

Task:
[paste the task]
```

## Example

<details>
<summary>📋 Real-world prompt example</summary>

```text
Implement the task below with a production mindset.

Rules:
- inspect the repo before editing
- change the minimum credible surface
- keep user-visible behavior explicit
- run the most relevant verification available

Return:
1. what changed
2. files touched
3. verification run
4. remaining risks

Task:
Add a password reset endpoint to our Express API. The endpoint should:
- accept POST /auth/reset-password with { email }
- generate a 6-digit OTP valid for 15 minutes
- send the OTP via the existing email service (src/services/email.ts)
- store the hashed OTP in the users table (reset_token, reset_token_expires_at)
- return 200 regardless of whether the email exists (prevent enumeration)
```

</details>

