---
name: codexkit-mcp-onboarding
description: Evaluate and phase MCP adoption with a bias toward the smallest set of integrations that materially improve engineering work.
version: 1.0.0
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
