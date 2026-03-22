# 4C Verification Checklist — Process Mapper

> Use this checklist after generating output. Answer each question honestly.

## Correctness — Is it right?

- [ ] Process steps match what people actually do, not what the manual says
- [ ] Decision points have binary outcomes — no ambiguous 'it depends' branching
- [ ] Swim lanes correctly assign steps to the right roles

## Completeness — Is it done?

- [ ] Process has clear start trigger and end condition
- [ ] Exception paths (errors, rejections, escalations) are mapped
- [ ] Time estimates or SLAs are included for each step

## Context-fit — Does it match?

- [ ] Detail level matches the audience: overview for execs, step-level for operators
- [ ] Format is appropriate: flowchart for simple, BPMN for complex processes
- [ ] Process is mapped as-is before proposing to-be improvements

## Consequence — Is it safe to use?

- [ ] If a new hire follows this map on their first day, can they complete the process?
- [ ] If a step fails, is the escalation path clear?
- [ ] If this process runs 100x per day, where is the bottleneck?

---

**Final question:** _If this output were used immediately in production, what is the single biggest risk?_

Write the answer here before considering the skill output complete.
