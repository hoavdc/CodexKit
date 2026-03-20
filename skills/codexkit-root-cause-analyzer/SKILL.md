---
name: codexkit-root-cause-analyzer
description: Conduct structured root cause analysis using Ishikawa (Fishbone), 5 Whys, and Pareto methods. Suitable for production incidents, quality defects, customer complaints, and recurring operational problems. Use when problems recur or when initial fixes do not resolve the issue. Do not use for one-time, obvious fixes or strategic decision-making.
version: 1.0.0
---

# Root Cause Analyzer

## Purpose

Move beyond symptomatic fixes to identify true root causes of recurring problems, using proven analytical methods and producing actionable corrective actions.

## When to use

- a problem has occurred more than once despite previous fixes
- a production incident needs thorough investigation
- quality defects are increasing and the cause is unclear
- customer complaints cluster around a specific area
- post-mortem or incident review

## When not to use

- the cause is obvious and the fix is straightforward
- strategic planning (use strategy tools)
- risk identification for future events (use risk-register)

## Inputs

- problem statement (what happened, when, how bad)
- impact data (who was affected, financial cost, customer impact)
- timeline of events leading to the problem
- previous fix attempts and their outcomes
- relevant process or system documentation
- available data or metrics related to the problem

## Procedure

1. **Define the problem** precisely:
   - What is happening vs. what should be happening?
   - When did it start? How often does it occur?
   - What is the quantified impact?
   - Template: "[Thing] is [problem] resulting in [impact] since [when]"
2. **Choose analysis method** based on problem type:
   - **5 Whys**: for linear causation chains (simple to moderate)
   - **Ishikawa / Fishbone**: for complex problems with multiple potential causes
     - 6M categories: Man, Machine, Method, Material, Measurement, Mother Nature (Environment)
   - **Pareto Analysis**: when multiple causes contribute and you need to prioritize
     - 80/20 rule: find the 20% of causes responsible for 80% of the impact
3. **Execute analysis**:
   - For 5 Whys: ask "why?" iteratively until you reach a systemic cause (typically 3–7 levels). Stop when the answer points to a process, policy, or system — not a person.
   - For Ishikawa: brainstorm causes in each 6M category, then validate with data.
   - For Pareto: list all contributing causes, quantify frequency or impact, sort descending, calculate cumulative %.
4. **Validate root cause** — confirm it is:
   - Actionable (you can do something about it)
   - Preventable (fixing it prevents recurrence)
   - Systemic (not blaming an individual)
5. **Define corrective actions** (CAPA framework):
   - Containment: immediate actions already taken
   - Corrective Action: fix the root cause
   - Preventive Action: prevent recurrence in similar processes
   - Each action: What | Who | When | Verification method
6. **Define recurrence metrics** — how will you know it's fixed?

## Output

- problem statement (one clear sentence with impact data)
- analysis output (5 Whys ladder, Fishbone diagram, or Pareto chart)
- validated root cause with supporting evidence
- CAPA table: Containment | Corrective | Preventive actions with owners and dates
- recurrence monitoring plan

## Definition of done

- root cause is systemic, not individual blame
- root cause is validated with evidence or data
- corrective and preventive actions are defined with owners and due dates
- recurrence metrics are established

## Examples

- "Our deployment failed 3 times this month. Run a 5 Whys analysis."
- "Customer complaints about delayed invoices are increasing. Do a Fishbone analysis."
- "We have 12 different bug types from last quarter. Use Pareto to prioritize which to fix first."
