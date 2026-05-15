---
name: codexkit-sop-writer
description: Draft standard operating procedures with scope, roles, steps, controls, exceptions, and review cadence. Use when a recurring business process needs clear repeatable instructions.
version: 1.0.0
category: scaffolding
---

# SOP Writer

## When to Use

- Documenting a recurring office, operations, finance, HR, support, or admin process.
- Turning tribal knowledge into repeatable instructions.
- Creating a first SOP draft for review by a process owner.
- Standardizing handoffs, approvals, evidence capture, or exception handling.

## Procedure

### Step 1 - Define Scope

State process purpose, start trigger, end state, included work, excluded work, and target users.

### Step 2 - Identify Roles

List process owner, performers, approvers, reviewers, and escalation contacts.

### Step 3 - Write Procedure

Use numbered steps. Each step should include:
- action
- owner
- input
- system or document used
- expected output

### Step 4 - Add Controls And Exceptions

Document approval gates, quality checks, evidence retained, common exceptions, and escalation rules.

### Step 5 - Add Maintenance

Set review cadence, version owner, and change log expectations.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Process name and goal | Yes | Plain language |
| Process trigger and end state | Recommended | Event, deadline, output |
| Roles involved | Recommended | Owner, performer, approver |
| Current steps | Recommended | Notes, bullets, transcript |
| Controls or policies | Optional | Approval rules, compliance needs |

## Output

```markdown
# SOP - [Process Name]

## Purpose
## Scope
## Roles And Responsibilities
## Inputs And Systems
## Procedure
## Quality Checks
## Exceptions And Escalation
## Records / Evidence
## Review Cadence
## Changelog
```

## Quality Criteria

- [ ] A new team member can follow the SOP without relying on tribal knowledge.
- [ ] Each step has an owner and expected output.
- [ ] Exceptions and escalation paths are clear.
- [ ] Controls and evidence requirements are included where relevant.
- [ ] The SOP avoids policy overclaims and is marked for process-owner review.

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the SOP match the actual process and tool reality? |
| **Completeness** | Are scope, roles, steps, controls, exceptions, evidence, and maintenance covered? |
| **Context-fit** | Is the level of detail appropriate for process risk and frequency? |
| **Consequence** | What could break if someone followed this SOP exactly? |

## Edge Cases

- **Process is not stable yet** - Draft a temporary runbook and mark review date.
- **Multiple teams perform variants** - Document the common path first, then add variant sections.
- **Regulated process** - Include evidence and approval controls, and require SME/legal/compliance review.
- **No clear owner** - Flag ownership as a blocker before finalizing.

## Examples

> **Prompt:** "Write an SOP for monthly vendor invoice approval. Include owner roles, approval thresholds, exceptions, and evidence retention."

> **Bad pattern:** A paragraph describing the process.
> **Good pattern:** A step-by-step procedure with owner, input, output, control, and escalation.

## Definition of Done

- [ ] SOP has a named owner and review cadence.
- [ ] Steps are numbered and executable.
- [ ] Exceptions and evidence handling are documented.
- [ ] Human review requirements are visible.

## Changelog

- v1.0.0 - Initial release
