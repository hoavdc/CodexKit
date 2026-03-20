# Release: Preparation Playbook

Use this before cutting a release, demo branch, or production rollout.

## Prompt

```text
Prepare this change for release.

Check:
- build and test readiness
- migrations or config changes
- docs that must be updated
- release notes
- rollback or containment plan

Return:
1. release blockers
2. ready-to-ship checklist
3. changelog draft

Release scope:
[paste summary]
```

## Example

<details>
<summary>📋 Real-world prompt example</summary>

```text
Prepare this change for release.

Check:
- build and test readiness
- migrations or config changes
- docs that must be updated
- release notes
- rollback or containment plan

Return:
1. release blockers
2. ready-to-ship checklist
3. changelog draft

Release scope:
v2.3.1 — Password reset feature
- New endpoint: POST /auth/reset-password
- New endpoint: POST /auth/verify-reset
- Migration: adds reset_token and reset_token_expires_at to users table
- New env var: RESET_TOKEN_TTL (default 15 min)
- Frontend: 3 new pages (request, verify, confirm)
- Feature flag: password-reset-v2
```

</details>

