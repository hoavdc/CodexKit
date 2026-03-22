---
name: codexkit-skill-template
description: Reference implementation of a v2 CodexKit skill. Copy this folder as a starting point for new skills. Demonstrates all 10 required sections, 4C verification, and the tier-2 folder structure.
version: 1.0.0
category: knowledge
---

# Skill Template (Exemplar)

> This is a working reference skill. Copy the entire `codexkit-skill-template/` folder and rename it to create a new skill.

## When to Use

- When creating a brand-new CodexKit skill from scratch
- When upgrading an existing skill to the v2 format
- When reviewing whether a skill meets the quality bar

## Procedure

### Step 1 — Define the Intent

Write a clear, one-sentence purpose. Answer: "After running this skill, the user will have ___."

### Step 2 — Map the Domain

Identify the 3–5 key frameworks or standards that professionals use in this domain. Use the [Deep Research Prompt](../../templates/deep-research-prompt.md) to generate domain knowledge if needed.

### Step 3 — Write the Procedure

Break the workflow into 4–7 steps. Each step should produce a concrete, visible output — not just "think about X."

### Step 4 — Add Verification

Write domain-specific 4C questions. The Consequence question is the most important: "If this output were used immediately, what could go wrong?"

### Step 5 — Document Edge Cases

List situations where the skill's default approach breaks down. For each, provide a mitigation or fallback.

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Skill domain description | Yes | Free text — the problem space this skill serves |
| Target audience | Yes | Who will consume the output (developers, managers, executives) |
| Existing materials | Recommended | Any templates, standards, or examples to build from |

## Output

A complete skill folder with:
- `SKILL.md` following v2 format (10 sections)
- `agents/openai.yaml` with interface block
- `CHANGELOG.md` initialized at v1.0.0

## Quality Criteria

- [ ] Purpose is a single, clear sentence — no compound goals
- [ ] Procedure steps each produce a visible deliverable
- [ ] Quality Criteria are measurable or concretely observable
- [ ] 4C Verification questions are domain-specific, not generic
- [ ] Edge Cases cover at least 3 realistic failure scenarios
- [ ] Examples show annotated contrast between good and bad output
- [ ] Frontmatter has `name`, `description`, `version`, `category`

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the skill's procedure match established domain frameworks? |
| **Completeness** | Are all 10 required sections present and substantive (not placeholder)? |
| **Context-fit** | Would the skill produce useful output for its stated audience? |
| **Consequence** | If a contributor copied this skill as-is, what would they get wrong? |

## Edge Cases

- **Skill spans multiple domains** — Split into separate skills. One skill = one task.
- **No established framework exists** — Document the decision rationale in Procedure. Use first-principles reasoning instead of citing standards.
- **Output format varies by context** — Provide 2–3 output templates and add selection criteria.

## Examples

> **Good:** A skill with 6 procedure steps where each step ends with "Produce: {specific table/section}." The 4C questions reference domain-specific metrics (e.g., "Does the NPS calculation exclude neutral responses?").

> **Bad:** A skill with a single step "Analyze the data and produce a report." Verification says "Check if it's correct." No edge cases listed.

## Definition of Done

- [ ] All 10 sections filled with substantive content
- [ ] ``agents/openai.yaml` created with valid interface block
- [ ] `node ./scripts/validate-pack.mjs` passes
- [ ] At least one person besides the author has reviewed the skill

## Changelog

- v1.0.0 — Initial release as exemplar for 5-Layer Skill Framework
