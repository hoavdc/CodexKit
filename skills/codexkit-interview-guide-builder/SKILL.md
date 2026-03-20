---
name: codexkit-interview-guide-builder
description: Build structured behavioral interview guides using the STAR method. Map job competencies to interview questions, provide scoring rubrics (1–5), and include follow-up probes and red/green flag indicators. Use when preparing for hiring interviews or standardizing interview practices.
---

# Interview Guide Builder

## When to Use

- When preparing questions for a specific role interview
- When standardizing interview practices across hiring managers
- When reducing bias through structured interviewing
- When training new interviewers on behavioral techniques

## Procedure

### Step 1 — Map Competencies

1. Extract key competencies from the job description
2. Categorize: Core (must-have) vs Nice-to-have
3. Assign competencies to interview stages (phone screen, technical, behavioral, culture)
4. Target 3–4 competencies per 45-minute interview slot

### Step 2 — Generate STAR Questions

For each competency, create questions that elicit:
- **S**ituation — Context and background
- **T**ask — What was expected or needed
- **A**ction — What the candidate specifically did
- **R**esult — Outcome and impact

Include 1 primary question + 2 follow-up probes per competency.

### Step 3 — Build Scoring Rubric

| Score | Level | Description |
|-------|-------|-------------|
| 5 | Exceptional | Clear STAR, ownership, measurable impact, learning applied |
| 4 | Strong | Good STAR, solid actions, positive result |
| 3 | Adequate | Basic STAR, some vagueness, acceptable result |
| 2 | Weak | Incomplete STAR, unclear actions, minimal impact |
| 1 | Poor | No relevant example, hypothetical response, red flags |

### Step 4 — Add Bias Safeguards

1. Avoid questions about protected characteristics
2. Score independently before discussing with other interviewers
3. Use the same questions for all candidates at the same stage
4. Focus on behaviors and outcomes, not personality or "culture fit"

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Job description | Yes | Full JD text |
| Interview stage | Yes | Phone / Technical / Behavioral / Final |
| Competency model | Recommended | List of competencies with definitions |
| Time allocated | Recommended | Minutes per interview |

## Output

```markdown
## Interview Guide — [Role] — [Stage]

### Competency 1: Problem Solving

**Primary Question:**
"Tell me about a time you faced a complex problem at work that didn't have an obvious solution. Walk me through how you approached it."

**Follow-up Probes:**
- "What alternatives did you consider before choosing your approach?"
- "What was the measurable outcome?"

**Scoring Rubric:**

| Score | Look For |
|-------|----------|
| 5 | Structured approach, evaluated multiple options, quantified result, applied learning |
| 4 | Clear problem definition, logical approach, positive outcome |
| 3 | Basic approach described, some structure, acceptable result |
| 2 | Vague description, no clear methodology, minimal impact |
| 1 | No relevant example, only hypothetical, blame-shifting |

**🟢 Green Flags:** Uses data, considers stakeholders, shows iterative thinking
**🔴 Red Flags:** Takes all credit in team settings, blames others, can't articulate approach

---

### Competency 2: Stakeholder Management

**Primary Question:**
"Describe a situation where you had to manage conflicting priorities from different stakeholders. How did you handle it?"

**Follow-up Probes:**
- "How did you communicate your decision to the stakeholder whose request was deprioritized?"
- "What would you do differently?"

[...repeat for each competency...]

---

### Interview Evaluation Summary

| Competency | Score (1–5) | Notes |
|------------|-------------|-------|
| Problem Solving | ___ | |
| Stakeholder Management | ___ | |
| Technical Depth | ___ | |
| Leadership | ___ | |
| **Overall** | ___ | |

**Recommendation:** ☐ Strong Hire ☐ Hire ☐ No Hire ☐ Strong No Hire
```

## Definition of Done

- [ ] Competencies mapped from JD to interview questions
- [ ] STAR-format questions with follow-up probes per competency
- [ ] Scoring rubric (1–5) with specific behavioral indicators
- [ ] Green/Red flag indicators per question
- [ ] Bias safeguard notes included
- [ ] Evaluation summary template with recommendation field

## Examples

### Prompt

```text
I'm interviewing candidates for a Senior Product Manager role.
This is a behavioral interview (45 minutes).
Key competencies: Strategic thinking, Stakeholder management, Data-driven decisions, Cross-functional leadership.
Build an interview guide with STAR questions and scoring rubrics.
```
