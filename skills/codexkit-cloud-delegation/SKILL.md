---
name: codexkit-cloud-delegation
description: Break complex work into bounded Codex delegation tasks with clear ownership, expected outputs, and integration checkpoints.
version: 1.0.0
category: infra
---

# Cloud Delegation

Use this skill when the task is large enough to benefit from multiple Codex runs, worktrees, or specialized passes.

## Workflow

1. Separate blocking work from parallel sidecar work.
2. Assign each delegated task a narrow objective and write scope.
3. Require the delegated worker to report changed files and validation run.
4. Integrate results quickly instead of waiting on every branch.
5. Keep final synthesis centralized.

## Good delegated tasks

- isolated test authoring
- docs updates after implementation
- codebase reconnaissance on a bounded topic
- verification passes that can run while implementation continues

## Avoid

- delegating the immediate critical path
- overlapping write scopes
- vague asks like "analyze everything"

## Quality Criteria

- [ ] All dependencies and prerequisites are documented
- [ ] Changes are reversible or include a rollback plan
- [ ] Security implications are assessed for each configuration change
- [ ] Monitoring and alerting are defined for post-deployment validation

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Are all configurations, permissions, and dependencies accurate? |
| **Completeness** | Does the setup cover dev, staging, and prod environments as needed? |
| **Context-fit** | Is the solution proportional to the problem (not over/under-engineered)? |
| **Consequence** | If deployed as-is to production, what is the highest-risk failure mode? |

## Edge Cases

- **Target environment has pre-existing configuration** — Scan for conflicts before applying changes. Document what to preserve.
- **Permissions differ between environments** — Test in staging first. Document the minimum permissions required.
- **Third-party service is unavailable or deprecated** — Document fallback or alternative. Include health-check endpoints.

## Changelog

- v1.0.0 — Initial release
