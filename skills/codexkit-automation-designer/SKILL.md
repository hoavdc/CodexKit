---
name: codexkit-automation-designer
description: Design safe recurring Codex automations with clear prompts, outputs, schedules, and gating rules.
version: 1.0.0
category: automation
---

# Automation Designer

Use this skill when a task should happen repeatedly and you need more than just a schedule.

## Automation quality bar

- the task must be self-contained
- output destination must be clear
- skip conditions should be explicit
- noisy automations should be rejected

## Workflow

1. Define the recurring problem.
2. Write a prompt that describes only the task.
3. Specify output shape and success criteria.
4. Add guards: only if changed, only on weekdays, skip if empty.
5. Choose a schedule that matches human response capacity.

Use `references/automation-template.md` as the default structure.

## Quality Criteria

- [ ] Trigger conditions and input requirements are unambiguous
- [ ] Each automated step produces a verifiable output
- [ ] Error handling and fallback paths are defined
- [ ] Manual override points are documented

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the workflow produce the expected output for the defined inputs? |
| **Completeness** | Are all trigger conditions, edge cases, and error paths handled? |
| **Context-fit** | Is the automation appropriate for the frequency and criticality of this task? |
| **Consequence** | If this ran unattended and failed silently, what would the downstream impact be? |

## Edge Cases

- **Input format varies unexpectedly** — Add a normalization step at entry. Alert the operator on format mismatches.
- **Downstream system is unavailable** — Queue the output and retry with exponential backoff. Alert after N failures.
- **Partial execution completes** — Ensure idempotency — re-running from the start produces the same result without duplication.

## Changelog

- v1.0.0 — Initial release
