---
name: codexkit-campaign-brief-writer
description: Write agency-standard creative briefs for marketing campaigns. Structure Background, Objective (SMART), Target Audience persona, Key Message, Mandatories, KPIs, Timeline, and Budget Allocation. Use when briefing agencies, creative teams, or internal marketing on a new campaign.
version: 1.0.0
category: scaffolding
---

# Campaign Brief Writer

## When to Use

- When launching a new marketing campaign (digital, ATL, BTL, or integrated)
- When briefing an external agency or freelance creative
- When internal marketing teams need a structured campaign kickoff
- When aligning stakeholders on campaign scope before execution

## Procedure

### Step 1 — Background & Context

1. Business context: Why this campaign now?
2. Product/service being promoted
3. Market situation and competitive context
4. Previous campaign results (if applicable)

### Step 2 — SMART Objective

- **S**pecific: What exactly do we want to achieve?
- **M**easurable: What metric defines success?
- **A**chievable: Is it realistic given budget and timeline?
- **R**elevant: How does it serve business goals?
- **T**ime-bound: When must it be achieved?

### Step 3 — Target Audience

Build a mini-persona:
- Demographics and psychographics
- Pain points and motivations
- Where they consume content
- Current perception of our brand
- Desired perception after campaign

### Step 4 — Key Message

1. Single-minded proposition (one sentence)
2. Supporting proof points (3 max)
3. Tone of voice guidelines
4. Brand personality traits to convey

### Step 5 — Mandatories & Constraints

- Brand guidelines (logo, colors, fonts)
- Legal/regulatory requirements
- Do's and don'ts
- Channels and formats required

### Step 6 — KPIs & Measurement

| KPI | Target | Measurement Tool |
|-----|--------|-----------------|
| Impressions | X | Platform analytics |
| CTR | X% | Google Analytics |
| Conversions | X | CRM/attribution |
| Brand lift | X% | Survey |

### Step 7 — Timeline & Budget

| Phase | Dates | Budget |
|-------|-------|--------|
| Creative development | | |
| Production | | |
| Media buy | | |
| Launch | | |
| Optimization | | |
| Reporting | | |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Product/service | Yes | Description |
| Campaign objective | Yes | SMART format |
| Target audience | Yes | Persona or description |
| Budget range | Recommended | Currency amount |
| Timeline | Yes | Start and end dates |

## Output

```markdown
## Campaign Brief — [Campaign Name]

### Background
[Business context and why now]

### Objective
Increase trial signups by 30% within Q3 through a targeted digital campaign
across LinkedIn and Google Ads, supporting the company's annual growth target.

### Target Audience
| Attribute | Detail |
|-----------|--------|
| Role | VP/Director of Engineering |
| Company size | 50–500 employees |
| Pain point | Scaling development velocity |
| Content habits | LinkedIn, Hacker News, podcasts |

### Key Message
**"Ship 2x faster without hiring 2x"**
- Proof 1: 40% reduction in CI/CD time
- Proof 2: Used by 500+ engineering teams
- Proof 3: SOC 2 compliant from day one

### Tone: Confident, technical, peer-to-peer (not salesy)

### Mandatories
- Use updated brand guidelines v3.0
- Include legal disclaimer for trial terms
- All assets in English, preview in dark mode

### KPIs
| KPI | Target |
|-----|--------|
| Trial signups | 3,000 |
| CPL | < $25 |
| CTR | > 1.5% |

### Timeline & Budget
| Phase | Dates | Budget |
|-------|-------|--------|
| Creative | Apr 1–15 | $5,000 |
| Production | Apr 15–22 | $3,000 |
| Media | Apr 22 – Jun 30 | $40,000 |
| Total | | $48,000 |
```

## Definition of Done

- [ ] Background and business context provided
- [ ] SMART objective defined
- [ ] Target audience persona complete
- [ ] Key message with proof points
- [ ] KPIs with measurable targets
- [ ] Timeline and budget allocation
- [ ] Mandatories and constraints listed

## Examples

### Prompt

```text
Write a campaign brief for launching our new AI code review tool.
Target: Engineering leaders at mid-market companies.
Budget: $50K. Timeline: Q2. Goal: 3,000 free trial signups.
Channels: LinkedIn, Google Search, Dev podcasts.
```

## Quality Criteria

- [ ] All placeholder sections are filled with domain-specific content
- [ ] Structure follows the relevant industry standard or framework
- [ ] Language matches target audience (technical / executive / legal)
- [ ] Output is ready for review — not a rough draft requiring major rework

## Verification (4C)

| Check | Question |
|-------|----------|
| **Correctness** | Does the draft structure follow the stated framework or industry standard? |
| **Completeness** | Are all required sections present with substantive (not placeholder) content? |
| **Context-fit** | Does tone, detail level, and terminology match the intended audience? |
| **Consequence** | If sent to the intended recipient without further editing, what would fail? |

## Edge Cases

- **No existing template for this type** — Use the closest available template and document all customizations made.
- **Stakeholder requirements conflict** — Flag conflicts explicitly in the draft. Do not silently choose one requirement over another.
- **Output required in multiple formats** — Produce the canonical format first, then derive others. Note any formatting limitations.

## Changelog

- v1.0.0 — Initial release
