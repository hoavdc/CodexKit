---
name: codexkit-safe-pi-planning
description: Facilitate SAFe 6.0 PI Planning events. Structure the 2-day cadence, generate PI Objectives with Business Value scores, build the Program Board for dependency visualization, and run the Confidence Vote. Use before every Program Increment when the organization follows SAFe.
---

# SAFe PI Planning Facilitator

## When to Use

- Before a new Program Increment (PI) starts
- When an Agile Release Train (ART) needs to align on the next 8–12 weeks
- When cross-team dependencies must be mapped and risks must be surfaced
- When PI Objectives need to be written with quantified Business Value

## Procedure

### Step 1 — Preparation (Pre-Event)

1. Collect team capacity for each iteration (available story points or throughput)
2. Pull the prioritized feature backlog from Product Management
3. Identify known architectural and cross-team dependencies
4. Prepare the blank Program Board (teams × iterations matrix)

### Step 2 — Day 1: Draft Plan

1. **Business Context** — Product Management presents vision and top features
2. **Architecture Vision** — System Architect presents enablers and tech runway
3. **Team Breakout #1** — Each team drafts iteration plans, identifies dependencies
4. **Draft Plan Review** — Teams present plans; stakeholders flag risks
5. **Management Q&A** — Address impediments, resource conflicts, scope concerns

### Step 3 — Day 2: Finalize

1. **Team Breakout #2** — Adjust plans based on feedback, resolve dependency conflicts
2. **Program Board Finalization** — All dependencies mapped as strings on the board
3. **PI Objectives** — Each team writes 5–8 objectives using SMART format
4. **Business Value** — Product Management assigns BV score (1–10) to each objective
5. **Confidence Vote** — Fist of five (1–5); reshuffle if average < 3

### Step 4 — Output

1. Compile PI Objectives table (Objective / BV / Committed vs Uncommitted)
2. Generate Program Board visualization (dependency map)
3. Document risks identified during planning
4. Record Confidence Vote result

## Inputs

| Input | Required | Format |
|-------|----------|--------|
| Feature backlog | Yes | Priority-ordered list with descriptions |
| Team capacity per iteration | Yes | Story points or throughput number |
| Known dependencies | Recommended | From/To team + feature reference |
| ART roster | Yes | List of teams in the ART |

## Output

```markdown
## PI Objectives — [Team Name]

| # | Objective | Business Value | Type |
|---|-----------|---------------|------|
| 1 | [SMART objective] | 8 | Committed |
| 2 | [SMART objective] | 6 | Committed |
| 3 | [Stretch objective] | 4 | Uncommitted |

## Program Board

| Team / Iteration | I1 | I2 | I3 | I4 | I5 |
|---|---|---|---|---|---|
| Team Alpha | Feature A | Feature B ──dep──→ | | Feature D | |
| Team Beta | | ←──dep── Feature C | Feature E | | |

## Risks (ROAM)

| Risk | Category | Owner | Status |
|------|----------|-------|--------|
| API contract not finalized | Resolved | Arch | ROAM-R |

## Confidence Vote: 3.8 / 5.0 — PROCEED
```

## Definition of Done

- [ ] All teams have 5–8 PI Objectives with Business Value scores
- [ ] Program Board shows all cross-team dependencies
- [ ] ROAM risk board is populated
- [ ] Confidence Vote ≥ 3.0
- [ ] PI Objectives distinguish Committed vs Uncommitted

## Examples

### Prompt

```text
We are starting PI 25.2 for our ART with 4 teams.
Here is our feature backlog: [paste features]
Team capacities: Alpha=120sp, Beta=100sp, Gamma=85sp, Delta=110sp
Known dependency: Team Alpha's Payment API is needed by Team Beta in I2.
Generate the PI Planning output including objectives, program board, and risks.
```
