---
name: codexkit-automation-designer
description: Design safe recurring Codex automations with clear prompts, outputs, schedules, and gating rules.
version: 1.0.0
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
