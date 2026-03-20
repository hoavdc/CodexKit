# Delegate: Cloud Task Playbook

Use this when you want to split work across multiple Codex runs or worktrees.

## Prompt

```text
Break the work below into safe delegated tasks.

Requirements:
- identify the immediate blocking task that must stay local
- list sidecar tasks that can run in parallel
- give each delegated task a write scope
- define the exact output expected from each worker

Task:
[paste the larger goal]
```

## Example

<details>
<summary>📋 Real-world prompt example</summary>

```text
Break the work below into safe delegated tasks.

Requirements:
- identify the immediate blocking task that must stay local
- list sidecar tasks that can run in parallel
- give each delegated task a write scope
- define the exact output expected from each worker

Task:
Build a complete password reset feature for our Express + React app:
- Backend: new endpoint, OTP generation, email sending, token storage
- Frontend: reset request form, OTP input page, new password page
- Tests: unit tests for auth service, E2E test for full flow
- Docs: update API docs, add user guide section
```

</details>

