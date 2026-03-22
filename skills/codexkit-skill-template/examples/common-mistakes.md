# Common Mistakes — Skill Template

> Anti-patterns frequently seen in skill authoring. Avoid these.

## Mistake 1: Vague Procedure Steps

❌ **Bad:** "Step 2 — Analyze the data"

✅ **Good:** "Step 2 — Segment responses by department. Produce a cross-tabulation table with N, Mean, and significance flag."

**Why it matters:** An AI agent cannot execute "analyze." It needs a concrete deliverable.

---

## Mistake 2: Generic Verification Questions

❌ **Bad:** "Is the output correct?"

✅ **Good:** "Does the NPS calculation exclude neutral responses (7–8) from both promoter and detractor counts?"

**Why it matters:** Generic questions produce generic answers. Domain-specific questions catch domain-specific errors.

---

## Mistake 3: Missing Edge Cases

❌ **Bad:** No edge cases section, or "N/A"

✅ **Good:** "If the client describes needs in vague terms, run a clarification round before proceeding. Ask: What does success look like in 90 days?"

**Why it matters:** Edge cases are where AI fails most. Documenting them prevents repeated failures.

---

## Mistake 4: Compound Skills

❌ **Bad:** `codexkit-analyze-data-build-dashboard-send-report`

✅ **Good:** Three separate skills: `codexkit-data-analyzer`, `codexkit-dashboard-designer`, `codexkit-report-sender`

**Why it matters:** One skill = one task. Compound skills confuse agent routing and reduce reuse.

---

## Mistake 5: No Quality Criteria

❌ **Bad:** "Output should be good quality"

✅ **Good:**
- "All action items have a named owner and a calendar date"
- "No section exceeds 200 words without a table or visual break"
- "Executive summary is readable in under 60 seconds"

**Why it matters:** Without criteria, "done" is subjective. With criteria, "done" is verifiable.
