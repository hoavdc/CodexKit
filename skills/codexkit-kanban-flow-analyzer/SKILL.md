---
name: codexkit-kanban-flow-analyzer
description: Analyze Kanban flow metrics to identify bottlenecks and improve team throughput. Covers Cycle Time, Throughput, WIP, and Flow Efficiency using Little's Law and Theory of Constraints. Use when a team wants to optimize delivery flow or improve predictability. Do not use for sprint-based Scrum planning — use sprint-planning-assistant instead.
version: 1.0.0
---

# Kanban Flow Analyzer

## Purpose

Transform raw task completion data into actionable flow insights — find bottlenecks, set WIP limits, and forecast delivery dates with confidence intervals.

## When to use

- team wants to reduce cycle time or improve delivery predictability
- WIP is growing and tasks are stalling in certain board columns
- management asks "when will this be done?" and the team has no data-driven answer
- transitioning from time-boxed sprints to continuous flow

## When not to use

- sprint planning with story points (use sprint-planning-assistant)
- strategic roadmap or portfolio prioritization
- teams with fewer than 4 weeks of historical data

## Inputs

- task data with start date and completion date (minimum 4 weeks history)
- board column names and WIP limits (if any)
- team size and working days per week
- specific questions or concerns about flow

## Procedure

1. **Calculate 4 core flow metrics**:
   - **Cycle Time**: days from "In Progress" to "Done" — report P50 (median) and P85
   - **Throughput**: items completed per week — report average and trend
   - **WIP**: items currently in progress — compare to team capacity
   - **Flow Efficiency**: (active work time / total elapsed time) × 100%
     - Typical: 15–25% | High-performing: > 40%
2. **Apply Little's Law**: Cycle Time = WIP ÷ Throughput
   - If cycle time is high but throughput is stable, WIP is too high
3. **Detect bottlenecks** using Theory of Constraints (5 Focusing Steps):
   - Identify the column with highest average queue time
   - Exploit: maximize throughput at the constraint
   - Subordinate: slow upstream to match constraint capacity
   - Elevate: add capacity or change process at constraint
   - Repeat: new constraint will emerge
4. **Set WIP limits**: initial recommendation = team size × 1.5 per column, then adjust based on data.
5. **Forecast delivery** using Monte Carlo simulation:
   - "If avg throughput = 12 items/week, 60-item backlog takes ~5 weeks at P85 confidence"

## Output

- flow metrics dashboard (Cycle Time, Throughput, WIP, Flow Efficiency)
- bottleneck analysis with identified constraint and root cause
- WIP limit recommendations per board column
- top 3 actionable improvements with expected impact
- Monte Carlo forecast (items by date at P50, P85, P95 confidence)

## Definition of done

- all 4 flow metrics are calculated and reported
- at least one bottleneck is identified with a root cause
- WIP limit recommendations are provided
- forecast includes at least P85 confidence level

## Examples

- "Analyze our Jira board data for the last 8 weeks — why are tasks stuck in Code Review?"
- "Our cycle time went from 5 days to 12 days. What happened?"
- "Set WIP limits for a 7-person team with columns: To Do, In Progress, Review, QA, Done."
