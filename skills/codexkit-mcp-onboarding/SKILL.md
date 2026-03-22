---
name: codexkit-mcp-onboarding
description: Evaluate and phase MCP adoption with a bias toward the smallest set of integrations that materially improve engineering work.
version: 1.0.0
category: runbook
---

# MCP Onboarding

Use this skill when deciding whether a repo or team should add MCP servers and how to roll them out safely.

## Workflow

1. Start from real engineering tasks, not tool hype.
2. Map each task to the minimum useful MCP capability.
3. Prefer read-only or low-risk integrations first.
4. Define who owns secrets, scopes, and monitoring.
5. Document why each server exists and when to remove it.

## Strong candidates

- docs and API lookup
- issue tracker triage
- repository metadata and pull request context
- observability lookups with strict access control

## Avoid

- installing every available MCP server
- shipping write access without auditability
- embedding team-specific secrets in public examples

## Quality Criteria

- [ ] Steps are executable in sequence without external context
- [ ] Decision points have clear if/then branching
- [ ] Rollback or abort procedures are documented for risky steps
- [ ] Expected duration or time-per-step is estimated

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Do the steps execute correctly in the order specified? |
| **Completeness** | Are decision points, error handling, and escalation paths all documented? |
| **Context-fit** | Could someone with the right access but no prior context complete this runbook? |
| **Consequence** | If Step N fails and the operator skips to Step N+1, what breaks? |

## Edge Cases

- **Steps require access the operator doesn't have** — Document exact access requirements upfront. Include escalation contact for emergency access.
- **Environment differs from documented state** — Add a pre-flight check as Step 0 to verify prerequisites before starting.
- **Runbook is triggered during off-hours** — Document who to contact and which steps can be safely deferred to business hours.

## Changelog

- v1.0.0 — Initial release
