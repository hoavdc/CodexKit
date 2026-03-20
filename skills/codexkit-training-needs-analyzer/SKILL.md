---
name: codexkit-training-needs-analyzer
description: Assess organizational training needs using ADDIE methodology and Kirkpatrick's 4-Level evaluation framework. Maps performance gaps to learning objectives using Bloom's taxonomy. Use when planning L&D budgets, designing training programs, or evaluating training effectiveness.
---

# Training Needs Analyzer

## When to Use

- When identifying skill gaps across teams or departments
- When building an annual training plan or L&D roadmap
- When leadership asks "what training do we need and why?"
- When evaluating ROI of existing training programs

## Procedure

### Step 1 — Performance Gap Analysis

Identify the gap between current and desired performance:

| Role / Team | Current Performance | Desired Performance | Gap | Business Impact |
|-------------|-------------------|--------------------|----|----------------|
| Sales reps | 25% close rate | 35% close rate | 10 pts | $2M revenue |
| Support | 4h avg response | 1h avg response | 3h | CSAT: 72→85 |

Source gap data from:
- Performance reviews
- Skill assessments
- Manager interviews
- Customer feedback / escalation data
- Industry benchmarks

### Step 2 — Root Cause Check

Not every gap is a training problem. Check:

| Root Cause | Training Solution? | Alternative |
|-----------|-------------------|-------------|
| Lack of knowledge | ✅ Yes | — |
| Lack of skill/practice | ✅ Yes | — |
| Lack of motivation | ❌ No | Management, incentives |
| Process/tool issues | ❌ No | Process redesign, tooling |
| Unclear expectations | ❌ No | Role clarity, OKRs |

Only proceed with training for genuine knowledge/skill gaps.

### Step 3 — Learning Objectives (Bloom's Taxonomy)

Write measurable objectives at the right cognitive level:

| Level | Verb | Example Objective |
|-------|------|-------------------|
| Remember | List, identify | List the 5 steps of the sales process |
| Understand | Explain, describe | Explain why discovery questions improve win rate |
| Apply | Use, demonstrate | Apply the SPIN framework in a mock call |
| Analyze | Compare, diagnose | Diagnose why a deal stalled and recommend next step |
| Evaluate | Assess, critique | Assess a proposal for alignment with client needs |
| Create | Design, build | Design a custom proposal for a complex enterprise deal |

### Step 4 — Delivery Recommendation

| Format | Best For | Cost | Engagement |
|--------|----------|------|-----------|
| Self-paced e-learning | Knowledge transfer, compliance | Low | Medium |
| Live workshop | Skill practice, collaboration | Medium | High |
| Coaching / mentoring | Behavior change, leadership | High | Very High |
| On-the-job training | Applied skills, processes | Low | High |
| Blended | Complex programs | Medium | High |

### Step 5 — Evaluation Plan (Kirkpatrick 4 Levels)

| Level | Question | Measurement | Timing |
|-------|----------|-------------|--------|
| 1. Reaction | Did they like it? | Post-session survey (≥4/5) | Immediately |
| 2. Learning | Did they learn? | Pre/post assessment (≥80% pass) | End of training |
| 3. Behavior | Do they apply it? | Manager observation, KPI tracking | 30–90 days |
| 4. Results | Did business improve? | Revenue, CSAT, retention metrics | 6–12 months |

### Step 6 — Budget Estimate

| Item | Cost | Notes |
|------|------|-------|
| Content development | $X | Internal or vendor |
| Facilitator time | $X | Hours × rate |
| Platform/tools | $X | LMS, licenses |
| Participant time | $X | Hours × avg salary (opportunity cost) |
| **Total** | **$X** | |
| **Cost per learner** | **$X** | |

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Performance data | Yes | Current vs desired metrics |
| Target audience | Yes | Roles, team sizes |
| Business objectives | Yes | What outcomes training should achieve |
| Budget constraints | Recommended | Available L&D budget |

## Output

```markdown
## Training Needs Assessment — [Organization / Department]

### Priority Gaps

| # | Gap | Audience | Impact | Root Cause | Training? |
|---|-----|----------|--------|-----------|-----------|
| 1 | Low close rate | Sales (25 ppl) | $2M revenue | Skill gap | ✅ Yes |
| 2 | Slow response | Support (15 ppl) | CSAT drop | Process + skill | ⚠️ Partial |

### Recommended Programs

| Program | Format | Duration | Audience | Learning Objectives |
|---------|--------|----------|----------|-------------------|
| Sales Excellence | Workshop + coaching | 3 days + 4 wks | Sales reps | Apply SPIN, create proposals |

### Evaluation Framework
[Kirkpatrick 4-level plan per program]

### Budget Summary
[Cost breakdown with per-learner cost]
```

## Definition of Done

- [ ] Performance gaps identified with data
- [ ] Root causes checked (training vs non-training)
- [ ] Learning objectives use Bloom's taxonomy verbs
- [ ] Delivery format recommended with justification
- [ ] Kirkpatrick evaluation plan included
- [ ] Budget estimated with per-learner cost
