# CodexKit v0.9.0 — Skills That Actually Verify Themselves

> **82 skills. 5 layers. 21 domain-enriched. Community-ready.**

## What's new

This release transforms CodexKit from a flat collection of prompts into a **layered skill operating system** where every skill knows how to verify its own output and evolve from real-world usage.

### Domain-specific quality gates for 21 core skills

The 20 most impactful skills now ship with three companion files — written by domain experts, not generic templates:

| Asset | What it does |
|-------|-------------|
| `verification/checklist.md` | 4C quality gates (Correctness, Completeness, Context-fit, Consequence) with questions specific to each skill's domain |
| `examples/good-output.md` | Annotated real-world scenarios showing what a well-executed output looks like |
| `examples/common-mistakes.md` | Three anti-patterns per skill — the mistakes that waste the most time — with explanations and fixes |

**Example**: The `codexkit-incident-postmortem` checklist doesn't ask generic quality questions — it asks "Does the timeline include detection-to-resolution with timestamps?" and "Are action items assigned with owners and deadlines, not vague 'we should improve' language?"

### Executable Tier 3 assets for technical skills

5 technical skills now ship with runnable scripts and starter templates:

- **test-hardening** → `coverage-gap-finder.sh` — multi-language coverage report generator
- **sql-query-builder** → `query-validator.sql` — checks execution plans, NULL traps, cardinality explosions
- **docs-shipper** → `readme-template.md` + `changelog-template.md` — Keep a Changelog format
- **automation-designer** → `automation-spec.md` — full automation specification template
- **project-governance-pilot** → `charter-template.md` + `raci-template.md` — project charter + RACI matrix

### Evolution system: skills that learn from usage

- **`/evolve-skill` workflow**: When you discover an edge case, the workflow classifies the change type, applies the right version bump, updates the changelog, and validates the result.
- **`gotchas-template.md`**: Accumulate real-world workarounds per skill — each entry captures the symptom, root cause, and fix so the knowledge doesn't get lost.

### Smarter validation

- `validate-pack.mjs` now **lints v2 sections** — warns if a skill is missing Quality Criteria, Verification (4C), Edge Cases, or Changelog.
- Pack stats now show a **per-category skill breakdown** so you can see which domains are strongest and which need attention.

## Before vs After

| | v0.8.0 | v0.9.0 |
|---|--------|--------|
| Skill files | `SKILL.md` + `agents/` only | 3-tier system with verification, examples, scripts, templates |
| Output verification | Manual — hope for the best | 4C checklists with domain questions |
| Learning from mistakes | None | `gotchas.md` + `/evolve-skill` workflow |
| Validation depth | Frontmatter + structure | + v2 section lint + category breakdown |
| Anti-patterns documented | 0 | 60 anti-patterns across 20 skills |
| Executable helpers | 0 | 7 scripts/templates for 5 technical skills |

## Community contribution opportunity

**61 skills** still need Tier 2 enrichment. This is the single highest-impact way to contribute to CodexKit.

### How to contribute a Tier 2 enrichment

1. Pick a skill you know well from the [skill list](./skill-finder.md)
2. Create `verification/checklist.md` — domain-specific 4C questions
3. Create `examples/good-output.md` — annotated scenario
4. Create `examples/common-mistakes.md` — 3 anti-patterns with fixes
5. Reference `skills/codexkit-skill-template/` for the expected format
6. Run `node scripts/validate-pack.mjs` and open a PR

### Skills most in need of enrichment

| Domain | Skills needing enrichment |
|--------|--------------------------|
| Finance & Legal | fpa-scenario-modeling, fpa-rolling-forecast, audit-readiness-checker, contract-drafter, legal-memo-writer, legal-due-diligence |
| HR & Operations | job-description-writer, performance-review-writer, interview-guide-builder, supplier-evaluation, procurement-rfp-writer |
| Strategy & Marketing | strategic-analysis-porter, competitor-intelligence, campaign-brief-writer |
| Engineering | architecture-decision-writer, api-design-reviewer |
| Cross-functional | decision-log, crisis-communication, policy-document-writer |

### Deep Research shortcut

Use [`templates/deep-research-prompt.md`](./templates/deep-research-prompt.md) with ChatGPT Deep Research, Gemini, or Perplexity Pro to generate the domain knowledge for any skill enrichment. The 6-section output maps directly into the SKILL.md and companion files.

## Install / Update

```bash
# New install
bash ./START-HERE.sh

# Update existing
bash ./UPDATE.sh

# Validate
node scripts/validate-pack.mjs
```

Windows users: double-click `START-HERE-WINDOWS.cmd` or `UPDATE-WINDOWS.cmd`.

## Full changelog

See [CHANGELOG.md](./CHANGELOG.md) for the complete list of changes.
