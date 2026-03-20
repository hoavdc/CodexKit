---
name: codexkit-process-mapper
description: Map existing business processes using BPMN 2.0 notation or simplified swimlane diagrams. Identify waste, handoffs, decision points, and improvement opportunities using Lean principles (8 Wastes). Use when documenting workflows for SOP creation, automation assessment, or process improvement. Do not use for software architecture diagrams — use architecture tools instead.
version: 1.0.0
---

# Process Mapper

## Purpose

Document and analyze business processes to find waste, reduce cycle time, and identify automation or improvement opportunities.

## When to use

- mapping an existing process for documentation (SOP creation)
- analyzing a process for waste or bottleneck elimination
- preparing for process automation — need to map "as-is" before designing "to-be"
- onboarding new team members who need to understand workflows

## When not to use

- software system architecture (use engineering architecture tools)
- strategic planning or roadmapping
- one-time checklists with no recurring flow

## Inputs

- process name and scope (start trigger, end event)
- stakeholders involved (roles, departments)
- current steps and their sequence (rough list is fine)
- known pain points, bottlenecks, or complaints
- approximate time per step (if known)
- any existing documentation or SOPs

## Procedure

1. **Define scope**: specify the start trigger, end event, and boundaries.
2. **Map "as-is" process** in swimlane format:
   - Rows = roles or departments (who does what)
   - Columns = process phases
   - Symbols: Rounded Rectangle = Activity, Diamond = Decision, Arrow = Flow, Circle = Start/End
3. **Document each step**:
   - Step name (action verb + object)
   - Owner (role, not person name)
   - Estimated time
   - Input and output artifacts
   - Systems or tools used
4. **Identify the 8 Lean Wastes (DOWNTIME)**:
   - **D**efects: errors requiring rework
   - **O**verproduction: doing more than needed
   - **W**aiting: idle time between steps
   - **N**on-utilized talent: underusing people's skills
   - **T**ransportation: unnecessary movement of information or work
   - **I**nventory: work piling up between steps (WIP)
   - **M**otion: unnecessary steps or clicks
   - **E**xtra processing: over-engineering, gold-plating
5. **Calculate process metrics**:
   - Total cycle time (start to end)
   - Value-added time vs. non-value-added time
   - Process efficiency = Value-added time / Total cycle time × 100%
   - Number of handoffs between roles
6. **Recommend improvements** (prioritized by impact vs. effort):
   - Eliminate: remove waste steps
   - Automate: replace manual steps with tools
   - Simplify: reduce decision points or approvals
   - Parallelize: run independent steps concurrently

## Output

- process map (swimlane or BPMN 2.0 text notation)
- step detail table: Step | Owner | Time | Input | Output | Tool | Waste Type
- process metrics summary (cycle time, efficiency, handoff count)
- waste identification with DOWNTIME categorization
- improvement recommendations prioritized by impact/effort

## Definition of done

- process is mapped from start trigger to end event
- every step has an owner, estimated time, and input/output
- waste identification covers all 8 Lean waste types
- at least 3 improvement recommendations with prioritization

## Examples

- "Map our employee onboarding process from offer acceptance to first productive day."
- "Document the invoice processing workflow and find where delays happen."
- "We want to automate our customer support escalation — map the as-is process first."
