# Debug: Production Issue Playbook

Use this when a bug is urgent and you need a reproducible path to a safe fix.

## Prompt

```text
Investigate the issue below as a production bug.

Required output:
1. observed versus expected behavior
2. probable failure boundary
3. cheapest reproduction path
4. likely root cause
5. fix strategy
6. verification plan

Issue:
[paste logs, symptoms, and repro]
```

## Example

<details>
<summary>📋 Real-world prompt example</summary>

```text
Investigate the issue below as a production bug.

Required output:
1. observed versus expected behavior
2. probable failure boundary
3. cheapest reproduction path
4. likely root cause
5. fix strategy
6. verification plan

Issue:
Users report "500 Internal Server Error" on password reset since this morning (Mar 20, ~8am).
Logs show: "TypeError: Cannot read properties of undefined (reading 'expires_at')"
Stack trace points to src/services/auth.ts line 142.
Last deploy was yesterday at 6pm — added reset_token_expires_at column.
Staging works fine. Only production is affected. ~30 users impacted so far.
```

</details>

