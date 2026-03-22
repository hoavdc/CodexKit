# Deep Research Master Prompt for CodexKit Skills

> **Purpose:** Generate domain-expert knowledge for any CodexKit skill using external AI deep research tools.
>
> **How to use:**
> 1. Copy the prompt below
> 2. Replace the 3 `{PLACEHOLDERS}` with your skill info
> 3. Paste into **ChatGPT Deep Research**, **Gemini Deep Research**, or **Perplexity Pro**
> 4. Wait for results (2–10 minutes)
> 5. Map the 6 output sections back into your SKILL.md (see mapping table at bottom)

---

## The Prompt

```
You are a senior domain expert and quality assurance specialist.
I am building a structured AI skill module for the domain: **{SKILL_DOMAIN}**

The skill is called: **{SKILL_NAME}**
Its purpose: **{ONE_LINE_PURPOSE}**

Conduct deep research on best practices, frameworks, common pitfalls,
and quality standards for this domain. Produce a structured deliverable
with EXACTLY these 6 sections, using markdown format.

IMPORTANT RULES:
- Be specific — generic advice is worthless
- Cite sources when possible (books, standards, frameworks)
- Include numbers: percentages, benchmarks, thresholds
- Target audience: a knowledgeable AI agent executing this skill, not a beginner
- Maximum practical value — skip theory that doesn't change execution

---

### SECTION 1: Industry Best Practices
(What the top 1% practitioners do differently)

Research and list the top 5–8 authoritative frameworks, methodologies,
or standards used by professionals in this domain.

For each:
- **Name** of framework/standard
- **Source** (ISO, PMBOK, Harvard, McKinsey, etc.)
- **Key principle** in 1–2 sentences
- **When to apply** vs when to skip

---

### SECTION 2: Quality Criteria Checklist
(Measurable criteria that distinguish excellent from mediocre)

Create 8–12 quality criteria. Format each as:
- [ ] **{Criterion}** — {How to measure or verify it}

Mix both:
- Objective criteria (measurable, numeric thresholds)
- Subjective criteria (describe what "good" looks like concretely)

---

### SECTION 3: Common Failures & Anti-Patterns
(Non-obvious things that look correct but are wrong)

List 8–10 failure modes. For each:
| Failure | Root Cause | Early Signal | Mitigation |
|---------|-----------|-------------|-----------|
| {What goes wrong} | {Why} | {How to detect early} | {What to do instead} |

Prioritize: failures that look correct on the surface but produce
unreliable or harmful outputs.

---

### SECTION 4: Verification Questions (4C Framework)
(Domain-specific quality gates)

Provide domain-specific questions for each dimension:

**Correctness (Is it right?)**
1. {Question specific to this domain}
2. {Question specific to this domain}
3. {Question specific to this domain}

**Completeness (Is it done?)**
1. {Question specific to this domain}
2. {Question specific to this domain}
3. {Question specific to this domain}

**Context-fit (Does it match the situation?)**
1. {Question specific to this domain}
2. {Question specific to this domain}
3. {Question specific to this domain}

**Consequence (Is it safe to use?)**
1. {Question specific to this domain}
2. {Question specific to this domain}
3. {Question specific to this domain}

---

### SECTION 5: Good vs Bad Examples
(Contrasting pairs with annotation)

**Example A — GOOD:**
- Scenario: {realistic context}
- Output excerpt: {key portion}
- Why it works: {annotated strengths}
- Patterns to replicate: {list}

**Example B — BAD:**
- Scenario: {similar context}
- Output excerpt: {key portion}
- Why it fails: {annotated weaknesses}
- How to fix: {specific corrections}

---

### SECTION 6: Domain Glossary & References
(Terms an AI agent must know to do this job)

**Key Terms (10–15):**
| Term | Definition |
|------|-----------|
| {Term} | {Precise, operational definition} |

**Authoritative References (5–8):**
- {Book/Standard/URL — with why it matters}

**Regional / Industry Variations:**
- {Note any differences by geography, company size, or sector}
```

---

## Output → SKILL.md Mapping

| Research Section | Maps to SKILL.md Section | How to Use |
|-----------------|-------------------------|-----------|
| Section 1: Best Practices | `## Procedure` | Weave frameworks into your step-by-step procedure |
| Section 2: Quality Criteria | `## Quality Criteria` | Copy directly, adjust to fit your skill's scope |
| Section 3: Failures & Anti-Patterns | `## Edge Cases` | Condense into edge case bullets with mitigations |
| Section 4: Verification Questions | `## Verification (4C)` | Pick the 1–2 strongest questions per C dimension |
| Section 5: Good vs Bad Examples | `## Examples` or `examples/` folder | Use inline for simple skills, or split into folder for Tier 2 |
| Section 6: Glossary & References | Knowledge Layer / references | Keep as internal reference, cite in procedure where relevant |

---

## Quick-Start Examples

### Example 1: Incident Postmortem Skill

```
SKILL_DOMAIN: Incident Management & Post-Incident Review
SKILL_NAME: codexkit-incident-postmortem
ONE_LINE_PURPOSE: Write blameless postmortems using SRE methodology with
5-Whys root cause analysis, impact assessment, and corrective action items.
```

### Example 2: Contract Risk Review Skill

```
SKILL_DOMAIN: Commercial Contract Analysis & Legal Risk Assessment
SKILL_NAME: codexkit-contract-risk-review
ONE_LINE_PURPOSE: Analyze contracts for red flags, obligations, liability
exposure, and provide fallback negotiation positions.
```

### Example 3: Sprint Planning Skill

```
SKILL_DOMAIN: Agile Sprint Planning & Scrum Ceremonies
SKILL_NAME: codexkit-sprint-planning-assistant
ONE_LINE_PURPOSE: Organize backlog, estimate effort, build sprint
commitments aligned to capacity and team velocity.
```
