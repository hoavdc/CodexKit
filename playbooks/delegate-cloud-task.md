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
