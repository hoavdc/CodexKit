---
name: codexkit-test-hardening
description: Strengthen test coverage around changed behavior, edge cases, and regressions without writing noisy or brittle tests.
version: 1.0.0
---

# Test Hardening

Use this skill when code changes are underway or just landed and you need tests that actually protect behavior.

## Focus areas

- changed execution paths
- high-risk conditionals
- error handling
- serialization or contract boundaries
- regressions that can silently return

## Workflow

1. Identify the behavior that must remain true.
2. Choose the narrowest test level that can protect it.
3. Cover happy path, failure path, and one realistic edge.
4. Verify tests fail before the fix when possible.
5. Keep fixtures readable and cheap to maintain.

## Avoid

- snapshot-heavy tests with weak intent
- restating implementation details instead of behavior
- adding e2e coverage when a unit or integration test is enough
