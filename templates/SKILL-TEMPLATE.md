# Skill Template — v2 (5-Layer Framework)

> Copy this file to `skills/codexkit-{your-skill}/SKILL.md` when creating a new skill.
> Replace all `{PLACEHOLDERS}` and remove this instruction block.

---

```markdown
---
name: codexkit-{skill-name}
description: {One sentence — what it does + when to use it. Keep under 200 chars.}
version: 1.0.0
category: {knowledge | verification | data | automation | scaffolding | review | runbook | infra}
---

# {Skill Title}

## When to Use

- {Situation or trigger that calls for this skill}
- {Second trigger}
- {Third trigger}

## Procedure

### Step 1 — {Name}

{Instructions for this step. Use tables for structured output.}

### Step 2 — {Name}

{Continue with clear, actionable steps. Each step should have a concrete deliverable.}

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| {Primary data source} | Yes | {CSV, doc, conversation notes, etc.} |
| {Context or constraints} | Recommended | {Free text, structured brief, etc.} |

## Output

{Describe the concrete deliverable. Include a markdown example of the output format:}

```markdown
## {Output Title} — {Context}

### {Section 1}
{What goes here}

### {Section 2}
{What goes here}
```

## Quality Criteria

- [ ] {Measurable criterion 1 — e.g., "All sections have supporting data, not just assertions"}
- [ ] {Measurable criterion 2 — e.g., "Action items have specific owners and deadlines"}
- [ ] {Observable criterion — e.g., "Language matches target audience's technical level"}
- [ ] {Anti-pattern to reject — e.g., "No generic filler phrases like 'leverage synergies'"}

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | {Domain-specific: Is the logic/data/structure correct?} |
| **Completeness** | {Are all required sections present? Any gaps?} |
| **Context-fit** | {Does it match the audience, industry, and stated goal?} |
| **Consequence** | {If sent to a stakeholder right now, what is the biggest risk?} |

## Edge Cases

- **{Edge case 1}** — {What to do when this happens}
- **{Edge case 2}** — {Guidance for handling}
- **{Edge case 3}** — {Fallback approach}

## Examples

> **Good:** {Brief pattern — what a strong output looks like and why}

> **Bad:** {Brief anti-pattern — what a weak output looks like and how to fix}

## Definition of Done

- [ ] {Checklist item 1}
- [ ] {Checklist item 2}
- [ ] {Checklist item 3}

## Changelog

- v1.0.0 — Initial release
```

---

## Category Reference

| Category | Use for skills that... |
|----------|----------------------|
| `knowledge` | Provide domain expertise, onboarding, or reference material |
| `verification` | Validate, audit, or test outputs against standards |
| `data` | Read, process, analyze, or visualize data |
| `automation` | Chain repeatable steps into workflows with minimal input |
| `scaffolding` | Generate structured first drafts, frameworks, or outlines |
| `review` | Analyze, critique, and improve existing deliverables |
| `runbook` | Step-by-step procedures for recurring operational situations |
| `infra` | Technical delivery, CI/CD, system checks, and governance |

## Folder Structure

**Minimum (all skills):**
```
codexkit-{name}/
├── SKILL.md
└── agents/
    └── openai.yaml
```

**Tier 2 (high-value skills) — add:**
```
├── verification/
│   └── checklist.md        # 4C checklist for this domain
├── examples/
│   ├── good-output.md      # Annotated good example
│   └── common-mistakes.md  # Anti-patterns with fixes
└── CHANGELOG.md
```

**Tier 3 (technical skills) — additionally add:**
```
├── templates/              # Output templates, starter files
└── scripts/                # Validation or generation scripts
```
